import PageTitle from "../PageTitle/PageTitle";
import styles from './Favorite.module.scss';
import { getFavoriteCards } from "../../redux/cardRedux";
import { useSelector } from 'react-redux';
const Favorite = () => {

    const favoriteCards = useSelector(getFavoriteCards);
  
    return (
        <>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
        <ul className={styles.cards}>
          {favoriteCards.map((card) => (
            <card key={card.id} title={card.title} id={card.id} />
          ))}
        </ul>
      </article>
  </>
  );
};
export default Favorite;