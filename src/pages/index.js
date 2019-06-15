import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Header from 'components/Header';
import { graphql } from 'gatsby';
import Intro from 'components/intro';
import TextSlider from 'components/textslider';
import About from 'components/about';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  flex: 0 1 500px;
`;

const RightSection = styled.div`
  flex: 0 1 calc(500px + 10vmin);
`;

const Index = ({
  data: {
    homeJson: { subtitle, intro, sections, about },
  },
}) => (
  <Layout>
    <Container>
      <LeftSection>
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
      </LeftSection>
      <RightSection>
        <About {...about} text={about.content.childMarkdownRemark.html} />
      </RightSection>
    </Container>
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
      about {
        portraitTitle
        portrait {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
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
