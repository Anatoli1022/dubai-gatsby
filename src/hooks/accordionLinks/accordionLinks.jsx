import React from 'react';
import styles from './accordionLinks.module.scss';
import classNames from 'classNames/bind';
import useOpen from 'hooks/open/open';

const cx = classNames.bind(styles);

export const AccordionLink = ({ data, key }) => {
  const { isOpen, toggle } = useOpen(false);

  return (
    <div div className={cx('footer-mobile', { active: isOpen == true })}>
      <Title title={data.title} isOpen={isOpen} toggle={toggle} />
      <ul className={cx('links-list')}>
        <li className={cx('list-item')}>
          <a href="#" className={cx('list-link')}>
            {data.firstLink}
          </a>
        </li>
        <li className={cx('list-item')}>
          <a href="#" className={cx('list-link')}>
            {data.secondLink}
          </a>
        </li>
        <li className={cx('list-item')}>
          <a href="#" className={cx('list-link')}>
            {data.thirdLink}
          </a>
        </li>
        <li className={cx('list-item')}>
          <a href="#" className={cx('list-link')}>
            {data.fourthLInk}
          </a>
        </li>
        <li className={cx('list-item')}>
          <a href="#" className={cx('list-link')}>
            {data.fifthLink}
          </a>
        </li>
        <li className={cx('list-item')}>
          <a href="#" className={cx('list-link')}>
            {data.sixthLink}
          </a>
        </li>
      </ul>
    </div>
  );
};

export const Title = ({ title, toggle }) => {
  return (
    <h3 className={cx('title')} onClick={toggle}>
      {title}
    </h3>
  );
};

export const Link = ({ link }) => {
  return (
    <a href="#" className={cx('item-link')}>
      {link}
    </a>
  );
};
