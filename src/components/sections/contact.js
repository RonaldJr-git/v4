import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .contact-form {
    margin-top: 36px;
    display: grid;
    gap: 14px;
    text-align: left;
  }

  .contact-form input,
  .contact-form textarea {
    width: 100%;
    border: 1px solid var(--lightest-navy);
    border-radius: var(--border-radius);
    background: var(--light-navy);
    color: var(--lightest-slate);
    font-family: var(--font-sans);
    font-size: var(--fz-sm);
    padding: 12px 14px;
  }

  .contact-form textarea {
    min-height: 140px;
    resize: vertical;
  }

  .contact-form button {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 6px;
    justify-self: center;
  }

  .form-status {
    margin-top: 10px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    text-align: center;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [formData, setFormData] = useState({ name: '', senderEmail: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const onInputChange = event => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async event => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('Sending your message...');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.senderEmail,
          message: formData.message,
          _subject: 'Portfolio Contact Form Message',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatusMessage('Message sent successfully. Thank you!');
      setFormData({ name: '', senderEmail: '', message: '' });
    } catch (error) {
      setStatusMessage('Message failed to send. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        I am open to entry-level roles and project collaborations where I can help build practical
        systems across software, embedded hardware, and IoT. If you would like to connect, feel free
        to email me.
      </p>

      <form className="contact-form" onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={onInputChange}
          required
        />
        <input
          type="email"
          name="senderEmail"
          placeholder="Your email"
          value={formData.senderEmail}
          onChange={onInputChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={onInputChange}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {statusMessage && <p className="form-status">{statusMessage}</p>}
    </StyledContactSection>
  );
};

export default Contact;
