import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Login.css';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: 'claire.desaintange@oralis-edu.fr',
    password: 'OralisC1Candidate2025',
    remember: true,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }
    setLoading(true);
    try {
      await login(form.email, form.password);
      setSuccess(true);
      setTimeout(() => navigate('/learner/dashboard'), 1000);
    } catch {
      setError('Identifiants incorrects. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* LEFT PANEL */}
      <div className="login-left" aria-hidden="true">
        <div className="login-left-bg1" />
        <div className="login-left-bg2" />

        {/* Branding */}
        <div className="login-brand">
          <div className="login-brand-logo">
            <div className="login-brand-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 20h2V4H2zm4 0h2V8H6zm4 0h2V12h-2zm4 0h2V6h-2zm4 0h2V10h-2z"/>
              </svg>
            </div>
            <div>
              <div className="login-brand-name">ORALIS</div>
              <div className="login-brand-sub">Audio Cognitive AI</div>
            </div>
            <div className="login-brand-pill">CECRL B1–C2</div>
          </div>
          <div className="login-brand-headline">
            Maîtrisez l'expression orale avec rigueur.
          </div>
          <p className="login-brand-desc">
            L'environnement haute précision calibré pour les certifications{' '}
            <strong>DELF, DALF, TCF, Cambridge &amp; IELTS</strong>.
          </p>
        </div>

        {/* Spectrogram card */}
        <div className="login-wave-card">
          <div className="login-wave-header">
            <div className="login-wave-live">
              <span className="login-wave-dot" />
              Spectrogramme Phonétique
            </div>
            <span className="login-wave-info">48.0 kHz • 24-bit Lossless</span>
          </div>

          <div className="login-wave-svg" aria-label="Visualisation de la forme d'onde">
            <svg viewBox="0 0 460 70" preserveAspectRatio="none" className="login-wave-line">
              <path
                d="M0 35 Q 15 5, 30 35 T 60 35 T 90 10 T 120 60 T 150 20 T 180 50 T 210 5 T 240 65 T 270 20 T 300 50 T 330 15 T 360 55 T 390 25 T 420 45 T 450 35 L 460 35"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="wave-primary"
              />
              <path
                d="M0 35 Q 20 20, 40 35 T 80 35 T 120 25 T 160 45 T 200 15 T 240 55 T 280 18 T 320 52 T 360 22 T 400 48 T 440 30 L 460 35"
                fill="none"
                stroke="#C4C0FF"
                strokeDasharray="2 3"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* CEFR criteria grid */}
          <div>
            <div className="login-criteria-header">
              <span>Critères de notation automatisés</span>
              <span className="login-criteria-accuracy">Précision &gt; 98.4%</span>
            </div>
            <div className="login-criteria-grid">
              {[
                { icon: 'mic', label: 'Prononciation', sub: 'Phonèmes IPA' },
                { icon: 'speed', label: 'Fluidité', sub: 'Débit & pauses' },
                { icon: 'graphic_eq', label: 'Intonation', sub: 'Courbe prosodique' },
                { icon: 'menu_book', label: 'Lexique', sub: 'Richesse C1/C2' },
                { icon: 'spellcheck', label: 'Grammaire', sub: 'Structures cibles' },
                { icon: 'schema', label: 'Cohérence', sub: 'Connecteurs logiques' },
              ].map((c) => (
                <div key={c.label} className="login-criteria-item">
                  <span className="material-symbols-outlined login-criteria-icon">
                    {c.icon}
                  </span>
                  <div>
                    <div className="login-criteria-label">{c.label}</div>
                    <div className="login-criteria-sub">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="login-testimonial">
          <div className="login-testimonial-avatar" aria-hidden="true">CL</div>
          <div>
            <div className="login-testimonial-name">
              Claire de Saint-Ange
              <span className="login-testimonial-badge">DALF C1</span>
            </div>
            <p className="login-testimonial-quote">
              « Le simulateur m'a permis d'obtenir 23,5/25 à l'épreuve orale du DALF. »
            </p>
          </div>
          <span className="material-symbols-outlined login-testimonial-check">verified</span>
        </div>

        {/* Footer compliance */}
        <div className="login-left-footer">
          <span className="login-left-footer-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
            </svg>
            Chiffrement e2e audio conforme RGPD
          </span>
          <span>ISO/IEC 27001</span>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="login-right">
        <div className="login-form-container">
          {/* Header */}
          <div className="login-form-header">
            <div className="login-secure-badge">
              <span className="login-secure-dot" />
              Espace Sécurisé
            </div>
            <h2 className="login-form-title">Ravi de vous revoir</h2>
            <p className="login-form-subtitle">
              Connectez-vous à votre espace d'apprentissage ou de formation.
            </p>
          </div>

          {/* SSO info banner */}
          <div className="login-sso-banner">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="login-sso-icon">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/>
            </svg>
            <div>
              <div className="login-sso-title">Redirection Automatique multi-rôle</div>
              <p className="login-sso-desc">
                Votre jeton d'authentification vous dirigera automatiquement vers le studio{' '}
                <strong>Apprenant</strong>, le tableau de bord <strong>Formateur</strong> ou la
                console <strong>Établissement</strong>.
              </p>
            </div>
          </div>

          {/* SSO Button */}
          <button className="login-sso-btn" type="button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.909V17h2V9L12 3z"/>
            </svg>
            <span>Continuer avec Établissement (SSO / Keycloak)</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: 'auto' }}>
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
            </svg>
          </button>

          {/* Divider */}
          <div className="login-divider">
            <div className="login-divider-line" />
            <span className="login-divider-text">ou avec vos identifiants</span>
            <div className="login-divider-line" />
          </div>

          {/* Form */}
          {error && <div className="login-error" role="alert">{error}</div>}

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            {/* Email */}
            <div className="login-field">
              <label className="login-label" htmlFor="email">
                Adresse email institutionnelle ou personnelle
              </label>
              <div className="login-input-wrapper">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="login-input-icon">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="ex. nom.prenom@universite-paris.fr"
                  value={form.email}
                  onChange={handleChange}
                  className="login-input"
                  aria-describedby={error ? 'login-error' : undefined}
                />
              </div>
            </div>

            {/* Password */}
            <div className="login-field">
              <div className="login-label-row">
                <label className="login-label" htmlFor="password">Mot de passe</label>
                <Link to="/forgot-password" className="login-forgot">
                  Mot de passe oublié ?
                </Link>
              </div>
              <div className="login-input-wrapper">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="login-input-icon">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                </svg>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  placeholder="Votre mot de passe sécurisé"
                  value={form.password}
                  onChange={handleChange}
                  className="login-input"
                />
                <button
                  type="button"
                  className="login-toggle-pwd"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                >
                  <span className="material-symbols-outlined">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="login-remember">
              <label className="login-remember-label">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                  className="login-checkbox"
                />
                Se souvenir de moi sur cet appareil
              </label>
              <span className="login-verified">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
                Poste vérifié
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`login-submit ${success ? 'login-submit--success' : ''}`}
              disabled={loading || success}
            >
              {loading ? (
                <>
                  <span className="login-spinner" aria-hidden="true" />
                  Authentification en cours...
                </>
              ) : success ? (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Redirection Studio Apprenant...
                </>
              ) : (
                <>
                  Se connecter à ORALIS
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Role badges */}
          <div className="login-roles-card">
            <div className="login-roles-header">
              <span>Comptes éligibles au portail</span>
              <span className="login-roles-dot" />
            </div>
            <div className="login-roles-list">
              {[
                { icon: 'person', label: 'Apprenant / Candidat' },
                { icon: 'supervisor_account', label: 'Formateur / Évaluateur' },
                { icon: 'apartment', label: 'Établissement & Académie' },
              ].map((r) => (
                <span key={r.label} className="login-role-pill">
                  <span className="material-symbols-outlined login-role-pill-icon">{r.icon}</span>
                  {r.label}
                </span>
              ))}
            </div>
          </div>

          {/* Sign up link */}
          <div className="login-signup">
            Vous n'avez pas encore d'accès ?{' '}
            <Link to="/register" className="login-signup-link">
              Créer un compte apprenant
            </Link>
          </div>

          {/* Legal */}
          <div className="login-legal">
            <p>
              Plateforme hébergée en Union Européenne. Les flux audio ne sont jamais utilisés
              sans consentement pour le réentraînement de modèles externes.
            </p>
            <div className="login-legal-links">
              <a href="#rgpd">Politique de confidentialité &amp; RGPD</a>
              <span>•</span>
              <a href="#cgu">Conditions d'utilisation</a>
              <span>•</span>
              <a href="#support">Assistance technique</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
