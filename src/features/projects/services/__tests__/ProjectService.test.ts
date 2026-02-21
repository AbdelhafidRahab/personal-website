import { ProjectService } from "../ProjectService";
import { projectsData } from "@/lib/data";

describe("ProjectService", () => {
  it("should fetch all projects successfully", async () => {
    const data = await ProjectService.getAll();
    expect(data.length).toBe(projectsData.length);
    expect(data[0].id).toBeDefined();
  });

  it("should fetch projects by category filter", async () => {
    // Assuming we have at least one proprietary project in data.ts
    const data = await ProjectService.getByCategory("proprietary");
    data.forEach((project) => {
      expect(project.category).toBe("proprietary");
    });
  });

  it("should fetch a specific project by id", async () => {
    // Assuming '1tik' is a valid ID in data.ts
    const idToFind = "1tik";
    const project = await ProjectService.getById(idToFind);
    expect(project).toBeDefined();
    expect(project?.id).toBe(idToFind);
  });

  it("should return undefined for a non-existent project id", async () => {
    const project = await ProjectService.getById("does-not-exist");
    expect(project).toBeUndefined();
  });
});
