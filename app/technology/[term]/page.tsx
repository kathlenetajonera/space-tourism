import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Technology } from 'api/technology/types';
import { getTechnologies } from './service';
import FullBackground from '@components/FullBackground';
import FlexWrapper from '@components/Layouts/FlexWrapper';
import ContentWrapper from '@components/Layouts/ContentWrapper';
import PageTitle from '@components/PageTitle';
import styles from './styles.module.scss';

const sanitizedName = (name: string) => name.toLowerCase().replace(' ', '-');

export default async function Page({ params }: { params: { term: string } }) {
    const { term } = params;
    const technologies: Technology[] = await getTechnologies();
    const currentData = technologies.find((item: Technology) => {
        const adjustedName = item.name.toLowerCase().replaceAll(' ', '-');
        return adjustedName === term;
    });

    if (!currentData) notFound();

    return (
        <>
            <PageTitle number="03" title="Space Launch 101" />
            <FlexWrapper customClass={styles.flexWrapper}>
                <div>
                    <Image
                        src={currentData.images.landscape}
                        alt=""
                        width={375}
                        height={170}
                        className={styles.image}
                    />
                </div>

                <ContentWrapper customClass={styles.contentContainer}>
                    <div className={styles.selection}>
                        {technologies.map((tech, index) => {
                            const isActive = sanitizedName(tech.name) === term;

                            return (
                                <Link
                                    key={term}
                                    href={sanitizedName(tech.name)}
                                    className={`flex-center ${styles.button} ${
                                        isActive ? styles.buttonActive : ''
                                    }`}
                                >
                                    {index + 1}
                                </Link>
                            );
                        })}
                    </div>

                    <div className={styles.contentWrapper}>
                        <div className={styles.titleWrapper}>
                            <p className={styles.dataLabel}>
                                THE TERMINOLOGY...
                            </p>
                            <h1 className={styles.data}>{currentData.name}</h1>
                        </div>

                        <p>{currentData.description}</p>
                    </div>
                </ContentWrapper>
            </FlexWrapper>

            <FullBackground
                backgroundImage={'/technology/background-technology-mobile.jpg'}
            />
        </>
    );
}
