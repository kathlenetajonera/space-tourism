import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Crew } from 'api/crew/types';
import { getCrewMembers } from './service';
import FullBackground from '@components/FullBackground';
import FlexWrapper from '@components/Layouts/FlexWrapper';
import PageTitle from '@components/PageTitle';
import styles from './styles.module.scss';

const sanitizedName = (name: string) => name.toLowerCase().replace(' ', '-');

export default async function Destination({
    params,
}: {
    params: { name: string };
}) {
    const { name } = params;
    const crewMembers: Crew[] = await getCrewMembers();
    const currentData = crewMembers.find(
        (crew: Crew) => sanitizedName(crew.name) === name
    );

    if (!currentData) notFound();

    return (
        <>
            <FullBackground
                backgroundImage={'/crew/background-crew-mobile.jpg'}
            />
            <FlexWrapper>
                <PageTitle number="03" title="Meet your crew" />

                <div>
                    <Image
                        src={currentData.images.png}
                        alt=""
                        width={327}
                        height={223}
                        className={styles.image}
                    />
                    <div className={`separator ${styles.separator}`} />

                    <div className="flex-center">
                        {crewMembers.map((crew) => {
                            const isActive = sanitizedName(crew.name) === name;

                            return (
                                <Link
                                    key={crew.name}
                                    href={sanitizedName(crew.name)}
                                    className={`${styles.dot} ${
                                        isActive ? styles.dotActive : ''
                                    }`}
                                />
                            );
                        })}
                    </div>

                    <div className={styles.contentWrapper}>
                        <div className={styles.dataWrapper}>
                            <p className={styles.dataLabel}>
                                {currentData.role}
                            </p>
                            <h1 className={styles.data}>{currentData.name}</h1>
                        </div>

                        <p>{currentData.bio}</p>
                    </div>
                </div>
            </FlexWrapper>
        </>
    );
}
