import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';

const ColumnForm = () => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_COLUMN', newColumn: {title, icon}});
    setTitle('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <div>
        <label>Title: </label> <TextInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Icon:</label> <TextInput type="text" value={icon} onChange={(e) => setIcon(e.target.value)} />
      </div>
      <div>
        <Button>Add column</Button>
      </div>
    </form>
  );
};

export default ColumnForm;