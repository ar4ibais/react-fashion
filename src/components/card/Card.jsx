import styles from './Card.module.css';
import arrowLink from '../../img/icons/arrow.svg';

const Card = ({ title, image }) => {
    return (
        <div className={styles.card}>
            <a href="/" className={styles.card__imglink}>
                <img className={styles.card__img} src={image} alt="Categorie" />
            </a>
            <div className={styles.card__body}>
                <div className={styles.card__text}>
                    <p className={styles.card__title}>
                        {title}
                    </p>
                    <span className={styles.card__subtitle}>
                        Explore Now!
                    </span>
                </div>
                <a href="/" className={styles.card__link}>
                    <img src={arrowLink} alt="" />
                </a>
            </div>
        </div>
    );
}

export default Card;