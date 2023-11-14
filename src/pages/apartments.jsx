import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Hero from 'components/pages/apartments/hero';
import Information from 'components/pages/apartments/information';
import Contact from 'components/shared/contact';

const Apartments = () => (
  <Layout>
    <Hero />
    <Information />
    <Contact />
  </Layout>
);

export default Apartments;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
