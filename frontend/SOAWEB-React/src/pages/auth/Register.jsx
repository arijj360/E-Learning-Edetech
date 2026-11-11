import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const ROLES = [
  {
    key: 'learner',
    label: 'Apprenant',
    desc: 'Étudiant, candidat aux examens du CECRL (B1-C2).',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.909V17h2V9L12 3z"/>
      </svg>
    ),
  },
  {
    key: 'trainer',
    label: 'Formateur',
    desc: "Évaluateur certifié, enseignant de FLE ou d'ESL.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
      </svg>
    ),
  },
  {
    key: 'institution',
    label: 'Établissement',
    desc: 'Université, centre de langues, académie partenaire.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
      </svg>
    ),
  },
];

const CEFR_LEVELS = ['B1', 'B2', 'C1', 'C2'];

function getPasswordStrength(password) {
  let score = 0;
  const checks = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    number: /\d/.test(password),
    special: /[@$!%*?&#^()_\-+=]/.test(password),
  };
  score = Object.values(checks).filter(Boolean).length;
  const labels = ['', 'Très modérée', 'Modérée', 'Forte', 'Très forte'];
  const colors = ['', '#ba1a1a', '#f59e0b', '#3b82f6', '#10b981'];
  return { score, checks, label: labels[score] || '', color: colors[score] || '' };
}

export default function Register() {
  const navigate = useNavigate();
  const [role, setRole] = useState('learner');
  const [currentLevel, setCurrentLevel] = useState('B2');
  const [targetLevel, setTargetLevel] = useState('C1');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    uiLang: 'fr',
    password: '',
    confirm: '',
    targetLang: 'fle',
    exam: 'dalf_c1',
    gdpr1: true,
    gdpr2: true,
    gdpr3: false,
  });
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const strength = getPasswordStrength(form.password);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
    if (strength.score < 2) {
      setError('Choisissez un mot de passe plus robuste.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/login');
    }, 1200);
  };

  return (
    <div className="reg-page">
      {/* Ambient glows */}
      <div className="reg-bg1" aria-hidden="true" />
      <div className="reg-bg2" aria-hidden="true" />

      <div className="reg-container">
        {/* Page header */}
        <div className="reg-header">
          <div>
            <div className="reg-badge">
              <span className="reg-badge-dot" />
              Inscription Officielle • Standard CECRL
            </div>
            <h1 className="reg-title">Créer votre compte ORALIS</h1>
            <p className="reg-subtitle">
              Rejoignez la plateforme d'entraînement et d'évaluation orale certifiée CECRL.
            </p>
          </div>
          <div className="reg-login-link">
            <span className="reg-login-hint">Vous avez déjà un compte ?</span>
            <Link to="/login" className="reg-login-a">
              Se connecter
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Two-column grid */}
        <div className="reg-grid">
          {/* LEFT: form */}
          <div className="reg-left">

            {/* STEP 01: Role */}
            <div className="reg-card">
              <div className="reg-step-header">
                <div>
                  <span className="reg-step-num">Étape 01</span>
                  <h2 className="reg-step-title">Sélectionnez votre profil d'usage</h2>
                </div>
                <span className="reg-step-hint">Rôle modifiable ultérieurement</span>
              </div>
              <div className="reg-roles" role="radiogroup" aria-label="Sélection du rôle">
                {ROLES.map((r) => (
                  <button
                    key={r.key}
                    type="button"
                    className={`reg-role-btn ${role === r.key ? 'reg-role-btn--active' : ''}`}
                    onClick={() => setRole(r.key)}
                    aria-pressed={role === r.key}
                  >
                    <div className="reg-role-top">
                      <div className={`reg-role-icon ${role === r.key ? 'reg-role-icon--active' : ''}`}>
                        {r.icon}
                      </div>
                      {role === r.key && (
                        <div className="reg-role-check" aria-hidden="true">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="reg-role-label">{r.label}</div>
                    <div className="reg-role-desc">{r.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 02: Personal info */}
            <div className="reg-card">
              <div className="reg-step-header">
                <div>
                  <span className="reg-step-num">Étape 02</span>
                  <h2 className="reg-step-title">Informations personnelles</h2>
                </div>
                <span className="reg-keycloak-badge">Secured by Keycloak</span>
              </div>

              <div className="reg-fields-grid">
                <div className="reg-field">
                  <label className="reg-label" htmlFor="firstName">Prénom</label>
                  <div className="reg-input-wrap">
                    <span className="material-symbols-outlined reg-field-icon">person</span>
                    <input id="firstName" name="firstName" type="text" placeholder="Camille"
                      value={form.firstName} onChange={handleChange} className="reg-input" />
                  </div>
                </div>
                <div className="reg-field">
                  <label className="reg-label" htmlFor="lastName">Nom</label>
                  <div className="reg-input-wrap">
                    <span className="material-symbols-outlined reg-field-icon">badge</span>
                    <input id="lastName" name="lastName" type="text" placeholder="Laurent"
                      value={form.lastName} onChange={handleChange} className="reg-input" />
                  </div>
                </div>
              </div>

              <div className="reg-field">
                <label className="reg-label" htmlFor="email">
                  Adresse email professionnelle ou académique
                </label>
                <div className="reg-input-wrap">
                  <span className="material-symbols-outlined reg-field-icon">mail</span>
                  <input id="email" name="email" type="email"
                    placeholder="c.laurent@sorbonne-universite.fr"
                    value={form.email} onChange={handleChange} className="reg-input" />
                </div>
                <span className="reg-field-hint">
                  Les adresses académiques bénéficient de la synchronisation automatique des centres partenaires.
                </span>
              </div>

              {/* UI Language */}
              <div className="reg-lang-toggle">
                <div className="reg-lang-left">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--primary)' }}>
                    <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
                  </svg>
                  <div>
                    <div className="reg-lang-title">Langue de l'interface</div>
                    <div className="reg-lang-sub">Langue des feedbacks audio et du tableau de bord</div>
                  </div>
                </div>
                <div className="reg-lang-radios">
                  {[{ val: 'fr', label: 'Français' }, { val: 'en', label: 'English' }].map((l) => (
                    <label key={l.val} className={`reg-lang-opt ${form.uiLang === l.val ? 'reg-lang-opt--active' : ''}`}>
                      <input type="radio" name="uiLang" value={l.val}
                        checked={form.uiLang === l.val} onChange={handleChange} />
                      {l.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Password */}
              <div className="reg-fields-grid">
                <div className="reg-field">
                  <label className="reg-label" htmlFor="password">Mot de passe</label>
                  <div className="reg-input-wrap">
                    <span className="material-symbols-outlined reg-field-icon">lock</span>
                    <input id="password" name="password" type={showPwd ? 'text' : 'password'}
                      placeholder="••••••••••••" value={form.password} onChange={handleChange}
                      className="reg-input" />
                    <button type="button" className="reg-pwd-toggle"
                      onClick={() => setShowPwd((v) => !v)}
                      aria-label={showPwd ? 'Masquer' : 'Afficher'}>
                      <span className="material-symbols-outlined">{showPwd ? 'visibility_off' : 'visibility'}</span>
                    </button>
                  </div>
                </div>
                <div className="reg-field">
                  <label className="reg-label" htmlFor="confirm">Confirmation du mot de passe</label>
                  <div className="reg-input-wrap">
                    <span className="material-symbols-outlined reg-field-icon">lock_reset</span>
                    <input id="confirm" name="confirm" type="password"
                      placeholder="••••••••••••" value={form.confirm} onChange={handleChange}
                      className="reg-input" />
                  </div>
                </div>
              </div>

              {/* Password strength */}
              <div className="reg-pwd-strength">
                <div className="reg-pwd-strength-row">
                  <span>Force du mot de passe :</span>
                  <span style={{ color: strength.color, fontWeight: 700 }}>{strength.label || '—'}</span>
                </div>
                <div className="reg-pwd-bars">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="reg-pwd-bar"
                      style={{ backgroundColor: i <= strength.score ? strength.color : 'var(--surface-container-highest)' }}
                    />
                  ))}
                </div>
                <div className="reg-pwd-reqs">
                  {[
                    { key: 'length', label: '8+ caractères' },
                    { key: 'upper', label: '1 majuscule' },
                    { key: 'number', label: '1 chiffre' },
                    { key: 'special', label: '1 symbole (@$!%*)' },
                  ].map((r) => (
                    <div key={r.key}
                      className={`reg-pwd-req ${strength.checks[r.key] ? 'reg-pwd-req--ok' : ''}`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        {strength.checks[r.key]
                          ? <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          : <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>}
                      </svg>
                      {r.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* STEP 03: Role-specific */}
            {role === 'learner' && (
              <div className="reg-card">
                <div className="reg-step-header">
                  <div>
                    <span className="reg-step-num">Étape 03</span>
                    <h2 className="reg-step-title">Profil spécifique : Apprenant</h2>
                  </div>
                  <span className="reg-cefr-badge">Candidat CECRL</span>
                </div>

                {/* Target language */}
                <div className="reg-field">
                  <label className="reg-label">Langue cible d'apprentissage</label>
                  <div className="reg-fields-grid">
                    {[
                      { val: 'fle', code: 'FR', name: 'Français (FLE)', sub: 'Français Langue Étrangère' },
                      { val: 'esl', code: 'EN', name: 'English (ESL)', sub: 'English as a Second Language' },
                    ].map((l) => (
                      <label key={l.val} className={`reg-lang-card ${form.targetLang === l.val ? 'reg-lang-card--active' : ''}`}>
                        <div className="reg-lang-card-left">
                          <div className="reg-lang-card-code">{l.code}</div>
                          <div>
                            <div className="reg-lang-card-name">{l.name}</div>
                            <div className="reg-lang-card-sub">{l.sub}</div>
                          </div>
                        </div>
                        <input type="radio" name="targetLang" value={l.val}
                          checked={form.targetLang === l.val} onChange={handleChange} />
                      </label>
                    ))}
                  </div>
                </div>

                {/* CEFR level selectors */}
                <div className="reg-fields-grid">
                  <div className="reg-field">
                    <div className="reg-label-row-spread">
                      <label className="reg-label">Niveau CECRL actuel estimé</label>
                      <span className="reg-label-hint">Auto-évaluation</span>
                    </div>
                    <div className="reg-level-grid">
                      {CEFR_LEVELS.map((l) => (
                        <button key={l} type="button"
                          className={`reg-level-btn ${currentLevel === l ? 'reg-level-btn--active' : ''}`}
                          onClick={() => setCurrentLevel(l)}>
                          {l}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="reg-field">
                    <div className="reg-label-row-spread">
                      <label className="reg-label">Niveau CECRL visé</label>
                      <span className="reg-label-hint" style={{ color: 'var(--primary)' }}>Objectif prioritaire</span>
                    </div>
                    <div className="reg-level-grid">
                      {CEFR_LEVELS.map((l) => (
                        <button key={l} type="button"
                          className={`reg-level-btn ${targetLevel === l ? 'reg-level-btn--active' : ''}`}
                          onClick={() => setTargetLevel(l)}>
                          {l}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Exam */}
                <div className="reg-field">
                  <label className="reg-label" htmlFor="exam">
                    Certification ou examen officiel préparé
                  </label>
                  <div className="reg-input-wrap">
                    <span className="material-symbols-outlined reg-field-icon">verified</span>
                    <select id="exam" name="exam" value={form.exam} onChange={handleChange} className="reg-select">
                      <option value="dalf_c1">DALF C1 — Diplôme Approfondi de Langue Française</option>
                      <option value="dalf_c2">DALF C2 — Diplôme Approfondi de Langue Française (Maîtrise)</option>
                      <option value="delf_b2">DELF B2 — Diplôme d'Études en Langue Française</option>
                      <option value="tcf_tp">TCF Tout Public — Épreuves d'expression orale</option>
                      <option value="cambridge_c1">Cambridge English C1 Advanced (CAE)</option>
                      <option value="ielts_acad">IELTS Academic (Speaking band 7.5 - 9.0)</option>
                      <option value="toefl_ibt">TOEFL iBT (Independent & Integrated Speaking)</option>
                    </select>
                    <span className="material-symbols-outlined reg-select-arrow">expand_more</span>
                  </div>
                </div>
              </div>
            )}

            {role === 'trainer' && (
              <div className="reg-card">
                <span className="reg-step-num">Étape 03</span>
                <h2 className="reg-step-title">Profil Formateur &amp; Examinateur</h2>
                <p className="reg-role-role-desc">
                  Accès aux consoles d'annotation phonétique, modération de jurys et création de sujets.
                </p>
                <div className="reg-fields-grid">
                  <div className="reg-field">
                    <label className="reg-label">Domaine de spécialisation principale</label>
                    <select className="reg-select-simple">
                      <option>Phonétique acoustique & Prosodie</option>
                      <option>Argumentation rhétorique & Débats C1/C2</option>
                      <option>Évaluation sommative CECRL / DELF-DALF</option>
                      <option>Français sur Objectifs Spécifiques (FOS)</option>
                    </select>
                  </div>
                  <div className="reg-field">
                    <label className="reg-label">Habilitation examinateur-correcteur</label>
                    <input type="text" placeholder="Ex: France Éducation International (2022-2027)"
                      className="reg-input-simple" />
                  </div>
                </div>
              </div>
            )}

            {role === 'institution' && (
              <div className="reg-card">
                <span className="reg-step-num">Étape 03</span>
                <h2 className="reg-step-title">Centre Universitaire / École Partenaire</h2>
                <div className="reg-fields-grid">
                  <div className="reg-field">
                    <label className="reg-label">Nom de l'établissement</label>
                    <input type="text" placeholder="Alliance Française / Université Paris-Cité"
                      className="reg-input-simple" />
                  </div>
                  <div className="reg-field">
                    <label className="reg-label">Type d'organisation</label>
                    <select className="reg-select-simple">
                      <option>Université / Grande École</option>
                      <option>Institut Français / Alliance Française</option>
                      <option>Centre de langues privé accrédité</option>
                      <option>Lycée International</option>
                    </select>
                  </div>
                  <div className="reg-field">
                    <label className="reg-label">Ville &amp; Pays du campus principal</label>
                    <input type="text" placeholder="Paris, France" className="reg-input-simple" />
                  </div>
                  <div className="reg-field">
                    <label className="reg-label">Téléphone du responsable de scolarité</label>
                    <input type="tel" placeholder="+33 (0)1 40 00 00 00" className="reg-input-simple" />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 04: Consent */}
            <div className="reg-card">
              <span className="reg-step-num">Étape 04</span>
              <h2 className="reg-step-title">Conformité RGPD &amp; Enregistrements Audio</h2>

              {error && <div className="reg-error" role="alert">{error}</div>}

              <div className="reg-consents">
                {[
                  {
                    name: 'gdpr1',
                    text: (
                      <>
                        J'accepte les <a href="#cgu">Conditions Générales d'Utilisation</a> et la{' '}
                        <a href="#rgpd">Politique de Confidentialité</a> régissant la conservation et le
                        chiffrement des données d'apprentissage.
                      </>
                    ),
                  },
                  {
                    name: 'gdpr2',
                    text: "J'accepte explicitement le traitement de mes enregistrements vocaux par le moteur d'analyse phonologique et acoustique IA pour l'extraction des formants et la notation CECRL automatisée.",
                  },
                  {
                    name: 'gdpr3',
                    text: "J'accepte de recevoir les recommandations pédagogiques personnalisées par email selon les résultats de mes évaluations CECRL.",
                  },
                ].map((c) => (
                  <label key={c.name} className="reg-consent-item">
                    <input type="checkbox" name={c.name}
                      checked={form[c.name]} onChange={handleChange}
                      className="reg-consent-checkbox" />
                    <span className="reg-consent-text">{c.text}</span>
                  </label>
                ))}
              </div>

              <button
                type="button"
                className="reg-submit"
                disabled={loading || !form.gdpr1 || !form.gdpr2}
                onClick={handleSubmit}
              >
                {loading ? (
                  <>
                    <span className="reg-spinner" aria-hidden="true" />
                    Création du compte en cours...
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Créer mon compte ORALIS
                  </>
                )}
              </button>
            </div>
          </div>

          {/* RIGHT: summary panel */}
          <div className="reg-right">
            <div className="reg-summary-card">
              <div className="reg-summary-header">
                <div className="reg-summary-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div>
                  <div className="reg-summary-title">Récapitulatif d'inscription</div>
                  <div className="reg-summary-subtitle">ORALIS CECRL Assessment</div>
                </div>
              </div>

              <div className="reg-summary-items">
                <div className="reg-summary-item">
                  <span className="reg-summary-key">Rôle sélectionné</span>
                  <span className="reg-summary-val">
                    {ROLES.find((r) => r.key === role)?.label}
                  </span>
                </div>
                <div className="reg-summary-item">
                  <span className="reg-summary-key">Niveau actuel</span>
                  <span className="reg-summary-val">{currentLevel}</span>
                </div>
                <div className="reg-summary-item">
                  <span className="reg-summary-key">Niveau visé</span>
                  <span className="reg-summary-val" style={{ color: 'var(--primary)', fontWeight: 700 }}>
                    {targetLevel}
                  </span>
                </div>
              </div>

              <div className="reg-summary-certs">
                <div className="reg-summary-cert-label">Certifications reconnues</div>
                {['DELF/DALF', 'TCF/TEF', 'Cambridge', 'IELTS', 'TOEFL'].map((c) => (
                  <span key={c} className="reg-summary-cert-pill">{c}</span>
                ))}
              </div>

              <div className="reg-summary-secure">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
                <span>Chiffrement AES-256 · Données EU · RGPD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
