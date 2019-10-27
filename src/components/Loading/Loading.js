import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loading.scss';
import Circle from '@/components/Circle/Circle';

function Loading({ title }) {
  return (
    <section className={`${styles.root} position-center`}>
      <Circle />
      <span className={styles.title}>{title}</span>
    </section>
  );
}

Loading.propTypes = {
  title: PropTypes.string,
};

Loading.defaultProps = {
  title: 'loading...',
};

export default Loading;
