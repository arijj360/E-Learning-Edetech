import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { mockCefrScores, mockWeeklyActivity } from '../../services/api';
import './LearnerDashboard.css';

const CRITERIA = [
  { key: 'pronunciation', label: 'Prononciation', icon: 'record_voice_over', note: 'Voyelles nasales limpides, friction mineure sur liaisons sourdes.', color: 'primary' },
  { key: 'fluency', label: 'Fluidité & Débit', icon: 'waves', note: 'Débit fluide (142 wpm), pauses d\'hésitation lexicales réduites.', color: 'warning' },
  { key: 'intonation', label: 'Intonation & Prosodie', icon: 'timeline', note: 'Courbes interrogatives et emphase rhétorique bien dosées.', color: 'primary' },
  { key: 'vocabulary', label: 'Vocabulaire & Registre', icon: 'spellcheck', note: 'Richesse lexicale C2 remarquable, registre académique soutenu.', color: 'success' },
  { key: 'grammar', label: 'Morphosyntaxe', icon: 'format_quote', note: 'Maîtrise du subjonctif imparfait et des tournures passives complexes.', color: 'primary' },
  { key: 'coherence', label: 'Cohérence du Discours', icon: 'account_tree', note: 'Connecteurs logiques efficaces, conclusions parfois un peu abruptes.', color: 'warning' },
];

const STAT_CARDS = (user) => [
  {
    label: 'Entraînements',
    value: '42',
    suffix: '',
    badge: '+14%',
    badgeColor: 'success',
    note: 'Sessions orales complétées ce mois',
    footer: { label: 'Rythme recommandé :', value: '5 sessions / sem.' },
    iconBg: 'primary-fixed',
    icon: 'record_voice_over',
  },
  {
    label: 'Score Global',
    value: `${user?.score ?? 86}`,
    suffix: '/100',
    badge: 'Excellent',
    badgeColor: 'success',
    note: '+4.2 pts depuis le bilan initial B2',
    footer: { label: 'Seuil requis C2 :', value: '80/100' },
    iconBg: 'emerald',
    icon: 'speed',
  },
  {
    label: 'Temps de parole',
    value: user?.speakingTime ?? '18h 45m',
    suffix: '',
    badge: '',
    badgeColor: '',
    note: '2h 15m cette semaine',
    footer: { label: 'Rapport monologue/débat :', value: '62% / 38%' },
    iconBg: 'secondary',
    icon: 'graphic_eq',
  },
  {
    label: 'Maîtrise CECRL',
    value: `${user?.cefrLevel ?? 'C1'}+`,
    suffix: '',
    badge: `Cible DALF ${user?.targetLevel ?? 'C2'}`,
    badgeColor: 'warning',
    note: 'Niveau autonome avancé certifiable',
    footer: { label: 'Prochaine simulation :', value: 'Demain 10:00' },
    iconBg: 'warning',
    icon: 'workspace_premium',
  },
];

export default function LearnerDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const stats = STAT_CARDS(user);
  const maxActivity = Math.max(...mockWeeklyActivity.map((d) => d.minutes), 1);

  return (
    <div className="dash-page">
      {/* Welcome banner */}
      <div className="dash-banner">
        <div className="dash-banner-bg1" aria-hidden="true" />
        <div className="dash-banner-bg2" aria-hidden="true" />
        <div className="dash-banner-inner">
          <div className="dash-banner-left">
            <div className="dash-banner-tags">
              <span className="dash-banner-tag">
                <span className="dash-banner-tag-dot" />
                Niveau actuel : {user?.cefrLevel} Acquis
              </span>
              <span className="dash-banner-tag dash-banner-tag--solid">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"/>
                </svg>
                Objectif DALF {user?.targetLevel}
              </span>
              <span className="dash-banner-tag dash-banner-tag--light">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                </svg>
                Échéance dans 45 jours ({user?.examDate})
              </span>
            </div>
            <h1 className="dash-banner-title">
              Bonjour, {user?.firstName} {user?.lastName}
            </h1>
            <p className="dash-banner-desc">
              Votre diction gagne en souplesse et votre débit spontané s'est stabilisé à 142 mots/min.
              Deux points d'inflexion restent à affiner avant la passation du DALF {user?.targetLevel}.
            </p>
          </div>

          {/* Progress dial */}
          <div className="dash-banner-right">
            <div className="dash-progress-dial" aria-label="78% de préparation">
              <svg viewBox="0 0 100 100" className="dash-dial-svg">
                <circle cx="50" cy="50" r="42" fill="transparent"
                  stroke="rgba(255,255,255,0.2)" strokeWidth="8" />
                <circle cx="50" cy="50" r="42" fill="transparent"
                  stroke="#ffffff" strokeDasharray="263.89" strokeDashoffset="58"
                  strokeLinecap="round" strokeWidth="8"
                  style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }} />
              </svg>
              <div className="dash-dial-label">
                <span className="dash-dial-pct">78%</span>
                <span className="dash-dial-sub">Prépa</span>
              </div>
            </div>
            <div className="dash-progress-info">
              <div className="dash-progress-title">Passation DALF {user?.targetLevel}</div>
              <div className="dash-progress-note">31/40 modules oraux validés</div>
              <button
                className="dash-launch-btn"
                onClick={() => navigate('/learner/practice')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                </svg>
                Lancer une simulation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trainer feedback */}
      <div className="dash-feedback-banner">
        <div className="dash-feedback-avatar">
          <span className="dash-feedback-avatar-text">MV</span>
          <span className="dash-feedback-online" aria-hidden="true" />
        </div>
        <div className="dash-feedback-content">
          <div className="dash-feedback-top">
            <span className="dash-feedback-name">Formateur Marc V.</span>
            <span className="dash-feedback-meta">• Session : Débat Géopolitique (Hier 16:40)</span>
            <span className="dash-feedback-validated">Validé formateur</span>
          </div>
          <p className="dash-feedback-quote">
            « Remarquable maîtrise de l'argumentation contradictoire, {user?.firstName}. Attention
            toutefois à ne pas escamoter les liaisons en [z] sur les pluriels complexes. »
          </p>
        </div>
        <div className="dash-feedback-actions">
          <button className="dash-feedback-btn-secondary">Écouter l'annotation vocale</button>
          <button className="dash-feedback-close" aria-label="Fermer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Quick stats */}
      <div className="dash-stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="dash-stat-card">
            <div className="dash-stat-top">
              <span className="dash-stat-label">{s.label}</span>
              <div className={`dash-stat-icon dash-stat-icon--${s.iconBg}`} aria-hidden="true">
                <span className="material-symbols-outlined">{s.icon}</span>
              </div>
            </div>
            <div className="dash-stat-value-row">
              <span className="dash-stat-value">
                {s.value}
                {s.suffix && <span className="dash-stat-suffix">{s.suffix}</span>}
              </span>
              {s.badge && (
                <span className={`dash-stat-badge dash-stat-badge--${s.badgeColor}`}>
                  {s.badge}
                </span>
              )}
            </div>
            <p className="dash-stat-note">{s.note}</p>
            <div className="dash-stat-footer">
              <span>{s.footer.label}</span>
              <span className="dash-stat-footer-val">{s.footer.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main content grid */}
      <div className="dash-main-grid">
        {/* CEFR Criteria */}
        <div className="dash-criteria-card">
          <div className="dash-criteria-header">
            <div>
              <div className="dash-criteria-title-row">
                <h2 className="dash-criteria-title">Évaluation CECRL : 6 Critères</h2>
                <span className="dash-criteria-badge">Référentiel C1/C2</span>
              </div>
              <p className="dash-criteria-sub">
                Analysé par phonologie computationnelle &amp; double regard formateur
              </p>
            </div>
            <button
              className="dash-criteria-link"
              onClick={() => navigate('/learner/analysis')}
            >
              Rapport détaillé
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </button>
          </div>

          <div className="dash-criteria-grid">
            {CRITERIA.map((c) => {
              const score = mockCefrScores[c.key];
              return (
                <div key={c.key} className="dash-criterion">
                  <div className="dash-criterion-row">
                    <span className={`dash-criterion-label dash-criterion-label--${c.color}`}>
                      <span className="material-symbols-outlined">{c.icon}</span>
                      {c.label}
                    </span>
                    <span className={`dash-criterion-score dash-criterion-score--${c.color}`}>
                      {score}%
                    </span>
                  </div>
                  <div className="dash-criterion-bar-bg">
                    <div
                      className={`dash-criterion-bar dash-criterion-bar--${c.color}`}
                      style={{ width: `${score}%` }}
                    />
                  </div>
                  <p className="dash-criterion-note">{c.note}</p>
                </div>
              );
            })}
          </div>

          <div className="dash-criteria-footer">
            <div className="dash-criteria-footer-left">
              <span className="dash-criteria-footer-dot" />
              5 critères sur 6 atteignent le palier d'excellence C1/C2
            </div>
            <span className="dash-criteria-footer-right">Calibration IA v4.8</span>
          </div>
        </div>

        {/* Weekly activity */}
        <div className="dash-activity-card">
          <div className="dash-activity-header">
            <div>
              <h2 className="dash-activity-title">Activité Vocale Hebdomadaire</h2>
              <p className="dash-activity-sub">Temps de parole quotidien vs objectif de 25 min</p>
            </div>
            <span className="dash-activity-week">Semaine 16</span>
          </div>

          <div className="dash-bar-chart">
            {mockWeeklyActivity.map((d) => {
              const height = d.minutes > 0 ? Math.max((d.minutes / maxActivity) * 100, 4) : 4;
              return (
                <div key={d.day} className="dash-bar-col" title={`${d.day}: ${d.minutes} min`}>
                  <div className="dash-bar-tooltip">{d.minutes}m</div>
                  <div
                    className={`dash-bar ${d.minutes >= d.target ? 'dash-bar--ok' : 'dash-bar--dim'}`}
                    style={{ height: `${height}%` }}
                  />
                  <span className="dash-bar-day">{d.day}</span>
                </div>
              );
            })}
          </div>

          {/* Target line legend */}
          <div className="dash-chart-legend">
            <div className="dash-legend-item">
              <span className="dash-legend-dot dash-legend-dot--primary" />
              <span>Temps de parole</span>
            </div>
            <div className="dash-legend-item">
              <span className="dash-legend-line" />
              <span>Objectif 25 min</span>
            </div>
          </div>

          {/* Recent sessions */}
          <div className="dash-recent">
            <div className="dash-recent-title">Sessions récentes</div>
            {[
              { date: 'Hier 16:40', label: 'Débat Géopolitique', score: 87, level: 'C1' },
              { date: 'Jeu 09:15', label: 'Synthèse IA & éducation', score: 84, level: 'C1' },
              { date: 'Mar 14:00', label: 'Monologue diplomatie culturelle', score: 81, level: 'B2' },
            ].map((s) => (
              <div key={s.date} className="dash-recent-item">
                <div>
                  <div className="dash-recent-label">{s.label}</div>
                  <div className="dash-recent-date">{s.date}</div>
                </div>
                <div className="dash-recent-right">
                  <span className="dash-recent-score">{s.score}/100</span>
                  <span className="dash-recent-level">{s.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
