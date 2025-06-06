/**
 * HUMANAI Portfolio Backend Server
 * Main server entry point for the HUMANAI portfolio application
 * Handles API routes, static file serving, and development/production setup
 */

import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

// Initialize Express application instance
const app = express();

// Middleware setup for parsing incoming requests
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded form data

/**
 * Request logging middleware
 * Captures and logs API request details including timing and response data
 * @param req - Express request object
 * @param res - Express response object  
 * @param next - Next middleware function
 */
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  // Override res.json to capture response data for logging
  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  // Log API requests when response finishes
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      // Truncate long log lines for readability
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

/**
 * Main server initialization and startup
 * Configures routes, error handling, and starts the HTTP server
 */
(async () => {
  // Register all API routes and get HTTP server instance
  const server = await registerRoutes(app);

  /**
   * Global error handling middleware
   * Catches all unhandled errors and formats them for client consumption
   * @param err - Error object with optional status and message properties
   * @param _req - Express request object (unused)
   * @param res - Express response object for sending error response
   * @param _next - Next middleware function (unused)
   */
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // Environment-specific setup
  // Important: Setup Vite after all other routes to prevent catch-all interference
  if (app.get("env") === "development") {
    // Development: Setup Vite dev server with hot module replacement
    await setupVite(app, server);
  } else {
    // Production: Serve pre-built static files from dist folder
    serveStatic(app);
  }

  // Server startup configuration
  // Port 3000
  const port = Number(process.env.PORT || 3000);;
  server.listen({
    port,
    host: "0.0.0.0", // Accept connections from any IP address
    reusePort: true, // Allow port reuse for faster restarts
  }, () => {
    log(`serving on port ${port}`);
  });
})();
