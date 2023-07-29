'use client';

import { useState } from 'react';
import styles from './styles.module.scss';

const Navicon = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={isOpen ? styles.navicon_open : styles.navicon}
            onClick={() => setIsOpen(!isOpen)}
        >
            <span />
            <span />
            <span />
            <span />
        </div>
    );
};

export default Navicon;
