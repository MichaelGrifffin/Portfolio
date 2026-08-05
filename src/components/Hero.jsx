import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Download, Mail, Phone, MapPin, Award, CheckCircle2, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { resumeData } from '../data/resumeData';

const Hero = ({ onOpenResume }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Final-Year B.E. CSE Student",
    "UI/UX Designer (Figma Prototyping)",
    "Python & Flask Developer",
    "MySQL & Database Engineer"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];

      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, isDeleting ? 40 : 80);
    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section id="hero" style={{ minHeight: '100vh', paddingTop: '7.5rem', paddingBottom: '4rem', display: 'flex', alignItems: 'center', position: 'relative' }}>
      {/* Background glow orbs */}
      <div className="bg-glow-orb" style={{ top: '15%', left: '10%', width: '350px', height: '350px', background: 'var(--accent-primary)' }} />
      <div className="bg-glow-orb" style={{ bottom: '10%', right: '5%', width: '400px', height: '400px', background: 'var(--accent-secondary)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3.5rem', alignItems: 'center' }}>
          
          {/* Hero Content Left */}
          <div>
            {/* Availability Badge */}
            <div className="glass-pill" style={{ marginBottom: '1.25rem' }}>
              <span className="pulse-dot" />
              <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>Open for Opportunities</span>
              <span style={{ opacity: 0.5 }}>|</span>
              <span style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>Expected Graduation 2027</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Hello, I'm <br />
              <span className="gradient-text">{resumeData.personalInfo.name}</span>
            </h1>

            {/* Dynamic Typing Title */}
            <div style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', minHeight: '2.5rem' }}>
              <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>&gt;</span>
              <span style={{ color: '#ffffff' }}>{displayedText}</span>
              <span className="typing-cursor">|</span>
            </div>

            {/* Summary Text */}
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '620px', marginBottom: '2.2rem' }}>
              {resumeData.personalInfo.summary}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '2.5rem' }}>
              <a href="#projects" className="btn-primary">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>

              <button onClick={onOpenResume} className="btn-secondary">
                <FileText size={18} />
                <span>Interactive Resume</span>
              </button>

              <a
                href={resumeData.personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ width: '48px', height: '48px', padding: 0, borderRadius: '50%' }}
                title="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>

              <a
                href={resumeData.personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ width: '48px', height: '48px', padding: 0, borderRadius: '50%' }}
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>

            {/* Key Quick Stats Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1rem',
                padding: '1.2rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>
                  7.75
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '500' }}>CGPA (B.E. CSE)</div>
              </div>

              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#ffffff', fontFamily: 'var(--font-mono)' }}>
                  AdroIT
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '500' }}>LMS Virtual Intern</div>
              </div>

              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                  IBM AI
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '500' }}>Certified 2026</div>
              </div>

              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--accent-amber)', fontFamily: 'var(--font-mono)' }}>
                  3+
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '500' }}>Full-Stack Projects</div>
              </div>
            </div>
          </div>

          {/* Hero Profile Photo & Badge Right */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
              
              {/* Outer Decorative Gradient Ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '30px',
                  background: 'var(--gradient-accent)',
                  opacity: 0.7,
                  filter: 'blur(16px)',
                  animation: 'pulseGlow 4s ease-in-out infinite alternate'
                }}
              />

              {/* Photo Frame Container */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '2px solid rgba(255, 255, 255, 0.15)',
                  background: '#0d1324',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
                }}
              >
                <img
                  src={resumeData.personalInfo.profilePic}
                  alt={resumeData.personalInfo.name}
                  style={{
                    width: '100%',
                    height: '420px',
                    objectFit: 'cover',
                    objectPosition: 'center 10%',
                    display: 'block',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Overlaid Bottom Card */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    background: 'rgba(11, 16, 32, 0.85)',
                    backdropFilter: 'blur(12px)',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#ffffff' }}>Jeppiaar Engineering</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-primary)' }}>B.E. Computer Science</div>
                  </div>
                  <Award size={24} style={{ color: 'var(--accent-primary)' }} />
                </div>
              </div>

              {/* Floating Tech Chips */}
              <div
                className="animate-float"
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '-20px',
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid var(--border-glow)',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                  fontSize: '0.8rem',
                  fontWeight: '600'
                }}
              >
                <span style={{ color: 'var(--accent-primary)' }}>⚡</span> Python & Flask
              </div>

              <div
                className="animate-float"
                style={{
                  position: 'absolute',
                  bottom: '80px',
                  left: '-25px',
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid var(--border-glow)',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  animationDelay: '1.5s'
                }}
              >
                <span style={{ color: 'var(--accent-purple)' }}>🎨</span> Figma UI/UX
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes pulseGlow {
          0% { opacity: 0.4; filter: blur(16px); }
          100% { opacity: 0.8; filter: blur(24px); }
        }
        .typing-cursor {
          display: inline-block;
          color: var(--accent-primary);
          animation: blink 0.8s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
