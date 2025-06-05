import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { sendEmail, formatContactEmail } from "./email";

/**
 * Registers all API routes for the HUMANAI portfolio backend
 * Sets up endpoints for projects, contacts, and email notifications
 * @param app - Express application instance to register routes on
 * @returns Promise<Server> - HTTP server instance for the application
 */
export async function registerRoutes(app: Express): Promise<Server> {
  /**
   * GET /api/projects - Retrieves all portfolio projects
   * Returns array of project objects with titles, descriptions, and technology stacks
   */
  app.get("/api/projects", async (req, res) => {
    try {
      // Fetch all projects from storage layer
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error) {
      // Return error response if projects cannot be fetched
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });

  /**
   * POST /api/contact - Handles contact form submissions
   * Validates form data, stores contact, and sends email notification
   * Request body: { name: string, email: string, message: string }
   */
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body against contact schema
      const validatedData = insertContactSchema.parse(req.body);
      // Store contact submission in database
      const contact = await storage.createContact(validatedData);
      
      // Format and send email notification to HUMANAI team
      const emailParams = formatContactEmail(validatedData);
      const emailSent = await sendEmail(emailParams);
      
      // Return success response with contact ID and email status
      res.status(201).json({ 
        message: "Message sent successfully! We'll get back to you within 24 hours.", 
        id: contact.id,
        emailSent 
      });
    } catch (error) {
      // Handle validation errors with detailed error messages
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ message: "Failed to submit contact form" });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contacts" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
