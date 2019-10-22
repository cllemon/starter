import React from 'react';
import notFoundLogo from 'assets/images/not-found.png';
import styles from './NotFound.scss';

function NotFound() {
  return (
    <div className={`${styles.root} position-center`}>
      <img className={styles.image} alt='not-found' src={notFoundLogo} />
    </div>
  );
}

export default NotFound;
