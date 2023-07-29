import styles from './styles.module.scss';

type Props = {
    label: string;
};

const CircleButton = ({ label }: Props) => {
    return (
        <div className={`${styles.container} flex-center`}>
            <p className={styles.label}>{label}</p>
        </div>
    );
};

export default CircleButton;
