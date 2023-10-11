import './footer.css';

import fb from '../../img/socials/fb.svg';
import inst from '../../img/socials/inst.svg';
import tw from '../../img/socials/tw.svg';
import linkin from '../../img/socials/in.svg';


const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__socials">
                        <h3 className="footer__title">
                            FASHION
                        </h3>
                        <p className="footer__text">
                            Complete your style with awesome clothes from us.
                        </p>
                        <div className="footer__social-icons">
                            <a href="/" className="footer__social-link">
                                <img src={fb} alt="icon" />
                            </a>
                            <a href="/" className="footer__social-link">
                                <img src={inst} alt="icon" />
                            </a>
                            <a href="/" className="footer__social-link">
                                <img src={tw} alt="icon" />
                            </a>
                            <a href="/" className="footer__social-link">
                                <img src={linkin} alt="icon" />
                            </a>
                        </div>
                    </div>
                    <div className="footer__columns">
                        <div className="footer__column">
                            <h5 className="footer__column-title">
                                Company
                            </h5>
                            <ul className="footer__column-list">
                                <li className="footer__column-item">
                                    <a href="/" className="footer__column-link">About</a>
                                </li>
                                <li className="footer__column-item">
                                    <a href="/" className="footer__column-link">Contact us</a>
                                </li>
                                <li className="footer__column-item">
                                    <a href="/" className="footer__column-link">Support</a>
                                </li>
                                <li className="footer__column-item">
                                    <a href="/" className="footer__column-link">Careers</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__column">
                            <h5 className="footer__column-title">
                                Quick Link
                            </h5>
                            <ul className="footer__column-list">
                                <li className="footer__column-item">
                                    <a href="/" className="footer__column-link">Share Location</a>
                                </li>
                                <li className="footer__column-item">
                                    <a href="/" className="footer__column-link">Orders Tracking</a>
                                </li>
                                <li className="footer__column-item">
                                    <a href="/" className="footer__column-link">Size Guide</a>
                                </li>
                                <li className="footer__column-item">
                                    <a href="/" className="footer__column-link">FAQs</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__column">
                            <h5 className="footer__column-title">
                                Legal
                            </h5>
                            <ul className="footer__column-list">
                                <li className="footer__column-item">
                                    <a href="/" className="footer__column-link">Terms & conditions</a>
                                </li>
                                <li className="footer__column-item">
                                    <a href="/" className="footer__column-link">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;