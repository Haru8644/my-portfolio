import type { IconType } from "react-icons";

export type Language = 'en' | 'ja';

export interface LocalizedString {
  en: string;
  ja: string;
}

export interface SkillItem {
  name: string;
  icon?: IconType;
}

export interface SkillCategory {
  category: LocalizedString;
  items: SkillItem[];
}

export interface ProjectLink {
  github?: string;
  demo?: string;
}

export interface ProjectHighlight {
  label: string;
  text: LocalizedString;
}

export interface Project {
  title: LocalizedString;
  status: 'In Development' | 'Production Used';
  tags: string[];
  description: LocalizedString;
  longDescription: LocalizedString;
  links: ProjectLink;
  highlights: ProjectHighlight[];
}

export interface Profile {
  name: LocalizedString;
  title: LocalizedString;
  university: LocalizedString;
  department: LocalizedString;
  catchphrase: LocalizedString;
  description: LocalizedString;
  atcoder: {
    rating: number;
    rank: LocalizedString;
  };
  socials: {
    github: string;
    atcoder: string;
    email: string;
  };
}