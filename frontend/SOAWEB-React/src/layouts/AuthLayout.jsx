import { Outlet } from 'react-router-dom';
import './AuthLayout.css';

/**
 * Layout for auth pages: Login, Register, ForgotPassword
 * Simple header + full page content
 */
export default function AuthLayout() {
  return (
    <div className="auth-layout">
      {/* Minimal header */}
      <header className="auth-header">
        <div className="auth-header-logo">
          <div className="auth-header-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 20h2V4H2zm4 0h2V8H6zm4 0h2V12h-2zm4 0h2V6h-2zm4 0h2V10h-2z"/>
            </svg>
          </div>
          <span className="auth-header-name">ORALIS</span>
        </div>
        <div className="auth-header-lang">
          <button className="auth-lang-btn auth-lang-btn--active">EN</button>
          <button className="auth-lang-btn">FR</button>
        </div>
      </header>
      <main className="auth-main">
        <Outlet />
      </main>
    </div>
  );
}
