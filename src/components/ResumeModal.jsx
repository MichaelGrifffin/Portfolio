import React from 'react';
import { X, Printer, Download, Mail, Phone, ExternalLink, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { resumeData } from '../data/resumeData';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay no-print" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '900px',
          width: '95%',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Modal Toolbar */}
        <div
          style={{
            padding: '1.2rem 2rem',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#0d1326'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Award size={22} style={{ color: 'var(--accent-primary)' }} />
            <span style={{ fontWeight: '800', fontSize: '1.1rem', color: '#ffffff' }}>
              Official Curriculum Vitae (CV)
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <button onClick={handlePrint} className="btn-primary" style={{ padding: '0.5rem 1.1rem', fontSize: '0.85rem' }}>
              <Printer size={16} />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: 'var(--text-main)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div
          style={{
            padding: '2.5rem',
            overflowY: 'auto',
            background: '#0a0e1c',
            color: '#e2e8f0',
            fontFamily: 'var(--font-main)'
          }}
          className="printable-resume"
        >
          {/* Header */}
          <div style={{ textAlign: 'center', borderBottom: '2px solid rgba(0, 242, 254, 0.3)', paddingBottom: '1.5rem', marginBottom: '1.8rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>
              {resumeData.personalInfo.name}
            </h1>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <span>📞 {resumeData.personalInfo.phone}</span>
              <span>✉️ {resumeData.personalInfo.email}</span>
              <span>🌐 <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)' }}>LinkedIn</a></span>
              <span>💻 <a href={resumeData.personalInfo.github} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)' }}>GitHub</a></span>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '1.8rem' }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem', marginBottom: '0.8rem' }}>
              Professional Summary
            </h2>
            <p style={{ lineHeight: 1.7, fontSize: '0.95rem', color: '#cbd5e1' }}>
              {resumeData.personalInfo.summary}
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '1.8rem' }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem', marginBottom: '0.8rem' }}>
              Education
            </h2>
            {resumeData.education.map((edu, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '1rem', color: '#ffffff' }}>{edu.institution}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{edu.degree}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: '700', color: 'var(--accent-primary)' }}>CGPA: {edu.cgpa}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Expected Graduation: 2027</div>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '1.8rem' }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem', marginBottom: '0.8rem' }}>
              Technical Skills
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.92rem' }}>
              <div><strong>Programming Languages:</strong> Python</div>
              <div><strong>Web Technologies:</strong> HTML5, CSS3, JavaScript</div>
              <div><strong>Databases:</strong> MySQL</div>
              <div><strong>Tools & Platforms:</strong> Git, GitHub, Visual Studio Code, Figma</div>
              <div><strong>Core Subjects:</strong> Data Structures and Algorithms (Basic), Object-Oriented Programming, DBMS, Operating Systems, Computer Networks</div>
              <div><strong>Design:</strong> UI/UX Design</div>
            </div>
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '1.8rem' }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem', marginBottom: '0.8rem' }}>
              Projects
            </h2>
            {resumeData.projects.map((proj, idx) => (
              <div key={idx} style={{ marginBottom: '1.2rem' }}>
                <div style={{ fontWeight: '700', fontSize: '1rem', color: '#ffffff' }}>
                  {idx + 1}. {proj.title} <span style={{ fontWeight: '400', fontSize: '0.85rem', color: 'var(--accent-primary)' }}>({proj.tech.slice(0, 4).join(', ')})</span>
                </div>
                <ul style={{ paddingLeft: '1.2rem', marginTop: '0.4rem', fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                  {proj.features.map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Internship */}
          <div style={{ marginBottom: '1.8rem' }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem', marginBottom: '0.8rem' }}>
              Internship
            </h2>
            {resumeData.internships.map((exp, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                  <div style={{ fontWeight: '700', fontSize: '1rem', color: '#ffffff' }}>
                    {exp.title} – <span style={{ color: 'var(--accent-primary)' }}>{exp.company}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{exp.period}</div>
                </div>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h2 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem', marginBottom: '0.8rem' }}>
              Certifications & Achievements
            </h2>
            <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6 }}>
              {resumeData.certifications.map((c, idx) => (
                <li key={idx}><strong>{c.title}</strong> ({c.issuer}) – {c.date}</li>
              ))}
              {resumeData.achievements.map((a, idx) => (
                <li key={`ach-${idx}`}>{a.title}: {a.description}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
