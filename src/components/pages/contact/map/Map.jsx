import React from 'react';
import classNames from 'classnames/bind'; // Fix the import statement
import styles from './Map.module.scss';

const cx = classNames.bind(styles);

const Map = () => {
  return (
    <section className={cx('map')}>
      <div className={cx('container', 'container-large', 'container-map')}>
        <h1 className={cx('title')}>Contact</h1>
        <div className={cx('contact-block')}>
          <h2 className={cx('block-title')}>
            Dubai, <span className={cx('title-span')}>uae</span>
          </h2>
          <span className={cx('address')}>
            269 King Str, 05th Floor, Utral Hosue Building, Dubai, VIC 3000, UAE.
          </span>
          <div className={cx('number-wrapper')}>
            <a href="tel:+99 (0) 344 956 4050" className={cx('telephone-number')}>
              +99 (0) 344 956 4050
            </a>
          </div>

          <ul className={cx('list')}>
            <li className={cx('item')}>
              <span className={cx('item-span')}>Email: </span>
              <a href="mailto:info@sparch.co" className={cx('item-information')}>
                info@sparch.co
              </a>
            </li>
            <li className={cx('item')}>
              <span className={cx('item-span')}>Follow us:</span>
            </li>
            <li className={cx('item')}>
              <span className={cx('item-span')}>Work Hours: </span>
              <span className={cx('item-information')}>Monday - Friday : 08h00 - 17h30</span>
            </li>
          </ul>
        </div>
        <iframe
          className={cx('map-iframe')}
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aac313f003fbcdb54a3cfc568dacca3d53fce71a853d983d7281b4eb803d8f1e7&amp;source=constructor"
          frameborder="0"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
