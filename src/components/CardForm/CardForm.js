import styles from './CardForm.modules.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

const CardForm = ({action, columnId }) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_CARD', payload: { title: title, columnId } });
    setTitle('');
};

  return (
    <form onSubmit={handleSubmit} className={styles.CardForm}>
      <div>
        <TextInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <Button>Add card</Button>
      </div>
    </form>
  );
};

export default CardForm;