import React, { useState } from 'react';
import { Code, Database, Layout, Cpu, CheckCircle2, Layers, Terminal, Server, Globe } from 'lucide-react';
import { FigmaIcon } from './SocialIcons';
import { resumeData } from '../data/resumeData';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'programming', label: 'Programming' },
    { id: 'web', label: 'Web & DB' },
    { id: 'design', label: 'UI/UX & Tools' },
    { id: 'core', label: 'Core CS Subjects' }
  ];

  return (
    <section id="skills" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            <span>// TECHNICAL MATRIX</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A curated breakdown of technical stacks, software tools, and computer science fundamentals mastered during academic & internship projects.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? 'var(--gradient-accent)' : 'rgba(255, 255, 255, 0.05)',
                color: activeTab === tab.id ? '#05070e' : 'var(--text-muted)',
                fontWeight: activeTab === tab.id ? '700' : '500',
                border: activeTab === tab.id ? 'none' : '1px solid var(--border-color)',
                padding: '0.6rem 1.2rem',
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer',
                fontSize: '0.88rem',
                transition: 'all 0.25s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skill Matrix Content */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.8rem' }}>
          
          {/* Programming Languages */}
          {(activeTab === 'all' || activeTab === 'programming') && (
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                <Code style={{ color: 'var(--accent-primary)' }} size={24} />
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff' }}>Programming Languages</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {resumeData.skills.programming.map((item) => (
                  <div key={item.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.88rem', fontWeight: '600' }}>
                      <span style={{ color: '#ffffff' }}>{item.name}</span>
                      <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>{item.level}%</span>
                    </div>
                    <div style={{ width: '100%', height: '7px', background: 'rgba(255,255,255,0.08)', borderRadius: '10px', overflow: 'hidden' }}>
                      <div
                        style={{
                          width: `${item.level}%`,
                          height: '100%',
                          background: 'var(--gradient-accent)',
                          borderRadius: '10px',
                          transition: 'width 1s ease-out'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Web Technologies & Databases */}
          {(activeTab === 'all' || activeTab === 'web') && (
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                <Database style={{ color: 'var(--accent-purple)' }} size={24} />
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff' }}>Web & Database Tech</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {resumeData.skills.webTech.concat(resumeData.skills.databases).map((item) => (
                  <div key={item.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.88rem', fontWeight: '600' }}>
                      <span style={{ color: '#ffffff' }}>{item.name}</span>
                      <span style={{ color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)' }}>{item.level}%</span>
                    </div>
                    <div style={{ width: '100%', height: '7px', background: 'rgba(255,255,255,0.08)', borderRadius: '10px', overflow: 'hidden' }}>
                      <div
                        style={{
                          width: `${item.level}%`,
                          height: '100%',
                          background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                          borderRadius: '10px'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* UI/UX Design & Tools */}
          {(activeTab === 'all' || activeTab === 'design') && (
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                <FigmaIcon color="var(--accent-emerald)" size={24} />
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff' }}>UI/UX & Tools</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {resumeData.skills.designAndTools.map((item) => (
                  <div key={item.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.88rem', fontWeight: '600' }}>
                      <span style={{ color: '#ffffff' }}>{item.name}</span>
                      <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>{item.level}%</span>
                    </div>
                    <div style={{ width: '100%', height: '7px', background: 'rgba(255,255,255,0.08)', borderRadius: '10px', overflow: 'hidden' }}>
                      <div
                        style={{
                          width: `${item.level}%`,
                          height: '100%',
                          background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
                          borderRadius: '10px'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Core CS Subjects Badge Card */}
          {(activeTab === 'all' || activeTab === 'core') && (
            <div className="glass-card" style={{ padding: '2rem', gridColumn: activeTab === 'core' ? 'span 2' : 'auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                <Cpu style={{ color: 'var(--accent-amber)' }} size={24} />
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff' }}>Core CS Fundamentals</h3>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Strong academic grounding in fundamental computer science principles essential for engineering scalable software solutions.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {resumeData.skills.coreSubjects.map((subject) => (
                  <div
                    key={subject}
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      padding: '0.6rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.88rem',
                      color: 'var(--text-main)',
                      fontWeight: '500'
                    }}
                  >
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-amber)' }} />
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Skills;
