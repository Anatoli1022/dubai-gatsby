import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Map from 'components/pages/contact/map';
import ContactForm from 'components/pages/contact/contact';
const Contact = () => (
  <Layout>
    <Map />
    <ContactForm />
  </Layout>
);

export default Contact;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
