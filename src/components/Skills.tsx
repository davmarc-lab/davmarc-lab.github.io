import { skills } from '../data/skills';

const SkillGroup = ({ title, skills }: { title: string, skills: any[] }) => (
    <div className="card about-mini-card">
        <span className="pane-label">{title}</span>
        <div className="skills-row">
            {skills.map(skill => (
                <div key={skill.slug} className="skill-pill">
                    <img
                        src={`https://skillicons.dev/icons?i=${skill.slug}`}
                        alt={skill.name}
                        className="skill-icon-tiny"
                    />
                    <span>{skill.name}</span>
                </div>
            ))}
        </div>
    </div>
);

export const Skills = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            {/* Row 1: OS & Editors */}
            <div className="about-cards-wrapper">
                <SkillGroup title="OS" skills={skills.os} />
                <div className="vertical-divider-standalone" />
                <SkillGroup title="Editors" skills={skills.editors} />
            </div>

            <div className="category-spacer" />

            {/* Row 2: Languages & Utilities */}
            <div className="about-cards-wrapper">
                <SkillGroup title="Languages" skills={skills.languages} />
                <div className="vertical-divider-standalone" />
                <SkillGroup title="Utilities" skills={skills.utilities} />
            </div>

            <div className="category-spacer" />

            {/* Row 3: Frameworks & Notes */}
            <div className="about-cards-wrapper">
                <SkillGroup title="Frameworks" skills={skills.frameworks} />
                <div className="vertical-divider-standalone" />
                <SkillGroup title="Notes" skills={skills.notes} />
            </div>
        </section>
    );
};
