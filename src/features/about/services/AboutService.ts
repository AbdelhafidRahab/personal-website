import { Skill, TimelineRow } from "@/types";
import { skills, timelineData } from "@/lib/data";

/**
 * Service for fetching About Me data.
 */
export const AboutService = {
  /**
   * Fetch a list of the developer's skills.
   */
  async getSkills(): Promise<Skill[]> {
    return skills;
  },

  /**
   * Fetch the developer's timeline/experience data.
   */
  async getTimeline(): Promise<TimelineRow[]> {
    return timelineData;
  },
};
