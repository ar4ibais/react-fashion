import './arrivals.css';

import Card from '../card/Card';
import cat01 from '../../img/categories/cat-01.jpg';
import cat02 from '../../img/categories/cat-02.jpg';
import cat03 from '../../img/categories/cat-03.jpg';


const Arrivals = () => {
    return (
        <section className="arrivals">
            <div className="container">
                <h3 className="title arrivals__title">NEW ARRIVALS</h3>
                <div className="arrivals__cards">
                    <Card
                        title='Hoodies & Sweetshirt'
                        image={cat01}
                    />
                    <Card
                        title='Coats & Parkas'
                        image={cat02}
                    />
                    <Card
                        title='Tees & T-Shirt'
                        image={cat03}
                    />
                </div>
            </div>
        </section>
    );
}

export default Arrivals;