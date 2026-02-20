import { Project } from "@/types";
import { projectsData } from "@/lib/data";

/**
 * Service for fetching Project data.
 * Currently uses local static data. Can be swapped out for a database without affecting any React components.
 */
export const ProjectService = {
  /**
   * Fetch all visible projects.
   */
  async getAll(): Promise<Project[]> {
    return projectsData;
  },

  /**
   * Fetch projects by their category (e.g., open-source, proprietary).
   */
  async getByCategory(category: string): Promise<Project[]> {
    const all = await this.getAll();
    return all.filter((project) => project.category === category);
  },

  /**
   * Fetch a single project by ID.
   */
  async getById(id: string): Promise<Project | undefined> {
    const all = await this.getAll();
    return all.find((project) => project.id === id);
  },
};
