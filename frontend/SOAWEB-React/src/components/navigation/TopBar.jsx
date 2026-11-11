import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './TopBar.css';

export default function TopBar({ onMenuToggle }) {
  const { user, switchRole, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const roles = [
    { key: 'learner', label: 'Apprenant' },
    { key: 'trainer', label: 'Formateur' },
    { key: 'institution', label: 'Établissement' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
    setDropdownOpen(false);
  };

  return (
    <header className="topbar">
      <div className="topbar-inner">
        {/* Left: Mobile menu + Role switcher + Level badge */}
        <div className="topbar-left">
          <button
            className="topbar-menu-btn"
            onClick={onMenuToggle}
            aria-label="Ouvrir le menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </button>

          {/* Role switcher pill */}
          <div className="topbar-role-switcher" role="group" aria-label="Sélectionner un rôle">
            {roles.map((r) => (
              <button
                key={r.key}
                className={`topbar-role-btn ${user?.role === r.key ? 'topbar-role-btn--active' : ''}`}
                onClick={() => switchRole(r.key)}
                aria-pressed={user?.role === r.key}
              >
                {user?.role === r.key && (
                  <span className="topbar-role-dot" aria-hidden="true" />
                )}
                {r.label}
              </button>
            ))}
          </div>

          <div className="topbar-divider" aria-hidden="true" />

          {/* CEFR badge */}
          <div className="topbar-cefr-badge" aria-label={`Langue: Français, niveau visé: DALF ${user?.cefrLevel}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.909V17h2V9L12 3z"/>
            </svg>
            <span>Français • DALF {user?.cefrLevel}</span>
          </div>
        </div>

        {/* Right: Language + Notifications + Avatar */}
        <div className="topbar-right">
          {/* Language toggle */}
          <div className="topbar-lang">
            <button className="topbar-lang-btn topbar-lang-btn--active">FR</button>
            <button className="topbar-lang-btn">EN</button>
          </div>

          {/* Notifications */}
          <button className="topbar-notif-btn" aria-label="Notifications">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
            </svg>
            <span className="topbar-notif-dot" aria-label="Nouvelles notifications" />
          </button>

          {/* Avatar dropdown */}
          <div className="topbar-avatar-wrapper">
            <button
              className="topbar-avatar-btn"
              onClick={() => setDropdownOpen((v) => !v)}
              aria-expanded={dropdownOpen}
              aria-haspopup="menu"
            >
              <div className="topbar-avatar-info">
                <span className="topbar-avatar-name">
                  {user?.firstName} {user?.lastName}
                </span>
                <span className="topbar-avatar-role">
                  Candidat DALF {user?.cefrLevel}
                </span>
              </div>
              <div className="topbar-avatar-circle" aria-hidden="true">
                {user?.avatarInitials ?? 'CL'}
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </button>

            {dropdownOpen && (
              <div className="topbar-dropdown" role="menu">
                <div className="topbar-dropdown-header">
                  <p className="topbar-dropdown-name">
                    {user?.firstName} {user?.lastName}
                  </p>
                  <p className="topbar-dropdown-email">{user?.email}</p>
                </div>
                <nav className="topbar-dropdown-nav">
                  <button
                    className="topbar-dropdown-item"
                    role="menuitem"
                    onClick={() => { navigate('/profile'); setDropdownOpen(false); }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    Mon Profil
                  </button>
                  <button
                    className="topbar-dropdown-item"
                    role="menuitem"
                    onClick={() => { navigate('/settings'); setDropdownOpen(false); }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                    </svg>
                    Paramètres
                  </button>
                </nav>
                <div className="topbar-dropdown-divider" />
                <button
                  className="topbar-dropdown-item topbar-dropdown-item--danger"
                  role="menuitem"
                  onClick={handleLogout}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
                  </svg>
                  Déconnexion
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
