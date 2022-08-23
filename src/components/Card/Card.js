import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { toggleFavorite, removeCard } from '../../redux/cardRedux';
import clsx from 'clsx';

const Card = (props) => {

  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  const cardId = props.id;

  const dispatch = useDispatch();

  const changeFavorite = (e) => {
    e.preventDefault();
     setIsFavorite(!isFavorite);
   dispatch(toggleFavorite(cardId));
  };
  const removeThisCard = (e) => {
    e.preventDefault();
    dispatch(removeCard(cardId));
  };

  return <li className={styles.card}>{props.title}<span><span className={clsx('fa fa-star-o', isFavorite && styles.active)} onClick={changeFavorite}/><span className={clsx('fa fa-trash')} onClick={removeThisCard}/></span></li>;
};

export default Card;