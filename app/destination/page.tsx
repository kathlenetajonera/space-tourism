import Image from 'next/image';
import FullBackground from '@components/FullBackground';
import FlexWrapper from '@components/Layouts/FlexWrapper';
import PageTitle from '@components/PageTitle';
import './styles.scss';

export default function Destination() {
    return (
        <>
            <FlexWrapper customClass="destination">
                <PageTitle number="02" title="Pick your destination" />

                <div>
                    <div className="content-wrapper">
                        <Image
                            src="/destination/image-moon.png"
                            alt=""
                            width={170}
                            height={170}
                        />

                        <div className="selection">
                            <button className="button active">MOON</button>
                            <button className="button">MARS</button>
                            <button className="button">EUROPA</button>
                            <button className="button">TITAN</button>
                        </div>

                        <div>
                            <h1>MOON</h1>
                            <p>
                                See our planet as you've never seen it before. A
                                perfect relaxing trip away to help regain
                                perspective and come back refreshed. While
                                you're there, take in some history by visiting
                                the Luna 2 and Apollo 11 landing sites.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="separator" />

                <div>
                    <div className="data-wrapper">
                        <p className="title">AVG. DISTANCE</p>
                        <p className="data">300,000 KM</p>
                    </div>
                    <div className="data-wrapper">
                        <p className="title">EST. TRAVEL TIME</p>
                        <p className="data">3 DAYS</p>
                    </div>
                </div>
            </FlexWrapper>

            <FullBackground
                backgroundImage={
                    '/destination/background-destination-mobile.jpg'
                }
            />
        </>
    );
}
