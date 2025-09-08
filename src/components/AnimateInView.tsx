// app/components/AnimateInView.tsx
'use client';

import { motion } from 'framer-motion';

interface AnimateInViewProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function AnimateInView({ children, className, delay = 0 }: AnimateInViewProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: 'easeInOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}