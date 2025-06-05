import express from "express";
import { createServer } from "http";
import { setupVite } from "./vite";

const app = express();
const server = createServer(app);

(async () => {
  await setupVite(app, server);
  server.listen(3000, () => {
    console.log("🚀 Dev server running at http://localhost:3000");
  });
})();
