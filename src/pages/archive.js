import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';

const StyledArchive = styled.main`
  max-width: 700px;

  .subtitle {
    margin-bottom: 40px;
  }
`;

const ArchivePage = ({ location }) => (
  <Layout location={location}>
    <Helmet title="Archive" />

    <StyledArchive>
      <header>
        <h1 className="big-heading">Archive</h1>
        <p className="subtitle">Add selected projects here when you are ready.</p>
      </header>

      <p>This template no longer shows the demo archive. Add your own projects to bring it back.</p>
    </StyledArchive>
  </Layout>
);
ArchivePage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ArchivePage;
