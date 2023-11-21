import React from 'react';
import styles from './Hero.module.scss';
import classNames from 'classNames/bind';

const cx = classNames.bind(styles);
import { StaticImage } from 'gatsby-plugin-image';
const Hero = () => {
  return (
    <section className={cx('hero')}>
      <div className={cx('container', 'container-large', 'hero-container')}>
        <div className={cx('wrapper-text')}>
          <h1 className={cx('title')}>
            Apartments <span className={cx('title-span')}>in Dubai</span>
          </h1>
        </div>
        <StaticImage
          src="../../../../images/background.jpg"
          className={cx('background')}
          loading="eager"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Hero;
