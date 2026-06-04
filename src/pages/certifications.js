import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
  padding: 100px 20px 60px;
  max-width: 900px;
  margin: 0 auto;
`;

const CertificationsPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer>
      <section id="certifications">
        <h2>Certifications / Awards</h2>
        <ul>
          <li>
            <a href="https://coursera.org/share/4baf36fca4e4e41c9957e6551ba403cb">
              GOOGLE AI CERTIFICATE — Google — June 2026
            </a>
          </li>
          <li>
            <a href="https://coursera.org/share/4dabfcd3aff041570b1f612133a6f17b">
              GOOGLE IT TECHNICAL SUPPORT FUNDAMENTALS — Google — June 2026
            </a>
          </li>
        </ul>
      </section>
    </StyledMainContainer>
  </Layout>
);

CertificationsPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default CertificationsPage;
