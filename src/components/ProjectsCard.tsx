import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { type Project } from '../types';

export const ProjectCard = ({ title, description, link, tags }: Project) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div layout className="card" onClick={() => setIsOpen(!isOpen)}>
            <motion.h4 layout="position">{title}</motion.h4>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <p>{description}</p>
                        <div className="tags">
                            {tags.map(t => <span key={t}>#{t}</span>)}
                        </div>
                        <a href={link} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}>View Code</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
