import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Github.scss';

function Github() {
  const history = useHistory();

  function handleClick() {
    history.push('/setting');
  }

  return (
    <div className={`${styles.root}`}>
      <h1>Github</h1>
      <div className={`${styles.bg} ${styles.wh}`}>
        {`当前环境： ${process.env.NODE_ENV}`}
      </div>
      <button type="button" onClick={handleClick}>
        Go setting
      </button>
    </div>
  );
}

export default Github;
