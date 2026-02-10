/**
 * Represents a specific skill within a category.
 * Used for displaying skill badges.
 */
export interface SkillCategory {
  category: string;
  items: string[];
}

/**
 * Represents a project showcase entry.
 * Follows the STAR method (Situation, Task, Action, Result) structure for business appeal.
 */
export interface Project {
  title: string;
  status: 'In Development' | 'Production Used';
  tags: string[];
  description: string;
  highlights: {
    label: string; // e.g., "Challenge", "Solution", "Impact"
    text: string;
  }[];
}

/**
 * Represents the user's core profile information.
 */
export interface Profile {
  name: string;
  title: string;
  university: string;
  department: string;
  catchphrase: string;
  description: string;
  atcoder: {
    rating: number;
    rank: string;
    text: string;
  };
  socials: {
    github: string;
    atcoder: string;
    email: string;
  };
}