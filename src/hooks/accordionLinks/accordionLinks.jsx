import React from 'react';
import styles from './accordionLinks.module.scss';
import classNames from 'classNames/bind';
import useOpen from 'hooks/open/open';
import { Link } from 'gatsby';

const cx = classNames.bind(styles);

export const AccordionLink = ({ data }) => {
  const { isOpen, toggle } = useOpen(false);

  return (
    <div className={cx('footer-mobile', { active: isOpen == true })}>
      <Title title={data.title} isOpen={isOpen} toggle={toggle} />
      <ul className={cx('links-list')}>
        <li className={cx('list-item')}>
          <Link to={data.to} className={cx('list-link')}>
            {data.firstLink}
          </Link>
        </li>

        <li className={cx('list-item')}>
          <Link to={data.to} className={cx('list-link')}>
            {data.secondLink}
          </Link>
        </li>
        <li className={cx('list-item')}>
          <Link to={data.to} className={cx('list-link')}>
            {data.thirdLink}
          </Link>
        </li>
        <li className={cx('list-item')}>
          <Link to={data.to} className={cx('list-link')}>
            {data.fourthLInk}
          </Link>
        </li>
        <li className={cx('list-item')}>
          <Link to={data.to} className={cx('list-link')}>
            {data.fifthLink}
          </Link>
        </li>
        <li className={cx('list-item')}>
          <Link to={data.to} className={cx('list-link')}>
            {data.sixthLink}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export const Title = ({ title, toggle }) => {
  return (
    <h3 className={cx('title')} onClick={toggle}>
      {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="9"
        viewBox="0 0 14 9"
        fill="none"
        className={cx('arrow')}
      >
        <path d="M6.99219 7.78516L12.9995 1.00031" stroke="#929292" className={cx('arrow-right')} />
        <path d="M1 1L7.00735 7.78485" stroke="#929292" className={cx('arrow-left')} />
      </svg>
    </h3>
  );
};
