import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Header from 'components/Header';
import { graphql } from 'gatsby';
import Intro from 'components/intro';
import TextSlider from 'components/textslider';

const Index = ({
  data: {
    homeJson: { subtitle, intro, sections },
  },
}) => (
  <Layout>
    <Header subtitle={subtitle} />
    <Intro {...intro} />
    <TextSlider
      slides={sections.map(({ title, content }) => ({
        id: title,
        title,
        text: content.childMarkdownRemark.html,
      }))}
      emojis={['😎', '🤑', '💅']}
    />
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
