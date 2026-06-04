import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';

const StyledMainContainer = styled.main`
  max-width: 700px;

  .subtitle {
    margin-bottom: 40px;
  }
`;

const PensievePage = ({ location }) => (
  <Layout location={location}>
    <Helmet title="Pensieve" />

    <StyledMainContainer>
      <header>
        <h1 className="big-heading">Writing</h1>
        <p className="subtitle">A place for notes, articles, or posts you want to publish later.</p>
      </header>

      <p>
        No posts are published yet. Add a few entries when you want to launch the writing section.
      </p>
    </StyledMainContainer>
  </Layout>
);

PensievePage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default PensievePage;
