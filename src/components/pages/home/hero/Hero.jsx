import React from 'react';
import classNameNames from 'classNames/bind';
import styles from './Hero.module.scss';

const cx = classNameNames.bind(styles);

import background from './images/background.jpg';
import facebook from '../../../../images/facebook.svg';
import twitter from '../../../../images/twitter.svg';
import youtube from '../../../../images/youtube.svg';
import instagram from '../../../../images/instagram.svg';
import linkedIn from '../../../../images/in.svg';

const Hero = () => (
  <section className="hero">
    <div className={cx('container', 'hero-container', 'container_xl')}>
      <img
        src={background}
        alt=""
        className={cx('background')}
        loading="eager"
        aria-hidden="true"
      />
      <div className={cx('block-text')}>
        <p className={cx('text')}>Lorem ipsum</p>
        <h1 className={cx('title')}>
          Welcome home <span className={cx('title-span')}>to</span> luxury
        </h1>
        <a href="" className={cx('link')}>
          Book a consultation
        </a>
      </div>
      <div className={cx('rectangle')}></div>

      <ul className={cx('list')}>
        <li className={cx('item')}>
          <a href="#" className={cx('item-link')}>
            <img src={facebook} alt="facebook" loading="eager" className="hero__image-icon" />
          </a>
        </li>
        <li className={cx('item')}>
          <a href="#" className={cx('item-link')}>
            <img src={twitter} alt="twitter" loading="eager" className="hero__image-icon" />
          </a>
        </li>
        <li className={cx('item')}>
          <a href="#" className={cx('item-link')}>
            <img src={youtube} alt="youtube" loading="eager" className="hero__image-icon" />
          </a>
        </li>
        <li className={cx('item')}>
          <a href="#" className={cx('item-link')}>
            <img src={instagram} alt="instagram" loading="eager" className="hero__image-icon" />
          </a>
        </li>
        <li className={cx('item')}>
          <a href="#" className={cx('item-link')}>
            <img src={linkedIn} alt="in" loading="eager" className="hero__image-icon" />
          </a>
        </li>
      </ul>
      <ul className={cx('list-number')}>
        <li className={cx('number-item')}>
          <span className={cx('figure')}> 01</span>
          <p className={cx('text-number')}>Lorem Ipsum Dolorem apset</p>
        </li>
        <li className={cx('number-item')}>
          <span className={cx('figure')}> 02</span>
          <p className={cx('text-number')}>Lorem Ipsum Dolorem apset</p>
        </li>
        <li className={cx('number-item')}>
          <span className={cx('figure')}>03</span>
          <p className={cx('text-number')}>Lorem Ipsum Dolorem apset</p>
        </li>
      </ul>
    </div>
  </section>
);

export default Hero;
