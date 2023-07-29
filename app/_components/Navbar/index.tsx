'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navicon from '../Navicon';
import { NAV_ITEMS } from './data';
import './styles.scss';

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex-between nav">
            <Image
                src="/shared/logo.svg"
                alt="Space Tourism"
                width={40}
                height={40}
            />

            <Navicon isOpen={isOpen} setIsOpen={setIsOpen} />

            {isOpen && (
                <div className="nav__menu">
                    {NAV_ITEMS.map((item, index) => {
                        const isActive = pathname === item.link;

                        return (
                            <div
                                className={`nav__item ${
                                    isActive ? 'active' : ''
                                }`}
                                key={item.link}
                            >
                                <Link className="nav__link" href={item.link}>
                                    <span>0{index + 1}</span>
                                    {item.label}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
