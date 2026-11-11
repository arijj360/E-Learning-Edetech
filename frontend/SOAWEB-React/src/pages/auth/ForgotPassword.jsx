import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('claire.desaintange@oralis-edu.fr');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [resendText, setResendText] = useState('');

  useEffect(() => {
    if (countdown <= 0) return;
    const id = setInterval(() => {
      setCountdown((v) => {
        if (v <= 1) {
          clearInterval(id);
          return 0;
        }
        return v - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [countdown]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setCountdown(59);
    }, 700);
  };

  const handleResend = () => {
    setResendText('Renvoi effectué !');
    setTimeout(() => {
      setResendText('');
      setCountdown(59);
    }, 1200);
  };

  const handleEditEmail = () => {
    setSubmitted(false);
    setCountdown(0);
  };

  return (
    <div className="fp-page">
      {/* Background glows */}
      <div className="fp-bg1" aria-hidden="true" />
      <div className="fp-bg2" aria-hidden="true" />

      <div className="fp-container">
        {/* Back link */}
        <Link to="/login" className="fp-back">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          Retour à la connexion
        </Link>

        {/* Card */}
        <div className="fp-card">
          {/* Icon header */}
          <div className="fp-icon-wrapper">
            <div className="fp-icon-circle">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
            </div>
            <div className="fp-icon-check" aria-hidden="true">✓</div>
          </div>

          <div className="fp-security-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
            Sécurité du compte Oralis
          </div>

          <h1 className="fp-title">Mot de passe oublié ?</h1>
          <p className="fp-subtitle">
            Ne vous inquiétez pas, saisissez l'adresse email associée à votre compte ORALIS.
            Nous vous enverrons immédiatement un lien sécurisé pour réinitialiser votre mot de passe.
          </p>

          {/* Form or success panel */}
          {!submitted ? (
            <form className="fp-form" onSubmit={handleSubmit} noValidate>
              <div className="fp-field">
                <div className="fp-label-row">
                  <label className="fp-label" htmlFor="fp-email">
                    Adresse email enregistrée
                  </label>
                  <span className="fp-label-hint">Accréditation CEFR / Pro</span>
                </div>
                <div className="fp-input-wrapper">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="fp-input-icon">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <input
                    id="fp-email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="ex. claire.desaintange@oralis-edu.fr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="fp-input"
                  />
                </div>
                <p className="fp-helper">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                  Format institutionnel ou identifiant d'apprenant reconnu
                </p>
              </div>

              <button type="submit" className="fp-submit" disabled={loading}>
                {loading ? (
                  <>
                    <span className="fp-spinner" aria-hidden="true" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le lien de réinitialisation
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="fp-success" role="status" aria-live="polite">
              <div className="fp-success-inner">
                <div className="fp-success-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="fp-success-title">Email envoyé avec succès !</h2>
                  <p className="fp-success-desc">
                    Vérifiez votre boîte de réception (et vos spams). Le lien expirera dans{' '}
                    <strong>15 minutes</strong>.
                  </p>
                  <div className="fp-success-actions">
                    <button
                      className="fp-resend-btn"
                      onClick={handleResend}
                      disabled={countdown > 0}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                      </svg>
                      {resendText || (countdown > 0 ? `Renvoyer l'email (${countdown}s)` : "Renvoyer l'email")}
                    </button>
                    <button className="fp-edit-email" onClick={handleEditEmail}>
                      Modifier l'adresse
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Help section */}
          <div className="fp-help">
            <div className="fp-help-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="fp-help-icon">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
              </svg>
              <div>
                <strong>Besoin d'aide supplémentaire ?</strong>
                <p>
                  Contactez le coordinateur de votre centre d'examen ou écrivez directement à{' '}
                  <a href="mailto:support@oralis-edu.fr">support@oralis-edu.fr</a>.
                </p>
              </div>
            </div>
            <div className="fp-switch-account">
              <Link to="/login" className="fp-switch-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
                Se connecter avec un autre compte
              </Link>
            </div>
          </div>
        </div>

        {/* Security indicators */}
        <div className="fp-indicators">
          {[
            { icon: 'lock', label: 'Chiffrement TLS 1.3' },
            { icon: 'verified', label: 'Conforme RGPD & CEFR' },
            { icon: 'timer', label: 'Jeton à durée limitée' },
          ].map((i) => (
            <div key={i.label} className="fp-indicator">
              <span className="material-symbols-outlined fp-indicator-icon">{i.icon}</span>
              <span>{i.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
