import React from 'react';
import classNames from 'classnames/bind';
import { Accordion } from 'hooks/accordion/accordion';

import { data } from './data';

import styles from './questions.module.scss';

const cx = classNames.bind(styles);

const Questions = () => (
  <section className={cx('questions')}>
    <div className={cx('container', 'container-medium')}>
      <h2 className={cx('title')}>faq</h2>
      <ul className={cx('list')}>
        {data.map((section, index) => (
          <Accordion key={index} section={section} />
        ))}
      </ul>
    </div>
  </section>
);

export default Questions;
