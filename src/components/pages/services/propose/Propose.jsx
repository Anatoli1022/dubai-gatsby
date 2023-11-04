import React from 'react';
import classNames from 'classNames/bind';
import styles from './Propose.module.scss';

import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const cx = classNames.bind(styles);
const Propose = () => {
  return (
    <section className={cx('propose')}>
      <div className={cx('container', 'container-medium')}>
        <div className={cx('propose-container')}>
          <h2 className={cx('title')}>Useful propose</h2>
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
              src="./images/propose-1.jpg"
              alt=""
              className={cx('image')}
              loading="lazy"
              aria-hidden="true"
            />
            <h3 className={cx('image-title')}>Mortgage Registration</h3>

            <div className={cx('content-info')}>
              <h3 className={cx('info-title')}> Mortgage Registration</h3>
              <p className={cx('info-text')}>
                A person applying for a mortgage in the United Arab Emirates must meet the following
                requirements
              </p>
              <Link to="#" className={cx('info-link')}>
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
                  <path
                    d="M1 21.0273L12.322 11.0028"
                    stroke="#929292"
                    className={cx('link-arrow')}
                  />
                </svg>
              </Link>
            </div>
          </li>

          <li className={cx('item')}>
            <StaticImage
              src="./images/propose-2.jpg"
              alt=""
              className={cx('image')}
              loading="lazy"
              aria-hidden="true"
            />
            <h3 className={cx('image-title')}>Mortgage Registration</h3>

            <div className={cx('content-info')}>
              <h3 className={cx('info-title')}> Mortgage Registration</h3>
              <p className={cx('info-text')}>
                A person applying for a mortgage in the United Arab Emirates must meet the following
                requirements
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
                  <path d="M12.3223 11.0254L1.00031 1.00085" stroke="#272727" />
                  <path d="M1 21.0254L12.322 11.0008" stroke="#272727" />
                </svg>
              </Link>
            </div>
          </li>

          <li className={cx('item')}>
            <StaticImage
              src="./images/propose-3.jpg"
              alt=""
              className={cx('image')}
              loading="lazy"
              aria-hidden="true"
            />
            <h3 className={cx('image-title')}>Mortgage Registration</h3>

            <div className={cx('content-info')}>
              <h3 className={cx('info-title')}> Mortgage Registration</h3>
              <p className={cx('info-text')}>
                A person applying for a mortgage in the United Arab Emirates must meet the following
                requirements
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
                  <path d="M12.3223 11.0254L1.00031 1.00085" stroke="#272727" />
                  <path d="M1 21.0254L12.322 11.0008" stroke="#272727" />
                </svg>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Propose;
