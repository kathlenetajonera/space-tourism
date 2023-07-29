import './styles.scss';

type Props = {
    backgroundImage: string;
};

const FullBackground = ({ backgroundImage }: Props) => {
    return (
        <div
            className="full-background"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        />
    );
};

export default FullBackground;
