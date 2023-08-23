import FullBackground from '@components/FullBackground';
import FlexWrapper from '@components/Layouts/FlexWrapper';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Loading() {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <FullBackground
                backgroundImage={'/technology/background-technology-mobile.jpg'}
            />
            <FlexWrapper>
                <Skeleton height={24} style={{ margin: '24px 0 32px' }} />

                <div>
                    <Skeleton height={170} />
                </div>

                <div style={{ marginTop: 24 }}>
                    <Skeleton height={40} />
                </div>

                <div style={{ marginTop: 40 }}>
                    <div style={{ marginBottom: 24 }}>
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
