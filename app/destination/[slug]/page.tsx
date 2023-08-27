import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getDestinations } from './service';
import { Destination, Destinations } from 'api/destination/types';
import FullBackground from '@components/FullBackground';
import FlexWrapper from '@components/Layouts/FlexWrapper';
import ContentWrapper from '@components/Layouts/ContentWrapper';
import PageTitle from '@components/PageTitle';
import styles from './styles.module.scss';

export default async function Destination({
    params,
}: {
    params: { slug: string };
}) {
    const { slug } = params;
    const destinations: Destinations = await getDestinations();
    const currentData = destinations.find((item: Destination) => {
        const adjustedName = item.name.toLowerCase();
        return adjustedName === slug;
    });

    if (!currentData) notFound();

    return (
        <>
            <FullBackground
                backgroundImage={
                    '/destination/background-destination-mobile.jpg'
                }
            />
            <PageTitle number="02" title="Pick your destination" />
            <FlexWrapper>
                <div className={styles.imageWrapper}>
                    <Image
                        src={currentData.images.png}
                        alt={currentData.name}
                        width={170}
                        height={170}
                        className={styles.image}
                    />
                </div>
                <ContentWrapper>
                    <div className={styles.contentWrapper}>
                        <div className={styles.selection}>
                            {destinations.map((destination) => {
                                const name = destination.name.toLowerCase();
                                const isActive = name === slug;

                                return (
                                    <Link
                                        key={name}
                                        href={name}
                                        className={
                                            isActive
                                                ? styles.buttonActive
                                                : styles.button
                                        }
                                    >
                                        {destination.name}
                                    </Link>
                                );
                            })}
                        </div>

                        <div>
                            <h1 className={styles.title}>{currentData.name}</h1>
                            <p>{currentData.description}</p>
                        </div>
                    </div>

                    <div className="separator" />

                    <div className={styles.dataContainer}>
                        <div className={styles.dataWrapper}>
                            <p className={styles.dataLabel}>AVG. DISTANCE</p>
                            <p className={styles.data}>
                                {currentData.distance}
                            </p>
                        </div>
                        <div className={styles.dataWrapper}>
                            <p className={styles.dataLabel}>EST. TRAVEL TIME</p>
                            <p className={styles.data}>{currentData.travel}</p>
                        </div>
                    </div>
                </ContentWrapper>
            </FlexWrapper>
        </>
    );
}
