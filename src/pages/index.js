import React from 'react';
import PropTypes from 'prop-types';
import MEDIA from 'helpers/mediaTemplates';
import Layout from 'components/layout';
import Header from 'components/header';
import { graphql } from 'gatsby';
import Intro from 'components/intro';
import TextSlider from 'components/textslider';
import About from 'components/about';
import Footer from 'components/footer';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  ${MEDIA.TABLET`
    flex-wrap: wrap;
  `};
`;

const LeftSection = styled.div`
  flex: 0 0 500px;

  ${MEDIA.TABLET`
    flex: 1 1 100%;
  `};
`;

const RightSection = styled(LeftSection)`
  flex: 0 1 calc(500px + 8vmin);
  padding-left: 8vmin;

  ${MEDIA.TABLET`
    padding-left: 0;
    padding-top: 8vmin;
  `};
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
          emojis={sections.map(({ emoji }) => emoji)}
        />
      </LeftSection>
      <RightSection>
        <About {...about} text={about.content.childMarkdownRemark.html} />
      </RightSection>
    </Container>
    <Footer />
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
        emoji
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
