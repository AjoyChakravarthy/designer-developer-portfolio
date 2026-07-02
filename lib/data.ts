import fs from "fs";
import path from "path";
import type { Project } from "@/data/projects";
import type { Design } from "@/data/designs";

const projectsPath = path.join(process.cwd(), "content/projects.json");
const designsPath = path.join(process.cwd(), "content/designs.json");

export function readProjects(): Project[] {
  return JSON.parse(fs.readFileSync(projectsPath, "utf-8"));
}

export function readDesigns(): Design[] {
  return JSON.parse(fs.readFileSync(designsPath, "utf-8"));
}
