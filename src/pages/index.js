import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2">{data.homeJson.intro.title}</Title>
      <p
        dangerouslySetInnerHTML={{
          __html: data.homeJson.intro.content.childMarkdownRemark.html,
        }}
      />
    </Box>
    {data.homeJson.sections.map(({ title, content }) => (
      <Box key={title}>
        <Title as="h3">{title}</Title>
        <p
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html,
          }}
        />
      </Box>
    ))}
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      subtitle
      intro {
        title
        content {
          childMarkdownRemark {
            html
            rawMarkdownBody
          }
        }
      }
      sections {
        title
        content {
          childMarkdownRemark {
            html
            rawMarkdownBody
          }
        }
      }
    }
  }
`;
