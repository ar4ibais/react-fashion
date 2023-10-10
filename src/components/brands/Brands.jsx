import './brands.css'

import hm from '../../img/brands/HM.png';
import amazon from '../../img/brands/Amazon.png';
import lacoste from '../../img/brands/Lacoste.png';
import levis from '../../img/brands/Levis.png';
import obey from '../../img/brands/Obey.png';
import shopify from '../../img/brands/Shopify.png';

const Brands = () => {
    return (
        <section className="brands">
            <div className="container">
                <ul className='brands__list'>
                    <li><a href="/"><img src={hm} alt="brand logo" /></a></li>
                    <li><a href="/"><img src={amazon} alt="brand logo" /></a></li>
                    <li><a href="/"><img src={lacoste} alt="brand logo" /></a></li>
                    <li><a href="/"><img src={levis} alt="brand logo" /></a></li>
                    <li><a href="/"><img src={obey} alt="brand logo" /></a></li>
                    <li><a href="/"><img src={shopify} alt="brand logo" /></a></li>
                </ul>
            </div>
        </section>
    );
}

export default Brands;