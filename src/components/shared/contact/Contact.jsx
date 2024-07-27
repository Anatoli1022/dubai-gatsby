import React from 'react';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

import background from './images/background.jpg';

const Contact = () => (
  <section className={cx('contact')}>
    <div className={cx('contact-container')}>
      <img src={background} className={cx('background')} alt="" aria-hidden="true" loading="lazy" />
      <p className={cx('text')}>Do you have any questions?</p>
      <h2 className={cx('title')}>Contact us</h2>
      <form className={cx('form')}>
        <input type="text" name="mail" placeholder="Enter your mail" className={cx('form-mail')} />
        <button type="submit" className={cx('form-button')}>
          Send
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
