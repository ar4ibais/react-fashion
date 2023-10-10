import './header.css';
import logoImg from '../../img/icons/logo.svg'

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <a href="/" className="header__logo">
                        <img src={logoImg} alt="logo" />
                        <span>FASHION</span>
                    </a>
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li><a href="/">CATALOGUE</a></li>
                            <li><a href="/">FASHION</a></li>
                            <li><a href="/">FAVOURITE</a></li>
                            <li><a href="/">LIFESTYLE</a></li>
                            <li><a href="/" className='header__nav-btn'>SIGN UP</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;