import classNames from 'classNames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './layout.module.scss';
import Footer from '../footer/Footer';

const cx = classNames.bind(styles);

const Layout = ({ children }) => (
  <div className={cx('wrapper')}>
    <main className={cx('content')}>{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
