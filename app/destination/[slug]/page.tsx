import Link from 'next/link';
import Image from 'next/image';
import { getCurrentDestination, getDestinations } from './service';
import { Destination, Destinations } from 'api/destination/types';
import FullBackground from '@components/FullBackground';
import FlexWrapper from '@components/Layouts/FlexWrapper';
import PageTitle from '@components/PageTitle';
import styles from './styles.module.scss';

export default async function Destination({
    params,
}: {
    params: { slug: string };
}) {
    const { slug } = params;
    const destinations: Destinations = await getDestinations();
    const currentData: Destination = await getCurrentDestination(slug);

    return (
        <>
            <FlexWrapper>
                <PageTitle number="02" title="Pick your destination" />
                <div className={styles.contentWrapper}>
                    <Image
                        src={currentData.images.png}
                        alt={currentData.name}
                        width={170}
                        height={170}
                    />

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

                <div>
                    <div className={styles.dataWrapper}>
                        <p className={styles.dataLabel}>AVG. DISTANCE</p>
                        <p className={styles.data}>{currentData.distance}</p>
                    </div>
                    <div className={styles.dataWrapper}>
                        <p className={styles.dataLabel}>EST. TRAVEL TIME</p>
                        <p className={styles.data}>{currentData.travel}</p>
                    </div>
                </div>
            </FlexWrapper>

            <FullBackground
                backgroundImage={
                    '/destination/background-destination-mobile.jpg'
                }
            />
        </>
    );
}
