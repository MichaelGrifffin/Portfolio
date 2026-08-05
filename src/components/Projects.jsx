import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Layers, ArrowUpRight, Code, Database, Eye } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { resumeData } from '../data/resumeData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Web & Python', label: 'Web & Python' },
    { id: 'UI/UX & Web', label: 'UI/UX & Web' },
    { id: 'Python & DB', label: 'Python & MySQL' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? resumeData.projects
    : resumeData.projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            <span>// PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Interactive full-stack, Python database applications, and Figma UI/UX designs built during academic coursework and personal development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                background: selectedCategory === cat.id ? 'var(--gradient-accent)' : 'rgba(255, 255, 255, 0.05)',
                color: selectedCategory === cat.id ? '#05070e' : 'var(--text-muted)',
                fontWeight: selectedCategory === cat.id ? '700' : '500',
                border: selectedCategory === cat.id ? 'none' : '1px solid var(--border-color)',
                padding: '0.6rem 1.3rem',
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer',
                fontSize: '0.88rem',
                transition: 'all 0.25s ease'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                padding: '2.2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div>
                {/* Top Badge & Icon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <span className="glass-pill" style={{ color: 'var(--accent-primary)', borderColor: 'var(--accent-glow)' }}>
                    {project.badge}
                  </span>
                  
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                      title="GitHub Repository"
                    >
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.6rem' }}>
                  {project.title}
                </h3>

                {/* Short Description */}
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {project.shortDesc}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.8rem' }}>
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: 'var(--text-muted)',
                        fontSize: '0.78rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-sm)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span style={{ fontSize: '0.78rem', color: 'var(--accent-primary)', alignSelf: 'center' }}>
                      +{project.tech.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setActiveModalProject(project)}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem' }}
              >
                <Eye size={16} />
                <span>View Details & Specs</span>
              </button>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {activeModalProject && (
        <ProjectModal project={activeModalProject} onClose={() => setActiveModalProject(null)} />
      )}
    </section>
  );
};

export default Projects;
