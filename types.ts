import { LucideIcon } from 'lucide-react';

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  tech?: string[];
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  impact: string;
  tech: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export interface Certification {
  name: string;
  issuer?: string;
}
