import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Hero from 'components/pages/home/hero';
import Apartment from 'components/pages/home/apartment';
import Video from 'components/pages/home/video';
import Information from 'components/pages/home/information';
import Contact from 'components/shared/contact';
import Articles from 'components/shared/articles';
import Questions from 'components/pages/home/questions/questions';

const HomePage = () => (
  <Layout>
    <Hero />
    <Apartment />
    <Video />
    <Information />
    <Contact />
    <Articles />
    <Questions />
  </Layout>
);

export default HomePage;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
