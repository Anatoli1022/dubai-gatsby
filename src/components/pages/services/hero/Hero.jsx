import React from 'react';
import styles from './Hero.module.scss';
import classNames from 'classNames/bind';
import background from './images/background.jpg';
const cx = classNames.bind(styles);
const Hero = () => {
  return (
    <section>
      <div className={cx('container', 'container-large', 'hero-container')}>
        <span className={cx('hero-text')}>Rent</span>
        <h1 className={cx('title')}>
          Furnished Apartments <span className={cx('title-span')}>in Dubai</span>
        </h1>
        <img src={background} className={cx('background')} />
      </div>
    </section>
  );
};

export default Hero;
