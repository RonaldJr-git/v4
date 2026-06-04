import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Side } from '@components';

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }
`;

const Email = ({ isHome }) => (
  <Side isHome={isHome} orientation="right">
    <StyledLinkWrapper />
  </Side>
);

Email.propTypes = {
  isHome: PropTypes.bool,
};

export default Email;
