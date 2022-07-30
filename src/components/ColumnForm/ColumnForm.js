import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = ({action}) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title: title, icon: icon });
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