import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';

const StyledTagsContainer = styled.main`
  max-width: 1000px;

  h1 {
    margin-bottom: 50px;
  }
  ul {
    color: var(--light-slate);

    li {
      font-size: var(--fz-xxl);

      a {
        color: var(--light-slate);

        .count {
          color: var(--slate);
          font-family: var(--font-mono);
          font-size: var(--fz-md);
        }
      }
    }
  }
`;

const TagsPage = ({ location }) => (
  <Layout location={location}>
    <Helmet title="Tags" />

    <StyledTagsContainer>
      <span className="breadcrumb">
        <span className="arrow">&larr;</span>
        <Link to="/pensieve">All memories</Link>
      </span>

      <h1>Tags</h1>
      <p>No tags are published yet. They will appear here after you add writing.</p>
    </StyledTagsContainer>
  </Layout>
);

TagsPage.propTypes = {
  location: PropTypes.object,
};

export default TagsPage;
