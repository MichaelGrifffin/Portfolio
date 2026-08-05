import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { resumeData } from '../data/resumeData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#05070e',
        borderTop: '1px solid var(--border-color)',
        padding: '3rem 0 2rem 0',
        color: 'var(--text-muted)',
        fontSize: '0.9rem'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ fontWeight: '800', fontSize: '1.2rem', color: '#ffffff', marginBottom: '0.3rem' }}>
              Praveen Kumar S
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>
              Final-Year B.E. CSE Student | Jeppiaar Engineering College
            </div>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href={resumeData.personalInfo.github}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-main)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-color)')}
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={resumeData.personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-main)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-color)')}
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href={`mailto:${resumeData.personalInfo.email}`}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-main)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-color)')}
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-color)')}
            title="Back to Top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div style={{ textAlign: 'center', paddingTop: '1.8rem', fontSize: '0.82rem', color: 'var(--text-dim)' }}>
          © {new Date().getFullYear()} Praveen Kumar S. All rights reserved. Designed & Engineered with UI/UX Excellence.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
