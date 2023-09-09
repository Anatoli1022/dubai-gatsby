import React from 'react';
import classNames from 'classNames/bind';
import styles from './Articles.module.scss';

import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const cx = classNames.bind(styles);
const Articles = () => (
  <section className={cx('articles')}>
    <div className={cx('container', 'container-medium')}>
      <div className={cx('articles-container')}>
        <h2 className={cx('title')}>Useful articles</h2>
        <Link to="#" className={cx('link')}>
          View all articles
        </Link>
      </div>

      <ul className={cx('list')}>
        <li className={cx('item')}>
          <StaticImage
            src="./images/articles-1.jpg"
            alt=""
            className={cx('image')}
            loading="lazy"
            aria-hidden="true"
          />
          <h3 className={cx('image-title')}>Discover Architecture</h3>

          <div className={cx('content-info')}>
            <p className={cx('info-time')}>
              <time dateTime="2022-07-03"> Jule 03, 2022</time>
            </p>
            <h3 className={cx('info-title')}> Discover Architecture</h3>
            <p className={cx('info-text')}>
              Projects for many large domestic and foreign corporations, enterprises in many elds
              such
            </p>
            <Link to="#" className={cx('info-link')}>
              Learn more
            </Link>
          </div>
        </li>

        <li className={cx('item')}>
          <StaticImage
            src="./images/articles-2.jpg"
            alt=""
            className={cx('image')}
            loading="lazy"
            aria-hidden="true"
          />
          <h3 className={cx('image-title')}>Discover Architecture</h3>

          <div className={cx('content-info')}>
            <p className={cx('info-time')}>
              <time dateTime="2022-07-03"> Jule 03, 2022</time>
            </p>
            <h3 className={cx('info-title')}> Discover Architecture</h3>
            <p className={cx('info-text')}>
              Projects for many large domestic and foreign corporations, enterprises in many elds
              such
            </p>
            <Link to="#" className={cx('info-link')}>
              Learn more
            </Link>
          </div>
        </li>

        <li className={cx('item')}>
          <StaticImage
            src="./images/articles-3.jpg"
            alt=""
            className={cx('image')}
            loading="lazy"
            aria-hidden="true"
          />
          <h3 className={cx('image-title')}>Discover Architecture</h3>

          <div className={cx('content-info')}>
            <p className={cx('info-time')}>
              <time dateTime="2022-07-03"> Jule 03, 2022</time>
            </p>
            <h3 className={cx('info-title')}> Discover Architecture</h3>
            <p className={cx('info-text')}>
              Projects for many large domestic and foreign corporations, enterprises in many elds
              such
            </p>
            <Link to="#" className={cx('info-link')}>
              Learn more
            </Link>
          </div>
        </li>
      </ul>
    </div>
  </section>
);

export default Articles;
