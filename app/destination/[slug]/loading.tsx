import FullBackground from '@components/FullBackground';
import FlexWrapper from '@components/Layouts/FlexWrapper';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './styles.module.scss';

function Loading() {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <FlexWrapper>
                <Skeleton height={24} style={{ margin: '24px 0 32px' }} />
                <div>
                    <Skeleton height={170} />

                    <div className={styles.selection}>
                        <Skeleton height={30} />
                    </div>

                    <div>
                        <Skeleton height={60} />
                        <Skeleton height={120} style={{ marginTop: 20 }} />
                    </div>
                </div>

                <div className="separator" />

                <div>
                    <div className={styles.dataWrapper}>
                        <Skeleton style={{ marginBottom: 10 }} />
                        <Skeleton height={60} />
                    </div>
                    <div className={styles.dataWrapper}>
                        <Skeleton style={{ marginBottom: 10 }} />
                        <Skeleton height={60} />
                    </div>
                </div>
            </FlexWrapper>

            <FullBackground
                backgroundImage={
                    '/destination/background-destination-mobile.jpg'
                }
            />
        </SkeletonTheme>
    );
}

export default Loading;
