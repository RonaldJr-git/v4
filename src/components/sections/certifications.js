import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { usePrefersReducedMotion } from '@hooks';

const StyledCertificationsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .cert-list {
    margin-top: 30px;
    list-style: none;
    padding: 0;
    width: 100%;
    max-width: 700px;

    li {
      color: var(--light-slate);
      margin: 12px 0;
      font-size: 17px;

      a {
        ${({ theme }) => theme.mixins.inlineLink};
      }
    }
  }
`;

const Certifications = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {return;}
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledCertificationsSection id="certifications" ref={revealContainer}>
      <h2>Certifications / Awards</h2>
      <ul className="cert-list">
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
    </StyledCertificationsSection>
  );
};

export default Certifications;
