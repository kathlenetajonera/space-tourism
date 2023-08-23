'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

type Props = {
    children: ReactNode;
};

const PageWrapper = ({ children }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 50 }}
            className={styles.container}
        >
            {children}
        </motion.div>
    );
};

export default PageWrapper;
