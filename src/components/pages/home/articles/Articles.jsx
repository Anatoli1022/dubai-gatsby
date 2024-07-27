import React from 'react';
import classNames from 'classnames/bind';
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
          <span className={cx('link-span')}>View all articles</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="22"
            viewBox="0 0 13 22"
            fill="none"
            color=""
          >
            <path
              d="M12.3223 11.0273L1.00031 1.0028"
              stroke="#929292"
              className={cx('link-arrow')}
            />
            <path d="M1 21.0273L12.322 11.0028" stroke="#929292" className={cx('link-arrow')} />
          </svg>
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
              <span>Learn more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="22"
                viewBox="0 0 13 22"
                fill="none"
              >
                <path d="M12.3223 11.0234L1.00031 0.998896" stroke="#FCD54C" />
                <path d="M1 21.0234L12.322 10.9989" stroke="#FCD54C" />
              </svg>
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
              <span>Learn more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="22"
                viewBox="0 0 13 22"
                fill="none"
              >
                <path d="M12.3223 11.0234L1.00031 0.998896" stroke="#FCD54C" />
                <path d="M1 21.0234L12.322 10.9989" stroke="#FCD54C" />
              </svg>
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
              <span>Learn more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="22"
                viewBox="0 0 13 22"
                fill="none"
              >
                <path d="M12.3223 11.0234L1.00031 0.998896" stroke="#FCD54C" />
                <path d="M1 21.0234L12.322 10.9989" stroke="#FCD54C" />
              </svg>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  </section>
);

export default Articles;
