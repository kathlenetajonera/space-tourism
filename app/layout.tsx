import '@styles/_base.scss';
import '@styles/_default.scss';
import '@styles/_helpers.scss';
import styles from '@styles/page.module.scss';
import { Bellefair, Barlow_Condensed, Barlow } from 'next/font/google';

import type { Metadata } from 'next';
import Navbar from '@components/Navbar';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

const bellefair = Bellefair({
    weight: '400',
    variable: '--font-bellefair',
    display: 'swap',
    subsets: ['latin'],
});

const barlow = Barlow({
    weight: '400',
    variable: '--font-barlow',
    display: 'swap',
    subsets: ['latin'],
});

const barlow_condensed = Barlow_Condensed({
    weight: '400',
    variable: '--font-barlow-condensed',
    display: 'swap',
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${bellefair.variable} ${barlow.variable} ${barlow_condensed.variable}`}
        >
            <body>
                <div className={styles.container}>
                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    );
}
