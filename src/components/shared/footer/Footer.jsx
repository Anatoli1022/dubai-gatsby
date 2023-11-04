import React from 'react';
import classNames from 'classNames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

import data from './footer-data';

import facebook from '../../../images/facebook.svg';
import twitter from '../../../images/twitter.svg';
import youtube from '../../../images/youtube.svg';
import instagram from '../../../images/instagram.svg';
import linkedIn from '../../../images/in.svg';
import logo from '../../../images/logo.svg';
import { AccordionLink } from 'hooks/accordionLinks/accordionLinks';

const Footer = () => (
  <footer className={cx('footer')}>
    <div className={cx('container', 'footer-container', 'container-large')}>
      <img src={logo} alt="Dubai Realty" className={cx('logo')} loading="lazy" />
      <nav className={cx('navigation')}>
        {data.map((data, index) => {
          return <AccordionLink data={data} key={index} />;
        })}
        <div className={cx('contact-container')}>
          <h3 className={cx('title')}>Contact</h3>
          <ul className={cx('contact-list')}>
            <li className={cx('list-item')}>
              <p className={cx('text-address')}>964 Worthington Drive Dubai, UAE</p>
            </li>
            <li className={cx('list-item')}>
              <a href="mailto:dubairealty@mail.com" className={cx('mail')}>
                dubairealty@mail.com
              </a>
            </li>
          </ul>
          <a href="" className={cx('button-link')}>
            Book a consultation
          </a>
        </div>
      </nav>
      <div className={cx('footer-footer')}>
        <a href="/" className={cx('copyright')}>
          Copyright © 2022 Dubai Realty
        </a>
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <a href="#" className={cx('item-link')}>
              <img src={cx(facebook)} alt="facebook" />
            </a>
          </li>
          <li className={cx('item')}>
            <a href="#" className={cx('item-link')}>
              <img src={twitter} alt="twitter" loading="lazy" />
            </a>
          </li>
          <li className={cx('item')}>
            <a href="#" className={cx('item-link')}>
              <img src={youtube} alt="youtube" loading="lazy" />
            </a>
          </li>
          <li className={cx('item')}>
            <a href="#" className={cx('item-link')}>
              <img src={instagram} alt="instagram" loading="lazy" />
            </a>
          </li>
          <li className={cx('item')}>
            <a href="#" className={cx('item-link')}>
              <img src={linkedIn} alt="in" loading="lazy" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
