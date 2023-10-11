import './arrivals.css';

import Card from '../card/Card';

const Arrivals = () => {
    return (
        <section className="arrivals">
            <div className="container">
                <h3 className="title arrivals__title">NEW ARRIVALS</h3>
                <div className="arrivals__cards">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    );
}

export default Arrivals;