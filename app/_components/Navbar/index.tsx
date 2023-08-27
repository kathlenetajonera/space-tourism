'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { itemTransition, itemsTransition, sidebarTransition } from './utils';
import Navicon from '../Navicon';
import { NAV_ITEMS } from './data';
import './styles.scss';

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            className="flex-between nav"
        >
            <Image
                src="/shared/logo.svg"
                alt="Space Tourism"
                width={40}
                height={40}
            />

            <Navicon isOpen={isOpen} setIsOpen={setIsOpen} />

            <motion.div
                className="nav__menu"
                // variants={sidebarTransition}
            >
                <motion.div variants={itemsTransition} className="nav__wrapper">
                    {NAV_ITEMS.map((item, index) => {
                        const path = pathname.split('/')[1];
                        const isActive = `/${path}` === item.link;

                        return (
                            <motion.div
                                key={item.link}
                                className={`nav__item ${
                                    isActive ? 'active' : ''
                                }`}
                                // variants={itemTransition}
                            >
                                <Link
                                    className="nav__link"
                                    href={item.link}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span>0{index + 1}</span>
                                    {item.label}
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
