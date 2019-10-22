import React from 'react';
import PropTypes from 'prop-types';
import LOGO_IMG from 'assets/images/logo.png';
import styles from './RepositoriesCard.scss';
import { repositoriesCardAssessment } from '@/utils/enume';

function Assessment(props) {
  return repositoriesCardAssessment.map(({ icon, value }) => (
    <div className={styles.item} key={value}>
      {(props[value] && <i className={`iconfont ${icon} ${styles.icon}`} />)
        || ''}
      <span>{props[value]}</span>
    </div>
  ));
}

function RepositoriesCard(props) {
  const { avatarUrl, name, description } = props;
  return (
    <section className={styles.root}>
      <img
        alt='repositories images'
        src={avatarUrl}
        className={styles.avatar}
      />
      <div className={styles.content}>
        <h3 className={`${styles.name} ellipsis`}>{name}</h3>
        <div className={styles.description}>{description}</div>
        <section className={styles.assessment}>{Assessment(props)}</section>
      </div>
    </section>
  );
}

RepositoriesCard.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  stargazersCount: PropTypes.number,
  forksCount: PropTypes.number,
  language: PropTypes.string
};

RepositoriesCard.defaultProps = {
  name: '',
  avatarUrl: LOGO_IMG,
  description: '',
  stargazersCount: 0,
  forksCount: 0,
  language: ''
};

export default RepositoriesCard;
