import React from 'react';
import classNames from 'classnames/bind';
import styles from './Information.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const cx = classNames.bind(styles);

import quotationMarks from './images/quotation-marks.svg';

const Information = () => (
  <section className={cx('information')}>
    <div className={cx('container container-medium', 'container-information')}>
      <h2 className={cx('title')}>Real estate investment in Dubai, UAE</h2>

      <div className={cx('wrapper-text')}>
        <p className={cx('text')}>
          This response is important for our ability to learn from mistakes, but it alsogives rise
          to self-criticism, because it is part of the threat-protection system. In other words,
          what keeps us safe can go too far, and keep us too safe. In fact it can trigger
          self-censoring.
        </p>
        <p className={cx('text')}>
          One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in
          the future. The same is true as we experience the emotional sensation of stress from our
          first instances of social rejection or ridicule. We quickly learn to fear and thus
          automatically avoid potentially stressful situations of all kinds, including the most
          common of all:
        </p>
      </div>
      <div className={cx('wrapper-text')}>
        <p className={cx('text')}>
          This response is important for our ability to learn from mistakes, but it alsogives rise
          to self-criticism, because it is part of the threat-protection system. In other words,
          what keeps us safe can go too far, and keep us too safe. In fact it can trigger
          self-censoring.
        </p>
        <p className={cx('text')}>
          One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in
          the future. The same is true as we experience the emotional sensation of stress from our
          first instances of social rejection or ridicule. We quickly learn to fear and thus
          automatically avoid potentially stressful situations of all kinds, including the most
          common of all:
        </p>
      </div>

      <StaticImage
        src="./images/information-image.jpg"
        loading="lazy"
        alt=""
        className={cx('image')}
      />

      <div className={cx('wrapper-text')}>
        <h3 className={cx('title')}>Methods for Everyone</h3>
        <p className={cx('text')}>
          Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf,
          blade of grass, and crack in the sidewalk was something to be picked up, looked at,
          tasted, smelled, and shaken. Everything was interesting to her. She knew nothing. I knew
          everything…been there, done that. She was in the moment, I was in the past. She was
          mindful. I was mindless.
        </p>
        <p className={cx('text')}>
          One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in
          the future. The same is true as we experience the emotional sensation of stress from our
          first instances of social rejection or ridicule. We quickly learn to fear and thus
          automatically avoid potentially stressful situations of all kinds, including the most
          common of all: making mistakes.
        </p>
      </div>

      <blockquote className={cx('blockquote')}>
        <div>
          <img
            src={quotationMarks}
            alt=""
            loading="lazy"
            aria-hidden="true"
            className={cx('quotation-marks')}
          />
        </div>
        <div>
          <p className={cx('blockquote-text')}>
            Our greatest weakness lies in giving up. The most certain way to succeed is always to
            try just one more time. emotional sensation of stress from our firs
          </p>
          <cite className={cx('blockquote-cite')}>
            <span>Paul</span>
            <span className={cx('blockquote-span')}>Elite Author</span>
          </cite>
        </div>
      </blockquote>
    </div>
  </section>
);

export default Information;
