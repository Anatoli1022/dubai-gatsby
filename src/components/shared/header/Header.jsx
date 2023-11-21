import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classNames/bind';
import { Link } from 'gatsby';
import logo from '../../../images/logo.svg';
import Menu from 'hooks/menu';
const cx = classNames.bind(styles);
const Header = () => {
  return (
    <header className={cx('header')}>
      <nav className={cx('navigation')}>
        <div className={cx('container', 'container-large', 'header-container')}>
          <div className={cx('logo-mobile')}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className={cx('content-wrapper', 'first-content-block')}>
            <Link to="/">
              <img src={logo} alt="" className={cx('logo')} />
            </Link>
            <ul className={cx('list')}>
              <li className={cx('item')}>
                <Link to="" className={cx('list-link')}>
                  <span>Buy</span>
                  <div className={cx('wrapper-arrow')}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      className={cx('arrow')}
                    >
                      <path
                        className={cx('arrow-path')}
                        d="M4.82812 0.82843H9.65656L4.82812 5.65686L-0.000305211 0.82843H4.82812Z"
                        fill="#ffff"
                      />
                    </svg>
                  </div>
                </Link>
                <ul className={cx('sublist')}>
                  <li>
                    <Link to="" className={cx('sublist-link')}>
                      Category number one{' '}
                    </Link>
                  </li>
                  <li>
                    <Link to="/apartments" className={cx('sublist-link')}>
                      Apartments in Dubai
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className={cx('sublist-link')}>
                      Category number twenty five
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={cx('item')}>
                <Link to="" className={cx('list-link')}>
                  Blog
                </Link>
              </li>
              <li className={cx('item')}>
                <Link to="/services" className={cx('list-link')}>
                  About
                </Link>
              </li>
              <li className={cx('item')}>
                <Link to="/contact" className={cx('list-link')}>
                  {' '}
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className={cx('content-wrapper', 'second-content-block')}>
            <button className={cx('button')}>Book a consultation</button>
            <div className={cx('wrapper-button-language')}>
              <button className={cx('button-language')}>En</button>
              <button className={cx('button-language')}>Ru</button>
            </div>
            <a href="tel:+72126742510" className={cx('telephone-number')}>
              +7 (212) 674-25-10
            </a>
          </div>
          <div className={cx('menu-wrapper')}>
            <Menu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
