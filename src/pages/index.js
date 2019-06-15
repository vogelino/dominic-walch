import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Title from 'components/title';
import Header from 'components/Header';
import { graphql } from 'gatsby';

const Index = ({
  data: {
    homeJson: { subtitle, intro, sections },
  },
}) => (
  <Layout>
    <Header subtitle={subtitle} />
    <div>
      <Title as="h2">{intro.catchphrase}</Title>
      <p>{intro.logicalSequence}</p>
      <button>{intro.buttonText}</button>
    </div>
    {sections.map(({ title, content }) => (
      <div key={title}>
        <Title as="h3">{title}</Title>
        <p
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html,
          }}
        />
      </div>
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
        catchphrase
        logicalSequence
        buttonText
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
