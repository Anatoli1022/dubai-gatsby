import React, { useState, useEffect } from 'react';

import styles from './Menu.module.scss';
import classNames from 'classNames/bind';
import Link from 'components/shared/link';

const cx = classNames.bind(styles);

const Menu = () => {
  const [menu, setMenu] = useState('');

  const updateMenu = () => {
    if (menu === '') {
      setMenu('active');
    } else {
      setMenu('');
    }
  };

  useEffect(() => {
    if (menu === 'active') {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menu]);

  return (
    <div>
      <button className={cx('menu', { active: menu === 'active' })} onClick={updateMenu}>
        <div className={cx('menu-button')}></div>
        <div className={cx('menu-button')}></div>
        <div className={cx('menu-button')}></div>
      </button>
      <nav className={cx('navigation', { active: menu === 'active' })}>
        <div className={cx('wrapper')}>
          {' '}
          <ul className={cx('list')}>
            <li className={cx('item')}>
              <Link to="" className={cx('list-link')}>
                Buy
              </Link>
              <ul className={cx('sublist')}>
                <li className={cx('sublist-item')}>
                  <Link to="" className={cx('sublist-link')}>
                    Category number one{' '}
                  </Link>
                </li>
                <li className={cx('sublist-item')}>
                  <Link to="" className={cx('sublist-link')}>
                    Apartments in Dubai
                  </Link>
                </li>
                <li className={cx('sublist-item')}>
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
              <Link to="" className={cx('list-link')}>
                About
              </Link>
            </li>
            <li className={cx('item')}>
              <Link to="" className={cx('list-link')}>
                {' '}
                Contact
              </Link>
            </li>
          </ul>{' '}
          <div className={cx('content-wrapper')}>
            <button className={cx('button')}>Book a consultation</button>

            <a href="tel:+72126742510" className={cx('telephone-number')}>
              +7 (212) 674-25-10
            </a>
            <div className={cx('wrapper-button-language')}>
              <button className={cx('button-language')}>En</button>
              <button className={cx('button-language')}>Ru</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
