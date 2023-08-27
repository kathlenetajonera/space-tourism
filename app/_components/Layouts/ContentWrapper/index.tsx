import { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
    customClass?: string;
    children: ReactNode;
};

const ContentWrapper = ({ customClass, children, ...rest }: Props) => {
    return (
        <div className={`${styles.contentWrapper} ${customClass}`} {...rest}>
            {children}
        </div>
    );
};

export default ContentWrapper;
