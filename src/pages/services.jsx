import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

import Hero from 'components/pages/services/hero';
import Information from 'components/pages/services/information';
import Challenge from 'components/pages/services/challenge';
import Contact from 'components/shared/contact';
import Table from 'components/pages/services/table';
import Propose from 'components/pages/services/propose';

const Services = () => (
  <Layout>
    <Hero />
    <Information />
    <Challenge />
    <Contact />
    <Table />
    <Propose />
  </Layout>
);

export default Services;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
