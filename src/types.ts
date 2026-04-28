export interface SkillItem {
    name: string;
    slug: string;
}

export interface Skills {
    languages: SkillItem[];
    frameworks: SkillItem[];
    editors: SkillItem[];
    os: SkillItem[];
    utilities: SkillItem[];
    notes: SkillItem[];
}

export interface Project {
    id: number;
    title: string;
    description: string;
    link?: string;
    isCurrent: boolean;
    tags: string[];
}

export interface PortfolioData {
    about: {
        name: string;
        education: string;
        interests: string[];
        bio: string;
    };
    projects: Project[];
    contact: {
        email: string;
        github: string;
        linkedin: string;
    };
}
