import Card from "../card/Card";
import './favourites.css';

import promo01 from '../../img/images/promo-01.jpg';
import promo02 from '../../img/images/promo-02.jpg';

const Favourites = () => {
    return (
        <section className="favourites">
            <div className="container">
                <h3 className="title arrivals__title">Young’s Favourite</h3>
                <div className="arrivals__cards">
                    <Card
                        title='Trending on instagram'
                        image={promo01}
                    />
                    <Card
                        title='All Under $40'
                        image={promo02}
                    />
                </div>
            </div>
        </section>
    );
}

export default Favourites;