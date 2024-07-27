import React from 'react';
import classNames from 'classnames/bind';
import styles from './ContactForm.module.scss';

const cx = classNames.bind(styles);
const ContactForm = () => (
  <section className={cx('contact')}>
    <div className={cx('container', 'container-medium ')}>
      <h3 className={cx('title')}>
        <span className={cx('title-span')}>Be in touch</span> with us
      </h3>

      <form action="" className={cx('form')}>
        <div className={cx('wrapper-input')}>
          <input type="text" className={cx('input')} placeholder="Name" />
          <input type="text" className={cx('input')} placeholder="Email *" />
          <input type="text" className={cx('input')} placeholder="Subject" />
        </div>
        <textarea name="text" className={cx('input', 'input-message')} placeholder="Message *" />

        <button className={cx('form-button')}>Submit</button>
      </form>
    </div>
  </section>
);

export default ContactForm;
