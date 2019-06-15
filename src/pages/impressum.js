import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Header from 'components/header';
import { graphql } from 'gatsby';
import Footer from 'components/footer';

const Impressum = ({
  data: {
    homeJson: { impressum, subtitle },
  },
}) => (
  <Layout>
    <Header subtitle={subtitle} />
    <div
      dangerouslySetInnerHTML={{ __html: impressum.childMarkdownRemark.html }}
    />
    <Footer />
  </Layout>
);

Impressum.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Impressum;

export const query = graphql`
  query ImpressumpageQuery {
    homeJson {
      subtitle
      impressum {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`;
