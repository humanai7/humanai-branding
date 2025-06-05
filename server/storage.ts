import { users, contacts, projects, type User, type Contact, type Project, type InsertUser, type InsertContact, type InsertProject } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private projects: Map<number, Project>;
  private currentUserId: number;
  private currentContactId: number;
  private currentProjectId: number;

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
        title: "HumanAI7 Portfolio Website",
        description: "Modern portfolio website showcasing AI-powered web and content creation services. Built with cutting-edge technologies featuring responsive design, contact forms, and seamless user experience.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        demoUrl: "https://humanai7-portfolio.demo.com",
        githubUrl: "https://github.com/humanai7/portfolio-website",
        technologies: ["React", "Vite", "Express", "Tailwind CSS", "TypeScript"]
      },
      {
        title: "SmartCommerce AI",
        description: "An AI-powered e-commerce platform with intelligent product recommendations, automated inventory management, and personalized shopping experiences.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        demoUrl: "https://smartcommerce-ai.demo.com",
        githubUrl: "https://github.com/humanai7/smartcommerce-ai",
        technologies: ["React", "AI/ML", "Node.js"]
      },
      {
        title: "DataViz AI Dashboard",
        description: "Intelligent analytics dashboard that uses AI to automatically generate insights from complex datasets and create dynamic visualizations.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        demoUrl: "https://dataviz-ai.demo.com",
        githubUrl: "https://github.com/humanai7/dataviz-ai",
        technologies: ["D3.js", "Python", "TensorFlow"]
      },
      {
        title: "ContentCraft AI",
        description: "AI-driven content management system that automatically optimizes content for SEO, generates meta descriptions, and suggests improvements.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        demoUrl: "https://contentcraft-ai.demo.com",
        githubUrl: "https://github.com/humanai7/contentcraft-ai",
        technologies: ["Vue.js", "OpenAI API", "MongoDB"]
      },
      {
        title: "SmartChat Assistant",
        description: "Intelligent chatbot with natural language processing capabilities, context awareness, and seamless integration with business workflows.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        demoUrl: "https://smartchat.demo.com",
        githubUrl: "https://github.com/humanai7/smartchat",
        technologies: ["React", "NLP", "WebSocket"]
      },
      {
        title: "PortfolioGen AI",
        description: "AI-powered portfolio generator that creates personalized websites based on user input, with automatic layout optimization and content suggestions.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        demoUrl: "https://portfoliogen-ai.demo.com",
        githubUrl: "https://github.com/humanai7/portfoliogen-ai",
        technologies: ["Next.js", "GPT API", "Tailwind"]
      },
      {
        title: "LearnSmart AI",
        description: "Adaptive learning platform that uses AI to personalize educational content, track progress, and optimize learning paths for individual students.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        demoUrl: "https://learnsmart-ai.demo.com",
        githubUrl: "https://github.com/humanai7/learnsmart-ai",
        technologies: ["Angular", "Machine Learning", "PostgreSQL"]
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
