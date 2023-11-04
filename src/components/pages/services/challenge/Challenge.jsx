import React from 'react';
import classNames from 'classNames/bind';
import styles from './Challenge.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const cx = classNames.bind(styles);

const Challenge = () => (
  <section className={cx('challenge')}>
    <div className={cx('container', 'container-medium')}>
      <div className={cx('images-wrapper')}>
        <div className={cx('images-block')}>
          <StaticImage src="./images/challenge-image-1.jpg" alt="" className={cx('image')} />
          <StaticImage src="./images/challenge-image-2.jpg" alt="" className={cx('image')} />
        </div>
        <div>
          <StaticImage src="./images/challenge-image-3.jpg" alt="" className={cx('image')} />
        </div>
      </div>
      <ul className={cx('list-numbers')}>
        <li className={cx('list-numbers-item')}>
          <span className={cx('item-number')}>20</span>
          <p className={cx('item-text')}>years working</p>
        </li>
        <li className={cx('list-numbers-item')}>
          <span className={cx('item-number')}>7</span>
          <p className={cx('item-text')}>talanted managers</p>
        </li>
        <li className={cx('list-numbers-item')}>
          <span className={cx('item-number')}>
            <span> 100</span>
            <sup className={cx('numbers-sup')}>+</sup>
          </span>
          <p className={cx('item-text')}>complitly projects</p>
        </li>
      </ul>
      <div className={cx('wrapper-text', 'wrapper-challenge')}>
        <h2 className={cx('title')}>Challenge</h2>
        <p className={cx('text-challenge', 'text')}>
          To and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in
          the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken.
          Everything was interesting to her. She knew nothing. I knew everything…been there, done
          that. She was in the moment, I was in the past. She was mindful. I was mindless.
        </p>
      </div>{' '}
      <div className={cx('wrapper-text', 'wrapper-everything')}>
        <h3 className={cx('title-everything')}>Everything along the way</h3>
        <p className={cx('text-everything', 'text')}>
          One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in
          the future. The same is true as we experience the emotional sensation of stress from our
          first instances of social rejection or ridicule. We quickly learn to fear and thus
          automatically avoid potentially stressful situations of all kinds, including the most
          common of all: making mistakes.
        </p>
      </div>
      <div className={cx('wrapper-text', 'wrapper-list')}>
        <ul className={cx('list')}>
          <li className={cx('list-item')}>
            <p className={cx('text')}>
              Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf,
              blade of grass, and crack in the sidewalk was something to be picked up, looked at,
              tasted, smelled, and shaken.{' '}
            </p>
          </li>
          <li className={cx('list-item')}>
            <p className={cx('text')}>
              Everything was interesting to her. She knew nothing. I knew everything…been there,
              done that. She was in the moment, I was in the past. She was mindful. I was mindless.
            </p>
          </li>
          <li className={cx('list-item')}>
            <p className={cx('text')}>
              One touch of a red-hot stove is usually all we need to avoid that kind of discomfort
              in the future. The same is true as we experience the emotional sensation of stress
              from our first instances of social rejection or ridicule.{' '}
            </p>
          </li>
          <li className={cx('list-item')}>
            <p className={cx('text')}>
              We quickly learn to fear and thus automatically avoid potentially stressful situations
              of all kinds, including the most common of all: making mistakes.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Challenge;
