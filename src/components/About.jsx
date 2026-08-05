import React from 'react';
import { UserCheck, ShieldCheck, Brain, Lightbulb, GraduationCap, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const About = () => {
  const qualities = [
    {
      title: "Strong Leadership",
      desc: "Proven ability to organize tasks, lead academic software projects, and collaborate with teams effectively.",
      icon: UserCheck,
      color: "var(--accent-primary)"
    },
    {
      title: "Problem Solving",
      desc: "Analytically breakdown technical problems, write clean algorithmic solutions, and optimize database queries.",
      icon: Brain,
      color: "var(--accent-purple)"
    },
    {
      title: "Decision Making",
      desc: "Prioritize project scope, select appropriate tech stacks (Flask, MySQL, React), and ensure UI/UX clarity.",
      icon: ShieldCheck,
      color: "var(--accent-emerald)"
    },
    {
      title: "UI/UX Thinking",
      desc: "Transform complex requirements into clean Figma wireframes and implement pixel-perfect frontends.",
      icon: Lightbulb,
      color: "var(--accent-amber)"
    }
  ];

  return (
    <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            <span>// ABOUT PRAVEEN</span>
          </div>
          <h2 className="section-title">
            Passionate Engineering Student <br />
            & <span className="gradient-text">Software Innovator</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Final-year Computer Science Engineering undergraduate focused on creating clean backend services and sleek UI/UX interfaces.
          </p>
        </div>

        {/* 2-Column Grid: Education & Bio Card + Qualities Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'stretch' }} className="about-grid">
          
          {/* Bio & Academic Card */}
          <div className="glass-card" style={{ padding: '2.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(0, 242, 254, 0.1)',
                    border: '1px solid var(--accent-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)'
                  }}
                >
                  <GraduationCap size={26} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff' }}>Jeppiaar Engineering College</h3>
                  <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: '600' }}>
                    B.E. Computer Science & Engineering
                  </p>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.98rem', marginBottom: '1.5rem' }}>
                Currently in my final year of study with an active CGPA of <strong>7.75 / 10</strong> (Expected Graduation 2027). Throughout my degree, I have honed a strong foundation in core computer science subjects including Data Structures, Object-Oriented Programming, DBMS, Operating Systems, and Computer Networks.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <MapPin size={18} style={{ color: 'var(--accent-primary)' }} />
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <Mail size={18} style={{ color: 'var(--accent-primary)' }} />
                  <span>princepraveen2426@gmail.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <Phone size={18} style={{ color: 'var(--accent-primary)' }} />
                  <span>+91 8110839448</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <a
                href={resumeData.personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Qualities Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            {qualities.map((item, index) => (
              <div key={index} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: item.color
                  }}
                >
                  <item.icon size={22} />
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#ffffff' }}>{item.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
