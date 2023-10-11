import './contacts.css';

const Contacts = () => {
    return (
        <section className="contacts">
            <div className="container">
                <h3 className="contacts__title">
                    JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
                </h3>
                <p className="contacts__text">
                    Type your email down below and be young wild generation
                </p>
                <form action="#" className="contacts__form">
                    <input
                        type="text"
                        className="contacts__input"
                        placeholder="Add your email here"
                    />
                    <button className="contacts__button" type="submit">SEND</button>
                </form>
            </div>
        </section>
    );
}

export default Contacts;