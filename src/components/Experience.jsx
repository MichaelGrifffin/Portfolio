import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            <span>// CAREER & ACADEMICS</span>
          </div>
          <h2 className="section-title">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            My professional internship journey and academic milestones at Jeppiaar Engineering College.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}>
          
          {/* Vertical Glowing Line */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              bottom: '0',
              left: '28px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-purple), transparent)',
              zIndex: 0
            }}
            className="timeline-line"
          />

          {/* Timeline Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative', zIndex: 1 }}>
            
            {/* Internship Item */}
            {resumeData.internships.map((exp, idx) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: '1.5rem', alignItems: 'start' }}>
                {/* Icon Marker */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: '#0d1527',
                    border: '2px solid var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)',
                    boxShadow: '0 0 20px var(--accent-glow)'
                  }}
                >
                  <Briefcase size={26} />
                </div>

                {/* Content Card */}
                <div className="glass-card" style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '1rem' }}>
                    <div>
                      <span className="glass-pill" style={{ marginBottom: '0.5rem', color: 'var(--accent-primary)', borderColor: 'var(--accent-glow)' }}>
                        {exp.type}
                      </span>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#ffffff', marginTop: '0.2rem' }}>
                        {exp.title}
                      </h3>
                      <div style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--accent-primary)' }}>
                        {exp.company}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.88rem', fontFamily: 'var(--font-mono)' }}>
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                    {exp.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {exp.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)', marginTop: '3px', flexShrink: 0 }} />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Education Item */}
            {resumeData.education.map((edu, idx) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: '1.5rem', alignItems: 'start' }}>
                {/* Icon Marker */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: '#0d1527',
                    border: '2px solid var(--accent-purple)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-purple)',
                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)'
                  }}
                >
                  <GraduationCap size={26} />
                </div>

                {/* Content Card */}
                <div className="glass-card" style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '1rem' }}>
                    <div>
                      <span className="glass-pill" style={{ marginBottom: '0.5rem', color: 'var(--accent-purple)', borderColor: 'rgba(168, 85, 247, 0.3)' }}>
                        {edu.status}
                      </span>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#ffffff', marginTop: '0.2rem' }}>
                        {edu.degree}
                      </h3>
                      <div style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--accent-purple)' }}>
                        {edu.institution}
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.88rem', fontFamily: 'var(--font-mono)' }}>
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--accent-primary)', marginTop: '0.3rem', fontFamily: 'var(--font-mono)' }}>
                        CGPA: {edu.cgpa}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '1rem' }}>
                    {edu.highlights.map((bullet, bIdx) => (
                      <div key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--accent-purple)', marginTop: '3px', flexShrink: 0 }} />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-line { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
