import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Profile.css';

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [showUuid, setShowUuid] = useState(false);
  const [form, setForm] = useState({
    firstName: 'Claire',
    lastName: 'de Saint-Ange',
    email: 'claire.desaintange@sorbonne-universite.fr',
    phone: '+33 6 42 18 90 22',
    bio: 'Préparation intensive au DALF C1/C2 pour intégration en Master de Droit International et Sciences Politiques. Focalisation sur l\'éloquence spontanée, la précision lexicale juridique et la dialectique contradictoire.',
  });
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    setSaved(true);
    setEditing(false);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="profile-page">
      {/* Action bar */}
      <div className="profile-action-bar">
        <div className="profile-action-left">
          <span className="profile-role-label">Espace rôle actif</span>
          <div className="profile-role-switcher">
            {['Apprenant', 'Formateur', 'Établissement'].map((r) => (
              <button key={r}
                className={`profile-role-btn ${r === 'Apprenant' ? 'profile-role-btn--active' : ''}`}>
                {r === 'Apprenant' && <span className="profile-role-dot" />}
                {r}
              </button>
            ))}
          </div>
          <span className="profile-target-info">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.909V17h2V9L12 3z"/>
            </svg>
            Cible : FLE DALF C1 → C2
          </span>
        </div>
        <div className="profile-action-right">
          {editing ? (
            <>
              <button className="profile-btn-cancel" onClick={() => setEditing(false)}>Annuler</button>
              <button className="profile-btn-save" onClick={handleSave}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/>
                </svg>
                Enregistrer les modifications
              </button>
            </>
          ) : (
            <button className="profile-btn-edit" onClick={() => setEditing(true)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
              </svg>
              Modifier le profil
            </button>
          )}
          <button className="profile-btn-logout" onClick={() => { logout(); navigate('/login'); }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
            </svg>
            Déconnexion
          </button>
        </div>
      </div>

      {saved && (
        <div className="profile-toast" role="status" aria-live="polite">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
          <div>
            <div className="profile-toast-title">Préférences synchronisées</div>
            <div className="profile-toast-sub">Tous les réglages ont été mis à jour.</div>
          </div>
        </div>
      )}

      <div className="profile-content">
        {/* Banner card */}
        <div className="profile-banner-card">
          <div className="profile-banner-bg" aria-hidden="true">
            <div className="profile-banner-pattern" aria-hidden="true" />
            <div className="profile-accred-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              ID ACCRÉDITATION C-883492
            </div>
          </div>

          <div className="profile-banner-body">
            <div className="profile-avatar-row">
              <div className="profile-avatar-wrapper">
                <div className="profile-avatar-circle" aria-label="Avatar de Claire de Saint-Ange">
                  CL
                </div>
                <div className="profile-avatar-role-dot" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.909V17h2V9L12 3z"/>
                  </svg>
                </div>
              </div>

              <div>
                <div className="profile-name-row">
                  <h1 className="profile-name">{form.firstName} {form.lastName}</h1>
                  <span className="profile-verified-badge">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Apprenant vérifié
                  </span>
                  <span className="profile-active-badge">
                    <span className="profile-active-dot" />
                    Actif • Sorbonne-Nouvelle
                  </span>
                </div>
                <div className="profile-meta-row">
                  <span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                    Membre depuis : Septembre 2023
                  </span>
                  <span className="profile-uuid">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/>
                    </svg>
                    {showUuid ? '8f2d4c91-b3a2-492e-9f1d-7c3e8a042b65' : 'UUID: 8f2d••••-••••-492e'}
                    <button className="profile-uuid-toggle" onClick={() => setShowUuid((v) => !v)}
                      aria-label={showUuid ? 'Masquer UUID' : 'Afficher UUID'}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        {showUuid
                          ? <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
                          : <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>}
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            </div>

            <label className="profile-change-photo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h4.05l1.83-2h4.24l1.83 2H20v12zM12 8c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/>
              </svg>
              Changer la photo
              <input type="file" className="profile-file-input" accept="image/*" />
            </label>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="profile-grid">
          {/* Left: forms */}
          <div className="profile-left">
            {/* Personal info */}
            <div className="profile-section-card">
              <div className="profile-section-header">
                <div className="profile-section-icon-wrap profile-section-icon-wrap--primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="profile-section-title">Informations Personnelles &amp; Contact</h2>
                  <p className="profile-section-sub">Coordonnées institutionnelles et profil oratoire</p>
                </div>
                <span className="profile-section-badge">Identité Référencée</span>
              </div>

              <div className="profile-fields-grid">
                {[
                  { name: 'firstName', label: 'Prénom', type: 'text', icon: 'person' },
                  { name: 'lastName', label: 'Nom', type: 'text', icon: 'family_restroom' },
                  { name: 'email', label: 'Email académique', type: 'email', icon: 'mail', verified: true },
                  { name: 'phone', label: 'Numéro de téléphone', type: 'tel', icon: 'call' },
                ].map((f) => (
                  <div key={f.name} className="profile-field">
                    <div className="profile-field-label-row">
                      <label className="profile-field-label">{f.label}</label>
                      {f.verified && (
                        <span className="profile-verified-mini">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          Vérifié
                        </span>
                      )}
                    </div>
                    <div className="profile-input-wrap">
                      <input
                        type={f.type}
                        name={f.name}
                        value={form[f.name]}
                        onChange={handleChange}
                        disabled={!editing}
                        className="profile-input"
                      />
                      <span className={`material-symbols-outlined profile-input-icon`}>{f.icon}</span>
                    </div>
                  </div>
                ))}
                <div className="profile-field profile-field--full">
                  <div className="profile-field-label-row">
                    <label className="profile-field-label">Biographie &amp; Objectif pédagogique</label>
                    <span className="profile-field-hint">Visible par les examinateurs formés</span>
                  </div>
                  <textarea
                    name="bio"
                    value={form.bio}
                    onChange={handleChange}
                    disabled={!editing}
                    rows={3}
                    className="profile-textarea"
                  />
                </div>
              </div>
            </div>

            {/* CEFR progress */}
            <div className="profile-section-card">
              <div className="profile-section-header">
                <div className="profile-section-icon-wrap profile-section-icon-wrap--secondary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-4h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="profile-section-title">Parcours Linguistique &amp; Cadre CECRL</h2>
                  <p className="profile-section-sub">Étalonnage des grilles d'évaluation et progression</p>
                </div>
                <div className="profile-lang-chips">
                  <span className="profile-lang-chip">UI: Français (FR)</span>
                  <span className="profile-lang-chip profile-lang-chip--primary">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04z"/>
                    </svg>
                    Cible: Français (FLE)
                  </span>
                </div>
              </div>

              <div className="profile-cefr-compare">
                <div className="profile-cefr-card">
                  <div className="profile-cefr-card-header">
                    <span className="profile-cefr-card-label">Niveau Actuel Évalué</span>
                    <span className="profile-cefr-pill profile-cefr-pill--light">C1</span>
                  </div>
                  <div className="profile-cefr-card-title">DALF C1 (Acquis — Score 86/100)</div>
                  <div className="profile-progress-bar-bg">
                    <div className="profile-progress-bar" style={{ width: '86%' }} />
                  </div>
                  <div className="profile-cefr-card-footer">
                    <span>Production Orale : 22.5/25</span>
                    <span>Validé le 12 Janv 2024</span>
                  </div>
                </div>
                <div className="profile-cefr-card profile-cefr-card--target">
                  <div className="profile-cefr-card-header">
                    <span className="profile-cefr-card-label">Objectif de Session</span>
                    <span className="profile-cefr-pill profile-cefr-pill--solid">C2</span>
                  </div>
                  <div className="profile-cefr-card-title">DALF C2 — Épreuve de synthèse &amp; débat</div>
                  <div className="profile-progress-bar-bg">
                    <div className="profile-progress-bar profile-progress-bar--light" style={{ width: '64%' }} />
                  </div>
                  <div className="profile-cefr-card-footer">
                    <span>Maîtrise autonome et rhétorique</span>
                    <span style={{ color: 'var(--primary)', fontWeight: 700 }}>64% prêt</span>
                  </div>
                </div>
              </div>

              <div className="profile-meta-cards">
                {[
                  { icon: 'event', label: 'Date examen visée', value: user?.examDate ?? '24 Mai 2025' },
                  { icon: 'record_voice_over', label: 'Formateur référent', value: user?.trainer ?? 'Marc V. (CIEP/FEI)' },
                  { icon: 'assessment', label: 'Rubrique analytique', value: 'Pragmatique & Prosodie' },
                ].map((m) => (
                  <div key={m.label} className="profile-meta-card">
                    <div className="profile-meta-card-icon">
                      <span className="material-symbols-outlined">{m.icon}</span>
                    </div>
                    <div>
                      <div className="profile-meta-card-label">{m.label}</div>
                      <div className="profile-meta-card-value">{m.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scores grid */}
              <div className="profile-scores-grid">
                <div className="profile-scores-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--primary)' }}>
                    <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14zm0-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  </svg>
                  Évaluation formative croisée (Formateur vs Modèle IA)
                </div>
                <div className="profile-scores-cells">
                  {[
                    { label: 'Aisance / Débit', val: '18.5/20', color: 'primary' },
                    { label: 'Précision Phonétique', val: '16.0/20', color: '' },
                    { label: 'Cohérence Rhétorique', val: '17.5/20', color: '' },
                    { label: 'Étendue Lexicale', val: '19.0/20', color: 'primary' },
                  ].map((s) => (
                    <div key={s.label} className="profile-score-cell">
                      <div className="profile-score-cell-label">{s.label}</div>
                      <div className={`profile-score-cell-val ${s.color === 'primary' ? 'profile-score-cell-val--primary' : ''}`}>
                        {s.val}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: security */}
          <div className="profile-right">
            <div className="profile-section-card">
              <div className="profile-section-header">
                <div className="profile-section-icon-wrap profile-section-icon-wrap--error">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="profile-section-title">Sécurité du Compte</h2>
                  <p className="profile-section-sub">Fournisseur d'identité Keycloak</p>
                </div>
              </div>

              {/* 2FA */}
              <div className="profile-security-item">
                <div className="profile-security-item-left">
                  <div className="profile-security-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zm-5-1c.83 0 1.5-.67 1.5-1.5S12.83 15 12 15s-1.5.67-1.5 1.5S11.17 18 12 18z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="profile-security-label">Double Authentification (2FA)</div>
                    <div className="profile-security-sub">Authentification par SMS ou TOTP</div>
                  </div>
                </div>
                <div className="profile-toggle">
                  <div className="profile-toggle-track profile-toggle-track--on">
                    <div className="profile-toggle-thumb profile-toggle-thumb--on" />
                  </div>
                </div>
              </div>

              {[
                { label: 'Clés API Actives', value: '2 tokens actifs' },
                { label: 'Sessions Actives', value: '1 session (ce navigateur)' },
                { label: 'Dernière connexion', value: 'Aujourd\'hui à 09:14' },
              ].map((s) => (
                <div key={s.label} className="profile-info-row">
                  <span className="profile-info-label">{s.label}</span>
                  <span className="profile-info-value">{s.value}</span>
                </div>
              ))}

              <button className="profile-change-pwd-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                </svg>
                Modifier le mot de passe
              </button>
            </div>

            {/* Quota */}
            <div className="profile-section-card">
              <h3 className="profile-quota-title">Quota Studio Mensuel</h3>
              <div className="profile-quota-row">
                <span>Utilisé</span>
                <span className="profile-quota-val">
                  {user?.studioQuota?.used} / {user?.studioQuota?.total}
                </span>
              </div>
              <div className="profile-quota-bar-bg">
                <div className="profile-quota-bar" style={{ width: `${user?.studioQuota?.percent ?? 72}%` }} />
              </div>
              <p className="profile-quota-note">
                Quota mensuel selon votre formule d'abonnement ORALIS Pro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
