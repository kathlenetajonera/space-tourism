import Image from 'next/image';
import Navicon from '../Navicon';

const Navbar = () => {
    return (
        <div className="flex-between">
            <Image
                src="/shared/logo.svg"
                alt="Space Tourism"
                width={40}
                height={40}
            />

            <Navicon />
        </div>
    );
};

export default Navbar;
