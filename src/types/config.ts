export interface Social {
  platform: string;
  url: string;
}

export interface Skill {
  name: string;
}

export interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  details: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
  github?: string;
}

export interface PortfolioConfig {
  personal: {
    name: string;
    role: string;
    description: string;
    avatar: string;
    location: string;
    email: string;
    socials: Social[];
  };
  about: {
    title: string;
    description: string;
    resume: string;
  };
  projects: Project[];
  skills: Skill[];
  education: Education[];
}
