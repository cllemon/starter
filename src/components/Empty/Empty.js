import React from 'react';
import PropTypes from 'prop-types';
import emptyData from 'assets/images/webpage-lost.png';
import styles from './Empty.scss';

function Empty(props) {
  return (
    <div className={`${styles.root} position-center`}>
      <img className={styles.image} alt="empty-data" src={props.url} />
    </div>
  );
}

Empty.propTypes = {
  url: PropTypes.string,
};

Empty.defaultProps = {
  url: emptyData,
};

export default Empty;
