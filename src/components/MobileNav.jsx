import React from 'react';
import { Home, User, Code, FolderGit2, Mail, FileText } from 'lucide-react';

const MobileNav = ({ onOpenResume }) => {
  const links = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  return (
    <div className="mobile-bottom-nav">
      <div className="mobile-nav-inner">
        {links.map((link) => (
          <a key={link.name} href={link.href} className="mobile-nav-item">
            <link.icon size={20} />
            <span>{link.name}</span>
          </a>
        ))}
        <button onClick={onOpenResume} className="mobile-nav-item resume-btn">
          <FileText size={20} />
          <span>CV</span>
        </button>
      </div>

      <style>{`
        .mobile-bottom-nav {
          display: none;
          position: fixed;
          bottom: 1rem;
          left: 1rem;
          right: 1rem;
          z-index: 999;
        }

        .mobile-nav-inner {
          background: rgba(13, 19, 36, 0.9);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-full);
          padding: 0.5rem 0.8rem;
          display: flex;
          align-items: center;
          justify-content: space-around;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        }

        .mobile-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.15rem;
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.68rem;
          font-weight: 500;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s ease;
          padding: 0.2rem;
        }

        .mobile-nav-item:hover, .mobile-nav-item:focus {
          color: var(--accent-primary);
        }

        .mobile-nav-item.resume-btn {
          color: var(--accent-primary);
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .mobile-bottom-nav {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileNav;
