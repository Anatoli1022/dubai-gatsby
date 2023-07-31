import React from 'react';
import classNames from 'classNames/bind';
import styles from './Video.module.scss';

import play from './images/play.svg';
import { StaticImage } from 'gatsby-plugin-image';

const cx = classNames.bind(styles);

const Video = () => (
  <div className={cx('video')}>
    <div className={cx('container', ' container-large')}>
      <div className={cx('video-wrapper')}>
        <StaticImage
          src="./images/video.jpg"
          className={cx('background')}
          loading="lazy"
          alt=""
          aria-hidden="true"
        />
        <button className={cx('button')}>
          <img src={play} alt="" aria-hidden="true" className={cx('image-play')} loading="lazy" />
        </button>
      </div>
    </div>
  </div>
);

export default Video;
