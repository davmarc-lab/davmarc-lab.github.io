import { portfolioData } from '../data/content';

export const About = () => {
    const { education, bio, interests } = portfolioData.about;

    return (
        <section id="about">
            <h2>About Me</h2>

            <p className="about-bio-standalone">
                {bio}
            </p>

            <div className="about-cards-wrapper">
                {/* Card 1: Education */}
                <div className="about-mini-card">
                    <span className="pane-label">Education</span>
                    <p className="pane-content">{education}</p>
                </div>

                {/* The Vertical Divider */}
                <div className="vertical-divider-standalone" />

                {/* Card 2: Interests */}
                <div className="about-mini-card">
                    <span className="pane-label">Interests</span>
                    <div className="skills-grid pane-content">
                        {interests.map(interest => (
                            <span key={interest} className="skill-badge interest-badge">
                                {interest}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
