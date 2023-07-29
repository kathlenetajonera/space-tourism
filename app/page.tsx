import CircleButton from '@components/CircleButton';
import FlexWrapper from '@components/Layouts/FlexWrapper';
import styles from '@styles/page.module.scss';

export default function Home() {
    return (
        <FlexWrapper customClass={styles.flex_wrapper}>
            <div className={styles.text_wrapper}>
                <p className={styles.subheading}>SO, YOU WANT TO TRAVEL TO</p>
                <h1 className={styles.heading}>SPACE</h1>
                <p className={styles.desc}>
                    Let's face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we'll give you
                    a truly out of this world experience!
                </p>
            </div>

            <div className={styles.button_wrapper}>
                <CircleButton label="EXPLORE" />
            </div>
        </FlexWrapper>
    );
}
