import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { toggleFavorite } from '../../redux/store';
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

  return <li className={styles.card}>{props.title}<span className={clsx('fa fa-star-o', isFavorite && styles.active)} onClick={changeFavorite}/></li>;
};

export default Card;