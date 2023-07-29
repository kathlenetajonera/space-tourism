import styles from './styles.module.scss';

type Props = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
};

const Navicon = ({ isOpen, setIsOpen }: Props) => {
    return (
        <div
            className={isOpen ? styles.navicon_open : styles.navicon}
            onClick={() => setIsOpen(!isOpen)}
        >
            <span />
            <span />
            <span />
            <span />
        </div>
    );
};

export default Navicon;
