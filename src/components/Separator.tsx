import { motion } from 'framer-motion';

export const Separator = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 0.15, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="separator"
        />
    );
};
