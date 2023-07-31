import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Contact from 'components/shared/contact/Contact';
import Articles from 'components/shared/articles/Articles';

const Services = () => (
  <Layout>
    <Contact />
    <Articles />
  </Layout>
);

export default Services;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
