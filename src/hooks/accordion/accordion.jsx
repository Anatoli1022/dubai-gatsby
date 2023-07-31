import React from 'react';
import styles from './accordion.module.scss';
import classNames from 'classNames/bind';
import useOpen from 'hooks/open/open';

const cx = classNames.bind(styles);

export const Accordion = ({ section, key }) => {
  const { isOpen, toggle } = useOpen(false);

  return (
    <li className={cx('item', { active: isOpen == true })}>
      <Title question={section.question} isOpen={isOpen} toggle={toggle} />
      <Text text={section.text} />
    </li>
  );
};

export const AccordionLink = ({ section, key }) => {
  const { isOpen, toggle } = useOpen(false);

  return (
    <li className={cx('item', { active: isOpen == true })}>
      <Title question={section.title} isOpen={isOpen} toggle={toggle} />
      <Link link={section.firstLink} />
    </li>
  );
};

export const Title = ({ question, toggle }) => {
  return (
    <h3 className={cx('item-title')} onClick={toggle}>
      {question}
    </h3>
  );
};

export const Text = ({ text }) => {
  return <p className={cx('item-text')}>{text}</p>;
};

export const Link = ({ link }) => {
  return (
    <a href="#" className={cx('item-link')}>
      {link}
    </a>
  );
};
