import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCopy, FaCheck } from 'react-icons/fa';
import { portfolioData } from '../data/content';

export const Contact = () => {
    const [copied, setCopied] = useState(false);
    const { email, github, linkedin } = portfolioData.contact;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact">
            <h2>Contact</h2>
            <div className="contact-container">
                {/* Email Row */}
                <div className="contact-row">
                    <FaEnvelope className="contact-icon" />
                    <span className="contact-text">{email}</span>
                    <button
                        onClick={copyToClipboard}
                        className={`copy-btn ${copied ? 'copied' : ''}`}
                        title="Copy to clipboard"
                    >
                        {copied ? <FaCheck /> : <FaCopy />}
                    </button>
                </div>

                {/* Social Links */}
                <div className="contact-row">
                    <FaGithub className="contact-icon" />
                    <a href={`https://${github}`} target="_blank" rel="noreferrer" className="contact-link">
                        GitHub
                    </a>
                </div>

                <div className="contact-row">
                    <FaLinkedin className="contact-icon" />
                    <a href={`https://${linkedin}`} target="_blank" rel="noreferrer" className="contact-link">
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};
