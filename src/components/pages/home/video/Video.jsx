import React, { useState } from 'react';
import classNames from 'classNames/bind';
import styles from './Video.module.scss';
import play from './images/play.svg';
import { StaticImage } from 'gatsby-plugin-image';
import YouTube from 'react-youtube';

const cx = classNames.bind(styles);

const Video = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className={cx('video')}>
      <div className={cx('container', 'container-large')}>
        <div className={cx('video-wrapper')}>
          {isVideoPlaying ? (
            <YouTube videoId="dQw4w9WgXcQ" className={cx('youtube')} />
          ) : (
            <StaticImage
              src="./images/video.jpg"
              className={cx('background')}
              loading="lazy"
              alt=""
              aria-hidden="true"
            />
          )}
          {!isVideoPlaying && (
            <button className={cx('button')} onClick={handlePlayVideo}>
              <img
                src={play}
                alt=""
                aria-hidden="true"
                className={cx('image-play')}
                loading="lazy"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
