import React from 'react';
import styles from './Loading.scss';
import Circle from '@/components/Circle/Circle';

function Loading() {
  return (
    <section className={`${styles.root} position-center`}>
      <Circle />
    </section>
  );
}

export default Loading;
