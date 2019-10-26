import React from 'react';
import styles from './Circle.scss';

function Circle() {
  const circleCount = Array(12).fill('');
  return (
    <div className={styles.circle}>
      {circleCount.map((item, i) => (
        <div className={`${styles[`circle${i + 1}`]} ${styles.child}`} key={i}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default Circle;
