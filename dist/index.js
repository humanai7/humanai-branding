// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  // Private data stores using Maps for O(1) lookups
  users;
  contacts;
  projects;
  // Auto-incrementing ID counters for entity creation
  currentUserId;
  currentContactId;
  currentProjectId;
  /**
   * Initialize storage with empty data structures and seed data
   * Sets up Maps for each entity type and initializes sample projects
   */
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.contacts = /* @__PURE__ */ new Map();
    this.projects = /* @__PURE__ */ new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentProjectId = 1;
    this.initializeProjects();
  }
  initializeProjects() {
    const sampleProjects = [
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
        description: "Modern portfolio website showcasing AI-powered web and content creation services. Built with cutting-edge technologies featuring responsive design, contact forms, and seamless user experience.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        demoUrl: "https://humanai7-portfolio.demo.com",
        githubUrl: "https://github.com/humanai7/portfolio-website",
        technologies: ["React", "Vite", "Express", "Tailwind CSS", "TypeScript"]
      }
    ];
    sampleProjects.forEach((project) => {
      this.createProject(project);
    });
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.currentUserId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async createContact(insertContact) {
    const id = this.currentContactId++;
    const contact = {
      ...insertContact,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }
  async getContacts() {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
  async getProjects() {
    return Array.from(this.projects.values());
  }
  async createProject(insertProject) {
    const id = this.currentProjectId++;
    const project = {
      ...insertProject,
      id,
      demoUrl: insertProject.demoUrl || null,
      githubUrl: insertProject.githubUrl || null
    };
    this.projects.set(id, project);
    return project;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  demoUrl: text("demo_url"),
  githubUrl: text("github_url"),
  technologies: text("technologies").array().notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  subject: true,
  message: true
});
var insertProjectSchema = createInsertSchema(projects).pick({
  title: true,
  description: true,
  image: true,
  demoUrl: true,
  githubUrl: true,
  technologies: true
});

// server/routes.ts
import { z } from "zod";

// server/email.ts
async function sendEmail(params) {
  try {
    const timestamp2 = (/* @__PURE__ */ new Date()).toISOString();
    console.log("\n\u{1F525} NEW CONTACT FORM SUBMISSION \u{1F525}");
    console.log(`\u{1F4C5} Timestamp: ${timestamp2}`);
    console.log(`\u{1F4E7} Destination: ${params.to}`);
    console.log(`\u{1F464} Sender: ${params.from}`);
    console.log(`\u{1F4DD} Subject: ${params.subject}`);
    console.log("\u{1F4AC} Message Content:");
    console.log("\u2500".repeat(50));
    console.log(params.text);
    console.log("\u2500".repeat(50));
    console.log("\u2705 Contact form data logged successfully\n");
    const submissionData = {
      timestamp: timestamp2,
      destination: params.to,
      sender: params.from,
      subject: params.subject,
      message: params.text
    };
    console.log("\u{1F4EC} Email ready for delivery service integration");
    return true;
  } catch (error) {
    console.error("\u274C Contact form processing error:", error);
    return false;
  }
}
function formatContactEmail(contact) {
  const subject = `HUMANAI Contact: ${contact.subject}`;
  const text2 = `
New contact form submission from HUMANAI website:

Name: ${contact.name}
Email: ${contact.email}
Subject: ${contact.subject}

Message:
${contact.message}

---
Reply to: ${contact.email}
Submitted at: ${(/* @__PURE__ */ new Date()).toLocaleString()}
  `.trim();
  return {
    to: "humanai7.enquiries@gmail.com",
    // HUMANAI support email
    from: contact.email || "contact@humanai.dev",
    // Use contact's email or fallback
    subject,
    text: text2
  };
}

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/projects", async (req, res) => {
    try {
      const projects2 = await storage.getProjects();
      res.json(projects2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      const emailParams = formatContactEmail(validatedData);
      const emailSent = await sendEmail(emailParams);
      res.status(201).json({
        message: "Message sent successfully! We'll get back to you within 24 hours.",
        id: contact.id,
        emailSent
      });
    } catch (error) {
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
  app2.get("/api/contacts", async (req, res) => {
    try {
      const contacts2 = await storage.getContacts();
      res.json(contacts2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contacts" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import checker from "vite-plugin-checker";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    },
    allowedHosts: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server }
    // ❌ removed: allowedHosts (not needed in dev)
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 3e3;
  server.listen({
    port,
    host: "0.0.0.0",
    // Accept connections from any IP address
    reusePort: true
    // Allow port reuse for faster restarts
  }, () => {
    log(`serving on port ${port}`);
  });
})();
