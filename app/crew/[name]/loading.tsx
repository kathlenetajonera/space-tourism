import FullBackground from '@components/FullBackground';
import FlexWrapper from '@components/Layouts/FlexWrapper';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './styles.module.scss';

function Loading() {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <FullBackground
                backgroundImage={'/crew/background-crew-mobile.jpg'}
            />
            <FlexWrapper>
                <Skeleton height={24} style={{ margin: '24px 0 32px' }} />

                <div>
                    <Skeleton height={222} />
                </div>

                <div style={{ marginTop: 16 }}>
                    <Skeleton height={40} />
                </div>

                <div className={styles.contentWrapper}>
                    <div className={styles.dataWrapper}>
                        <Skeleton />
                        <Skeleton height={40} style={{ marginTop: 5 }} />
                    </div>

                    <Skeleton height={120} />
                </div>
            </FlexWrapper>
        </SkeletonTheme>
    );
}

export default Loading;
