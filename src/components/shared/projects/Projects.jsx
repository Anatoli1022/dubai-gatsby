import React, { useEffect, useState } from 'react';
import classNames from 'classNames/bind';
import styles from './Projects.module.scss';
import { Link } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import data from './data';

const cx = classNames.bind(styles);
const Projects = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  const handleResize = () => {
    const newWidth = window.innerWidth;

    if (newWidth <= 767) {
      setSlidesPerView(1);
    } else if (newWidth <= 1023) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    window.addEventListener('load', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
    };
  }, []);

  return (
    <section className={cx('projects')}>
      <div className={cx('container', 'container-large', 'wrapper')}>
        <div className={cx('projects-container')}>
          <h2 className={cx('title')}>Latest projects</h2>
          <Link to="" className={cx('link')}>
            View all projects
          </Link>
        </div>

        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          slidesPerView={slidesPerView}
          navigation
          modules={[Pagination]}
          spaceBetween={40}
        >
          {data.map((datas, index) => {
            return (
              <SwiperSlide key={index}>
                <div className={cx('content-image')}>
                  <img src={datas.image.default} alt="" className={cx('image')} loading="lazy" />
                  <h3 className={cx('image-title')}>{datas.title}</h3>

                  <div className={cx('content-info')}>
                    <h3 className={cx('info-title')}>Dubai</h3>
                    <p className={cx('info-text')}>{datas.text}</p>
                    <Link to="#" className={cx('info-link')}>
                      {datas.link}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
