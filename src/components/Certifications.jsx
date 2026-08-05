import React from 'react';
import { Award, CheckCircle2, Trophy, Sparkles, GraduationCap, Briefcase } from 'lucide-react';
import confetti from 'canvas-confetti';
import { resumeData } from '../data/resumeData';

const Certifications = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <section id="certifications" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            <span>// RECOGNITION & CREDENTIALS</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Industry credentials and academic achievements earned through dedication and skill building.
          </p>
        </div>

        {/* Certifications Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
          {resumeData.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card"
              onClick={triggerConfetti}
              style={{
                padding: '2.2rem',
                cursor: 'pointer',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: idx === 0 ? 'rgba(0, 242, 254, 0.1)' : 'rgba(168, 85, 247, 0.1)',
                      border: idx === 0 ? '1px solid var(--accent-glow)' : '1px solid rgba(168,85,247,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: idx === 0 ? 'var(--accent-primary)' : 'var(--accent-purple)'
                    }}
                  >
                    {idx === 0 ? <Award size={26} /> : <Briefcase size={26} />}
                  </div>

                  <span className="glass-pill" style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                    {cert.date}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
                  {cert.title}
                </h3>

                <div style={{ color: idx === 0 ? 'var(--accent-primary)' : 'var(--accent-purple)', fontWeight: '700', fontSize: '0.92rem', marginBottom: '1rem' }}>
                  {cert.issuer}
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {cert.details}
                </p>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                <span>Credential ID: {cert.credentialId}</span>
                <Sparkles size={16} style={{ color: 'var(--accent-amber)' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Academic Achievements Cards */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
            <Trophy style={{ color: 'var(--accent-amber)' }} size={28} />
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff' }}>Academic Key Highlights</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {resumeData.achievements.map((ach, idx) => (
              <div
                key={idx}
                onClick={triggerConfetti}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--accent-emerald)' }} />
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#ffffff' }}>{ach.title}</h4>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
