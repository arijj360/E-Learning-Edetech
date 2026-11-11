import { useState } from 'react';
import './Settings.css';

const TABS = [
  { key: 'languages', label: 'Langues & Région', icon: 'language' },
  { key: 'notifications', label: 'Notifications & Alertes', icon: 'notifications_active' },
  { key: 'audio', label: 'Audio & Matériel Studio', icon: 'mic', badge: '48 kHz' },
  { key: 'privacy', label: 'Sécurité & Données', icon: 'shield' },
  { key: 'danger', label: 'Zone de Danger', icon: 'warning', isDanger: true },
];

const NOTIFICATIONS = [
  { key: 'trainer', label: 'Retours et annotations du formateur', desc: 'Transmission directe par email et notification instantanée in-app.', icon: 'rate_review', default: true },
  { key: 'ai', label: 'Rapport d\'analyse acoustique IA prêt', desc: 'Alertes push dès l\'évaluation du spectre de pitch, débit syllabique et prosodie.', icon: 'neurology', default: true },
  { key: 'weekly', label: 'Rappels d\'objectifs hebdomadaires de parole', desc: 'Cadence cible : minimum 25 minutes de prise de parole spontanée par jour.', icon: 'timer', default: true },
  { key: 'exam', label: 'Alertes d\'examen blanc simulé', desc: 'Convocation aux simulations d\'entretien synchrone C1/C2 chronométrées.', icon: 'assignment_turned_in', default: false },
  { key: 'institution', label: 'Notifications institutionnelles', desc: 'Informations officielles transmises par votre académie ou centre d\'examen.', icon: 'school', default: true },
];

export default function Settings() {
  const [activeTab, setActiveTab] = useState('languages');
  const [uiLang, setUiLang] = useState('fr');
  const [evalLang, setEvalLang] = useState('fr_dalf');
  const [timezone, setTimezone] = useState('Europe/Paris (UTC+01:00 / CET)');
  const [notifications, setNotifications] = useState(() =>
    Object.fromEntries(NOTIFICATIONS.map((n) => [n.key, n.default]))
  );
  const [micDevice, setMicDevice] = useState('default');
  const [sampleRate, setSampleRate] = useState('48');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const toggleNotif = (key) => {
    setNotifications((p) => ({ ...p, [key]: !p[key] }));
  };

  return (
    <div className="settings-page">
      {saved && (
        <div className="settings-toast" role="status" aria-live="polite">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
          <div>
            <div className="settings-toast-title">Préférences synchronisées</div>
            <div className="settings-toast-sub">Tous les réglages studio et sécurité ont été mis à jour.</div>
          </div>
        </div>
      )}

      {/* Page header */}
      <div className="settings-page-header">
        <div className="settings-bg1" aria-hidden="true" />
        <div className="settings-bg2" aria-hidden="true" />
        <div className="settings-page-header-content">
          <div>
            <div className="settings-eyebrow">
              <span className="settings-eyebrow-pill">SYSTEM ENGINE V4.2</span>
              <span>•</span>
              <span className="settings-eyebrow-label">CEFR C2 VALIDATION NODE</span>
            </div>
            <h1 className="settings-page-title">Paramètres du Compte &amp; Configuration Système</h1>
            <p className="settings-page-desc">
              Gérez vos préférences d'application, notifications, confidentialité et paramètres audio.
            </p>
          </div>
          <div className="settings-status-badge">
            <div className="settings-status-icon">
              <span className="material-symbols-outlined">verified_user</span>
            </div>
            <div>
              <div className="settings-status-label">Statut Rétention RGPD</div>
              <div className="settings-status-val">Chiffrement AES-256 Actif</div>
            </div>
          </div>
        </div>
      </div>

      <div className="settings-workspace">
        {/* Sidebar tabs */}
        <aside className="settings-tabs-col">
          <nav className="settings-tabs">
            {TABS.map((t) => (
              <button key={t.key}
                className={`settings-tab-btn ${activeTab === t.key ? 'settings-tab-btn--active' : ''} ${t.isDanger ? 'settings-tab-btn--danger' : ''}`}
                onClick={() => setActiveTab(t.key)}>
                <div className="settings-tab-btn-left">
                  <span className="material-symbols-outlined settings-tab-icon">{t.icon}</span>
                  <span>{t.label}</span>
                </div>
                <div className="settings-tab-btn-right">
                  {t.badge && <span className="settings-tab-badge">{t.badge}</span>}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </div>
              </button>
            ))}
          </nav>

          {/* Profile mini-card */}
          <div className="settings-profile-mini">
            <div className="settings-profile-mini-avatar">SM</div>
            <div>
              <div className="settings-profile-mini-name">Dr. Sarah Moreau</div>
              <div className="settings-profile-mini-role">Examinatrice C2 Agréée DALF</div>
            </div>
          </div>
          <div className="settings-quota-row">
            <span>Quota vocal mensuel</span>
            <span className="settings-quota-val">18h 40m / 30h</span>
          </div>
          <div className="settings-quota-bar-bg">
            <div className="settings-quota-fill" style={{ width: '62%' }} />
          </div>
        </aside>

        {/* Panel content */}
        <main className="settings-panels">
          {/* Languages tab */}
          {activeTab === 'languages' && (
            <div className="settings-panel animate-fadeIn">
              <div className="settings-panel-card">
                <div className="settings-panel-header">
                  <div>
                    <h2 className="settings-panel-title">Langues &amp; Région</h2>
                    <p className="settings-panel-desc">Définissez vos standards linguistiques d'évaluation.</p>
                  </div>
                  <span className="material-symbols-outlined settings-panel-icon-big">translate</span>
                </div>

                {/* Interface language */}
                <div className="settings-field">
                  <label className="settings-field-label">Langue d'interface applicative</label>
                  <div className="settings-radio-cards">
                    {[{ val: 'fr', name: 'Français (FR)', sub: 'Terminologie standard internationale' },
                      { val: 'en', name: 'English (US/UK)', sub: 'Official Cambridge nomenclature' }
                    ].map((l) => (
                      <label key={l.val}
                        className={`settings-radio-card ${uiLang === l.val ? 'settings-radio-card--active' : ''}`}>
                        <input type="radio" name="uiLang" value={l.val}
                          checked={uiLang === l.val} onChange={() => setUiLang(l.val)} />
                        <div>
                          <div className="settings-radio-card-name">{l.name}</div>
                          <div className="settings-radio-card-sub">{l.sub}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Eval language */}
                <div className="settings-field">
                  <label className="settings-field-label">Langue d'évaluation orale par défaut</label>
                  <div className="settings-select-card">
                    <div className="settings-select-card-left">
                      <div className="settings-select-card-icon">
                        <span className="material-symbols-outlined">record_voice_over</span>
                      </div>
                      <div>
                        <div className="settings-select-card-name">Référentiel d'Examen Principal</div>
                        <div className="settings-select-card-sub">
                          Détermine le moteur d'analyse phonétique et les grilles CECRL appliquées.
                        </div>
                      </div>
                    </div>
                    <select className="settings-select" value={evalLang}
                      onChange={(e) => setEvalLang(e.target.value)}>
                      <option value="fr_dalf">Français — DALF / DELF / TCF (C1-C2)</option>
                      <option value="en_cambridge">English — Cambridge C1 / IELTS Academic 8.5+</option>
                      <option value="en_toefl">English — TOEFL iBT Oral Standard (28-30 pts)</option>
                      <option value="fr_pro">Français — Diplomatie &amp; Affaires Professionnelles</option>
                    </select>
                  </div>
                </div>

                {/* Timezone */}
                <div className="settings-fields-grid">
                  <div className="settings-field">
                    <label className="settings-field-label">Fuseau horaire d'évaluation</label>
                    <div className="settings-select-wrap">
                      <select className="settings-select-full" value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}>
                        <option>Europe/Paris (UTC+01:00 / CET)</option>
                        <option>Europe/London (UTC+00:00 / GMT)</option>
                        <option>America/Montreal (UTC-05:00 / EST)</option>
                        <option>Asia/Tokyo (UTC+09:00 / JST)</option>
                      </select>
                      <span className="material-symbols-outlined settings-select-icon">schedule</span>
                    </div>
                  </div>
                  <div className="settings-field">
                    <label className="settings-field-label">Format d'horodatage audio</label>
                    <div className="settings-select-wrap">
                      <select className="settings-select-full">
                        <option>ISO 8601 (YYYY-MM-DD · HH:mm:ss.ms)</option>
                        <option>Européen (DD/MM/YYYY · 24 heures)</option>
                        <option>Standard SMPTE Broadcast (hh:mm:ss:ff)</option>
                      </select>
                      <span className="material-symbols-outlined settings-select-icon">more_time</span>
                    </div>
                  </div>
                </div>

                <button className="settings-save-btn" onClick={handleSave}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Enregistrer les préférences de langue
                </button>
              </div>
            </div>
          )}

          {/* Notifications tab */}
          {activeTab === 'notifications' && (
            <div className="settings-panel animate-fadeIn">
              <div className="settings-panel-card">
                <div className="settings-panel-header">
                  <div>
                    <h2 className="settings-panel-title">Notifications &amp; Alertes Pédagogiques</h2>
                    <p className="settings-panel-desc">Canalisez les flux d'évaluation IA et les rétroactions des formateurs.</p>
                  </div>
                  <span className="material-symbols-outlined settings-panel-icon-big">notifications_paused</span>
                </div>

                <div className="settings-notif-list">
                  {NOTIFICATIONS.map((n) => (
                    <div key={n.key} className="settings-notif-item">
                      <div className="settings-notif-left">
                        <div className="settings-notif-icon">
                          <span className="material-symbols-outlined">{n.icon}</span>
                        </div>
                        <div>
                          <div className="settings-notif-label">{n.label}</div>
                          <div className="settings-notif-desc">{n.desc}</div>
                        </div>
                      </div>
                      <button
                        className={`settings-toggle ${notifications[n.key] ? 'settings-toggle--on' : ''}`}
                        onClick={() => toggleNotif(n.key)}
                        role="switch"
                        aria-checked={notifications[n.key]}
                        aria-label={n.label}
                      >
                        <div className={`settings-toggle-thumb ${notifications[n.key] ? 'settings-toggle-thumb--on' : ''}`} />
                      </button>
                    </div>
                  ))}
                </div>

                <button className="settings-save-btn" onClick={handleSave}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Enregistrer les préférences de notification
                </button>
              </div>
            </div>
          )}

          {/* Audio tab */}
          {activeTab === 'audio' && (
            <div className="settings-panel animate-fadeIn">
              <div className="settings-panel-card">
                <div className="settings-panel-header">
                  <div>
                    <h2 className="settings-panel-title">Audio &amp; Matériel Studio</h2>
                    <p className="settings-panel-desc">Calibrez l'équipement de capture pour garantir la fidélité de l'analyse phonétique.</p>
                  </div>
                  <span className="material-symbols-outlined settings-panel-icon-big">graphic_eq</span>
                </div>

                <div className="settings-field">
                  <label className="settings-field-label">Microphone principal d'enregistrement</label>
                  <div className="settings-select-wrap">
                    <select className="settings-select-full" value={micDevice}
                      onChange={(e) => setMicDevice(e.target.value)}>
                      <option value="default">Microphone par défaut du système</option>
                      <option value="shure_mv7">Shure MV7 (USB) — Recommandé DALF</option>
                      <option value="blue_yeti">Blue Yeti (Cardioïde Stéréo)</option>
                      <option value="rode_nt1">RØDE NT1-A (XLR — Interface externe)</option>
                      <option value="sony_ecm">Sony ECM-MS2 (Condensateur Portable)</option>
                    </select>
                    <span className="material-symbols-outlined settings-select-icon">mic</span>
                  </div>
                </div>

                <div className="settings-fields-grid">
                  <div className="settings-field">
                    <label className="settings-field-label">Fréquence d'échantillonnage</label>
                    <div className="settings-rate-group">
                      {['44.1', '48', '96'].map((r) => (
                        <label key={r}
                          className={`settings-rate-opt ${sampleRate === r ? 'settings-rate-opt--active' : ''}`}>
                          <input type="radio" name="sampleRate" value={r}
                            checked={sampleRate === r} onChange={() => setSampleRate(r)} />
                          {r} kHz
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="settings-field">
                    <label className="settings-field-label">Profondeur de bits</label>
                    <div className="settings-rate-group">
                      {['16', '24', '32'].map((b) => (
                        <label key={b}
                          className={`settings-rate-opt ${b === '24' ? 'settings-rate-opt--active' : ''}`}>
                          <input type="radio" name="bitDepth" defaultChecked={b === '24'} />
                          {b} bit
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Audio toggles */}
                {[
                  { label: 'Réduction du bruit ambiant (IA)', desc: 'Suppression des bruits de fond pendant la session de pratique.' },
                  { label: 'Normalisation automatique du gain', desc: 'Ajustement continu du volume pour une analyse spectrale optimale.' },
                  { label: 'Monitoring du micro en temps réel', desc: 'Écoute directe du signal entrant pour contrôle de qualité.' },
                ].map((t) => (
                  <div key={t.label} className="settings-notif-item">
                    <div className="settings-notif-left">
                      <div>
                        <div className="settings-notif-label">{t.label}</div>
                        <div className="settings-notif-desc">{t.desc}</div>
                      </div>
                    </div>
                    <button className="settings-toggle settings-toggle--on" role="switch" aria-checked="true">
                      <div className="settings-toggle-thumb settings-toggle-thumb--on" />
                    </button>
                  </div>
                ))}

                <button className="settings-save-btn" onClick={handleSave}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Enregistrer la configuration audio
                </button>
              </div>
            </div>
          )}

          {/* Privacy tab */}
          {activeTab === 'privacy' && (
            <div className="settings-panel animate-fadeIn">
              <div className="settings-panel-card">
                <div className="settings-panel-header">
                  <div>
                    <h2 className="settings-panel-title">Sécurité &amp; Données</h2>
                    <p className="settings-panel-desc">Gérez vos données personnelles et les droits d'accès conformément au RGPD.</p>
                  </div>
                  <span className="material-symbols-outlined settings-panel-icon-big">shield</span>
                </div>

                <div className="settings-privacy-grid">
                  {[
                    { icon: 'download', label: 'Exporter mes données', desc: 'Télécharger l\'intégralité de vos enregistrements, scores et profil (RGPD Art. 20).', action: 'Générer l\'archive ZIP', color: 'primary' },
                    { icon: 'delete_forever', label: 'Supprimer les enregistrements', desc: 'Supprimer définitivement vos fichiers audio de nos serveurs EU.', action: 'Demander la suppression', color: 'danger' },
                    { icon: 'lock_reset', label: 'Révoquer l\'accès SSO', desc: 'Déconnecter la liaison Keycloak et l\'authentification institutionnelle.', action: 'Révoquer les tokens', color: 'warning' },
                    { icon: 'history', label: 'Journaux d\'activité', desc: 'Consulter le registre complet de vos connexions et actions sur la plateforme.', action: 'Voir les logs', color: 'secondary' },
                  ].map((p) => (
                    <div key={p.label} className="settings-privacy-card">
                      <span className={`material-symbols-outlined settings-privacy-icon settings-privacy-icon--${p.color}`}>
                        {p.icon}
                      </span>
                      <div className="settings-privacy-label">{p.label}</div>
                      <div className="settings-privacy-desc">{p.desc}</div>
                      <button className={`settings-privacy-action settings-privacy-action--${p.color}`}>
                        {p.action}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Danger tab */}
          {activeTab === 'danger' && (
            <div className="settings-panel animate-fadeIn">
              <div className="settings-panel-card settings-panel-card--danger">
                <div className="settings-panel-header">
                  <div>
                    <h2 className="settings-panel-title settings-panel-title--danger">Zone de Danger</h2>
                    <p className="settings-panel-desc">Ces actions sont irréversibles. Procédez avec prudence.</p>
                  </div>
                  <span className="material-symbols-outlined settings-panel-icon-big" style={{ color: 'var(--error)' }}>warning</span>
                </div>

                {[
                  {
                    title: 'Désactiver le compte temporairement',
                    desc: 'Suspendre votre accès à ORALIS. Vos données restent conservées.',
                    btnLabel: 'Désactiver le compte',
                    danger: false,
                  },
                  {
                    title: 'Supprimer définitivement le compte',
                    desc: 'Suppression complète et irréversible de votre compte, enregistrements, scores et certifications.',
                    btnLabel: 'Supprimer définitivement',
                    danger: true,
                  },
                ].map((d) => (
                  <div key={d.title} className={`settings-danger-item ${d.danger ? 'settings-danger-item--critical' : ''}`}>
                    <div>
                      <div className="settings-danger-title">{d.title}</div>
                      <div className="settings-danger-desc">{d.desc}</div>
                    </div>
                    <button className={`settings-danger-btn ${d.danger ? 'settings-danger-btn--critical' : ''}`}>
                      {d.btnLabel}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
