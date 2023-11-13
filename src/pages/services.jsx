import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

import Information from 'components/pages/services/information';
import Challenge from 'components/pages/services/challenge';
import Contact from 'components/shared/contact';
import Propose from 'components/pages/services/propose';
import Hero from 'components/pages/services/hero';
const Services = () => (
  <Layout>
    <Hero />
    <Information />
    <Challenge />
    <Contact />
    <Propose />
  </Layout>
);

export default Services;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
