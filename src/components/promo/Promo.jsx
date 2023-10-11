import './promo.css';
import promoImg from '../../img/images/header-img.jpg'

const Promo = () => {
    return (
        <section className='promo'>
            <div className="container">
                <div className="promo__content">
                    <div className="promo__text">
                        <h1 className="promo__title">
                            <span className='highlight'>
                                <span>
                                    LET’S
                                </span>
                            </span>
                            EXPLORE
                            <span className='highlight highlight--yellow'>
                                <span>
                                    UNIQUE
                                </span>
                            </span>
                            CLOTHES.
                        </h1>
                        <p className="promo__desc">
                            Live for Influential and Innovative fashion!
                        </p>
                        <a href="/" className="promo__btn">
                            Show now!
                        </a>
                    </div>
                    <div className="promo__img">
                        <img src={promoImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promo;