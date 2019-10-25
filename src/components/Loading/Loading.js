import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loading.scss';

function Loading(props) {
  const { title } = props;
  return (
    <section className={`${styles.root} flex-center`}>
      <h3 className={styles.title}>{title}</h3>
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
