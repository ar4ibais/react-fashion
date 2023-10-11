import vouchImage from '../../img/images/vouchers-img.png';
import appStore from '../../img/icons/app-store.png';
import googlePlay from '../../img/icons/google-play.png';

import './download.css';

const Download = () => {
    return (
        <section className="download">
            <div className="download__container">
                <div className="download__inner">
                    <div className="download__content">
                        <h3 className="download__title">
                            DOWNLOAD APP &
                            GET THE VOUCHER!
                        </h3>
                        <p className="download__text">
                            Get 30% off for first transaction using
                            Rondovision mobile app for now.
                        </p>
                        <div className="download__links">
                            <a href="">
                                <img src={appStore} alt="icon" />
                            </a>
                            <a href="">
                                <img src={googlePlay} alt="icon" />
                            </a>
                        </div>
                    </div>
                    <img className="download__image" src={vouchImage} alt="image" />
                </div>
            </div>
        </section>
    );
}

export default Download;