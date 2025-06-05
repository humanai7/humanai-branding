/**
 * HUMANAI Portfolio Data Storage Layer
 * Provides in-memory data storage for development and prototyping
 * Includes interfaces for users, contacts, and projects
 */

import { users, contacts, projects, type User, type Contact, type Project, type InsertUser, type InsertContact, type InsertProject } from "@shared/schema";

/**
 * Storage interface defining all data operations
 * Provides type-safe methods for CRUD operations on all entities
 */
export interface IStorage {
  // User management operations
  /** Retrieve user by ID */
  getUser(id: number): Promise<User | undefined>;
  /** Find user by username */
  getUserByUsername(username: string): Promise<User | undefined>;
  /** Create new user account */
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form submissions
  /** Save contact form submission */
  createContact(contact: InsertContact): Promise<Contact>;
  /** Retrieve all contact submissions */
  getContacts(): Promise<Contact[]>;
  
  // Project portfolio management
  /** Get all portfolio projects */
  getProjects(): Promise<Project[]>;
  /** Add new project to portfolio */
  createProject(project: InsertProject): Promise<Project>;
}

/**
 * In-memory storage implementation for HUMANAI portfolio
 * Provides fast, temporary storage for development and prototyping
 * Data persists only during server session - suitable for demos and development
 */
export class MemStorage implements IStorage {
  // Private data stores using Maps for O(1) lookups
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private projects: Map<number, Project>;
  
  // Auto-incrementing ID counters for entity creation
  private currentUserId: number;
  private currentContactId: number;
  private currentProjectId: number;

  /**
   * Initialize storage with empty data structures and seed data
   * Sets up Maps for each entity type and initializes sample projects
   */
  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.projects = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentProjectId = 1;

    // Initialize with sample projects data
    this.initializeProjects();
  }

  private initializeProjects() {
    const sampleProjects: InsertProject[] = [
      {
        title: "Logistics Master App",
        description: "Comprehensive logistics management system with real-time tracking, route optimization, and inventory management. Features automated scheduling, delivery tracking, and analytics dashboard for supply chain optimization.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        demoUrl: "https://logistics-master.demo.com",
        githubUrl: "https://github.com/humanai7/logistics-master",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"]
      },
      {
        title: "HumanAI Website",
        description: "A modern portfolio website highlighting AI-powered web and content creation services. Designed with cutting-edge technologies, it features a fully responsive layout, interactive contact forms, and a seamless user experience optimized for all devices.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        demoUrl: "https://humanai7-portfolio.demo.com",
        githubUrl: "https://github.com/humanai7/portfolio-website",
        technologies: ["React", "Vite", "Express", "Tailwind CSS", "TypeScript"]
      }
    ];

    sampleProjects.forEach(project => {
      this.createProject(project);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = { 
      ...insertProject, 
      id,
      demoUrl: insertProject.demoUrl || null,
      githubUrl: insertProject.githubUrl || null
    };
    this.projects.set(id, project);
    return project;
  }
}

export const storage = new MemStorage();
