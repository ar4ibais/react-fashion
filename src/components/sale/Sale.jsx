import './sale.css';
import promoImg from '../../img/images/promo-img.jpg';

const Sale = () => {
    return (
        <section className="sale">
            <div className="sale__inner">
                <img className='sale__img' src={promoImg} alt="" />
                <div className="sale__content">
                    <h2 className="sale__title">
                        <span className='highlight'>
                            <span>
                                PAYDAY
                            </span>
                        </span>
                        SALE NOW
                    </h2>
                    <p className='sale__text'>
                        Spend minimal $100 get 30% off
                        voucher code for your next purchase
                    </p>
                    <i className='sale__date'>
                        1 June - 10 June 2021
                    </i>
                    <p className='sale__text'>
                        *Terms & Conditions apply
                    </p>
                    <a href="/" className="sale__button">
                        SHOP NOW
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Sale;