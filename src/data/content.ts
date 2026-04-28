import { type PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
    about: {
        name: "Davide",
        education: "Computer Science",
        interests: ["React", "TypeScript", "UI Design"],
        bio: "Building clean, automated web experiences."
    },
    projects: [
        {
            id: 1,
            title: "Portfolio Lab",
            description: "A modular React portfolio with automated CI/CD.",
            link: "https://github.com/davmarc-lab/davmarc-lab.github.io",
            isCurrent: true,
            tags: ["React", "Vite", "GitHub Actions"]
        },
        {
            id: 2,
            title: "Older Project Name",
            description: "A description of a completed project.",
            link: "https://github.com/yourusername/old-project",
            isCurrent: false,
            tags: ["React", "Vite", "GitHub Actions"]
        }
    ],
    contact: {
        email: "davidemarchetti01@gmail.com",
        github: "github.com/davmarc-lab",
        linkedin: "linkedin.com/in/davide-marchetti-0a093217b/"
    }
};

