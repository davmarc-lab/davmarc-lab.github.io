import { portfolioData } from '../data/content';
import { ProjectCard } from './ProjectsCard.tsx';

export const Projects = () => {
    const currentProjects = portfolioData.projects.filter(p => p.isCurrent);
    const olderProjects = portfolioData.projects.filter(p => !p.isCurrent);

    return (
        <section id="projects">
            <h2>Projects</h2>
            <h3>Current Projects</h3>
            {currentProjects.map(p => <ProjectCard key={p.id} {...p} />)}

            <h3>Other Projects</h3>
            {olderProjects.map(p => <ProjectCard key={p.id} {...p} />)}
        </section>
    );
};
