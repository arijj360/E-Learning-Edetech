import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Sidebar.css';

const learnerItems = [
  { label: 'Tableau de bord', path: '/learner/dashboard', icon: 'grid_view', role: 'learner' },
  { label: 'Pratique Orale & Studio', path: '/learner/practice', icon: 'mic', role: 'learner' },
  { label: 'Analyse CECRL (6 critères)', path: '/learner/analysis', icon: 'analytics', role: 'learner' },
  { label: 'Feedback & Exercices', path: '/learner/feedback', icon: 'auto_fix_high', role: 'learner' },
  { label: 'Simulations d\'Examen', path: '/learner/simulations', icon: 'history_edu', role: 'learner' },
  { label: 'Certifications & Attestations', path: '/learner/certifications', icon: 'verified', role: 'learner' },
  { label: 'Suivi & Progression', path: '/learner/progress', icon: 'trending_up', role: 'learner' },
];

const trainerItems = [
  { label: 'Tableau de bord', path: '/trainer/dashboard', icon: 'grid_view', role: 'trainer' },
  { label: 'Gestion des Groupes', path: '/trainer/groups', icon: 'groups', role: 'trainer' },
  { label: 'Apprenants', path: '/trainer/learners', icon: 'people', role: 'trainer' },
  { label: 'Validation Formateur', path: '/trainer/feedback-validation', icon: 'assignment_turned_in', role: 'trainer' },
  { label: 'Gestion des Sujets', path: '/trainer/topics', icon: 'subject', role: 'trainer' },
  { label: 'Alertes', path: '/trainer/alerts', icon: 'notifications', role: 'trainer' },
];

const establishmentItems = [
  { label: 'Tableau de bord', path: '/establishment/dashboard', icon: 'grid_view', role: 'institution' },
  { label: 'Gestion des Groupes', path: '/establishment/groups', icon: 'groups', role: 'institution' },
  { label: 'Apprenants', path: '/establishment/learners', icon: 'people', role: 'institution' },
  { label: 'Formateurs', path: '/establishment/trainers', icon: 'supervisor_account', role: 'institution' },
  { label: 'Pilotage Institutionnel', path: '/establishment/analytics', icon: 'account_balance', role: 'institution' },
  { label: 'Attestations', path: '/establishment/attestations', icon: 'verified', role: 'institution' },
];

export default function Sidebar({ isOpen, onClose }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="sidebar-overlay" onClick={onClose} aria-hidden="true" />
      )}

      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`} role="navigation" aria-label="Navigation principale">
        {/* Logo */}
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 20h2V4H2zm4 0h2V8H6zm4 0h2V12h-2zm4 0h2V6h-2zm4 0h2V10h-2z"/>
            </svg>
          </div>
          <div className="sidebar-logo-text">
            <span className="sidebar-logo-name">ORALIS</span>
            <span className="sidebar-logo-sub">Expression Orale</span>
          </div>
        </div>

        {/* Nav items */}
        <nav className="sidebar-nav">
          {user?.role === 'learner' && (
            <>
              <div className="sidebar-section-label">Apprentissage &amp; Pratique</div>
              {learnerItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `sidebar-link ${isActive ? 'sidebar-link--active' : ''}`
                  }
                  onClick={onClose}
                >
                  <span className="material-symbols-outlined sidebar-link-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </>
          )}

          {user?.role === 'trainer' && (
            <>
              <div className="sidebar-section-label">Encadrement &amp; Formation</div>
              {trainerItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `sidebar-link ${isActive ? 'sidebar-link--active' : ''}`
                  }
                  onClick={onClose}
                >
                  <span className="material-symbols-outlined sidebar-link-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </>
          )}

          {user?.role === 'institution' && (
            <>
              <div className="sidebar-section-label">Gestion Institutionnelle</div>
              {establishmentItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `sidebar-link ${isActive ? 'sidebar-link--active' : ''}`
                  }
                  onClick={onClose}
                >
                  <span className="material-symbols-outlined sidebar-link-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </>
          )}
        </nav>

        {/* Quota footer */}
        <div className="sidebar-footer">
          <div className="sidebar-quota">
            <div>
              <div className="sidebar-quota-label">Quota Studio</div>
              <div className="sidebar-quota-value">
                {user?.studioQuota?.used} / {user?.studioQuota?.total}
              </div>
            </div>
            <div className="sidebar-quota-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 20h2V4H2zm4 0h2V8H6zm4 0h2V12h-2zm4 0h2V6h-2zm4 0h2V10h-2z"/>
              </svg>
            </div>
          </div>
          <div className="sidebar-quota-bar">
            <div
              className="sidebar-quota-fill"
              style={{ width: `${user?.studioQuota?.percent ?? 0}%` }}
            />
          </div>
        </div>
      </aside>
    </>
  );
}
