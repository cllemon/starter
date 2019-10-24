import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Setting.scss';

function Setting() {
  const history = useHistory()

  function handleClick() {
    history.push('/github');
  }

  return (
    <div className={`${styles.root}`}>
      <h1>Setting</h1>
      <div className={`${styles.bg} ${styles.wh}`}>
        {`当前环境： ${process.env.NODE_ENV}`}
      </div>
      <button type="button" onClick={handleClick}>
        Go github
      </button>
    </div>
  );
}

export default Setting;
