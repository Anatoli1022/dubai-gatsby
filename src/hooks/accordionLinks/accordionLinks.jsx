import React from 'react';
import styles from './accordionLinks.module.scss';
import classNames from 'classNames/bind';
import useOpen from 'hooks/open/open';
import { Link } from 'gatsby';

const cx = classNames.bind(styles);

export const AccordionLink = ({ data, key }) => {
  const { isOpen, toggle } = useOpen(false);

  return (
    <div div className={cx('footer-mobile', { active: isOpen == true })} key={key}>
      <Title title={data.title} isOpen={isOpen} toggle={toggle} />
      <ul className={cx('links-list')}>
        <li className={cx('list-item')}>
          <Link to="#" className={cx('list-link')}>
            {data.firstLink}
          </Link>
        </li>

        <li className={cx('list-item')}>
          <Link to="#" className={cx('list-link')}>
            {data.secondLink}
          </Link>
        </li>
        <li className={cx('list-item')}>
          <Link to="#" className={cx('list-link')}>
            {data.thirdLink}
          </Link>
        </li>
        <li className={cx('list-item')}>
          <Link to="#" className={cx('list-link')}>
            {data.fourthLInk}
          </Link>
        </li>
        <li className={cx('list-item')}>
          <Link to="#" className={cx('list-link')}>
            {data.fifthLink}
          </Link>
        </li>
        <li className={cx('list-item')}>
          <Link to="#" className={cx('list-link')}>
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
    </h3>
  );
};
