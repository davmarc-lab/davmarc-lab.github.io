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

    const iconStyle = { fontSize: '1.2rem', minWidth: '24px' };
    const rowStyle = { display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' };

    return (
        <section id="contact" style={{ padding: '3rem 0' }}>
            <h2>Contact</h2>
            <div style={{ marginTop: '1.5rem' }}>
                <div style={rowStyle}>
                    <FaEnvelope style={iconStyle} />
                    <span>{email}</span>
                    <button
                        onClick={copyToClipboard}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: copied ? '#42b883' : 'var(--text-color)',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '5px'
                        }}
                        title="Copy to clipboard"
                    >
                        {copied ? <FaCheck /> : <FaCopy />}
                    </button>
                </div>

                <div style={rowStyle}>
                    <FaGithub style={iconStyle} />
                    <a href={`https://${github}`} target="_blank" rel="noreferrer">
                        GitHub Profile
                    </a>
                </div>

                <div style={rowStyle}>
                    <FaLinkedin style={iconStyle} />
                    <a href={`https://${linkedin}`} target="_blank" rel="noreferrer">
                        LinkedIn Profile
                    </a>
                </div>

            </div>
        </section>
    );
};
