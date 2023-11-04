import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Contact from 'components/shared/contact';
import Propose from 'components/pages/services/propose';

const Services = () => (
  <Layout>
    <Contact />
    <Propose />
  </Layout>
);

export default Services;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
