import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './BottomTabNavigator.scss';
import { DEFAULT_BARS } from '@/utils/enume';

function BottomTabNavigator({ list, render }) {
  return (
    <section className={styles.root}>
      {render()}
      <section className={styles.bottom}>
        {list.length &&
          list.map(bar => (
            <NavLink
              key={bar.path}
              to={bar.path}
              className={styles.nav}
              activeClassName={styles.active}
            >
              <i className={`iconfont ${bar.icon} ${styles.navIcon}`} />
              <div className={styles.navTitle}>{bar.label}</div>
            </NavLink>
          ))}
      </section>
    </section>
  );
}

BottomTabNavigator.propTypes = {
  render: PropTypes.func,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      path: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
};

BottomTabNavigator.defaultProps = {
  render: () => null,
  list: DEFAULT_BARS,
};

export default BottomTabNavigator;
