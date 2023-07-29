import './styles.scss';

type Props = {
    number: string;
    title: string;
};

const PageTitle = ({ number, title }: Props) => {
    return (
        <p className="page-title">
            <span>{number}</span>
            {title}
        </p>
    );
};

export default PageTitle;
