import { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
    customClass?: string;
    children: ReactNode;
};

const FlexWrapper = ({ customClass, children, ...rest }: Props) => {
    return (
        <div className={`${styles.flex_wrapper} ${customClass}`} {...rest}>
            {children}
        </div>
    );
};

export default FlexWrapper;
