import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Server, Code } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '2.5rem' }}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'var(--text-main)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.2s ease'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span className="glass-pill" style={{ color: 'var(--accent-primary)', marginBottom: '0.6rem' }}>
            {project.category}
          </span>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ffffff', marginTop: '0.4rem' }}>
            {project.title}
          </h2>
        </div>

        {/* Tech Stack Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.8rem' }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                background: 'rgba(0, 242, 254, 0.08)',
                border: '1px solid rgba(0, 242, 254, 0.2)',
                color: 'var(--accent-primary)',
                fontSize: '0.8rem',
                fontWeight: '600',
                padding: '0.3rem 0.8rem',
                borderRadius: 'var(--radius-full)'
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Project Description */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.6rem' }}>
            Overview & Objective
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
            {project.longDesc}
          </p>
        </div>

        {/* Key Features List */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.8rem' }}>
            Key Features & Functional Highlights
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
            {project.features.map((feat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', fontSize: '0.92rem', color: 'var(--text-main)' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ padding: '0.7rem 1.4rem' }}
          >
            <GithubIcon size={18} />
            <span>Source Code on GitHub</span>
          </a>

          <button onClick={onClose} className="btn-secondary" style={{ padding: '0.7rem 1.4rem' }}>
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
