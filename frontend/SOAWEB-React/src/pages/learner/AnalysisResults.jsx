import { useNavigate } from 'react-router-dom';
import { mockAnalysisResult } from '../../services/api';
import './AnalysisResults.css';

const scoreColor = (s) => {
  if (s >= 88) return 'primary';
  if (s >= 80) return 'success';
  return 'warning';
};

export default function AnalysisResults() {
  const navigate = useNavigate();
  const r = mockAnalysisResult;

  const WAVEFORM = [6, 10, 14, 8, 16, 12, 7, 14, 2, 2, 11, 16, 12, /* playhead */ 16, 14, 9, 5, 12, 15, 8, 14, 16, 10, 6, 13, 16, 11, 7, 14, 15, 10, 6, 4, 12, 14];

  return (
    <div className="anal-page">
      {/* Header */}
      <div className="anal-header">
        <div className="anal-header-bg" aria-hidden="true" />
        <div className="anal-header-content">
          <div>
            <div className="anal-header-tags">
              <span className="anal-tag anal-tag--cefr">{r.exam}</span>
              <span className="anal-tag">Session #{r.sessionId}</span>
              <span className="anal-meta">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
                {r.date}
              </span>
              <span className="anal-meta">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                </svg>
                {r.duration} min
              </span>
            </div>
            <h1 className="anal-header-title">{r.topic}</h1>
            <p className="anal-header-sub">
              Évaluation automatisée par l'Analysis Engine v4.2 couplé au modèle acoustique CECRL certifié.
            </p>
          </div>

          {/* Score dial */}
          <div className="anal-score-block">
            <div className="anal-score-dial-wrapper">
              <div className="anal-score-dial">
                <svg viewBox="0 0 36 36" className="anal-dial-svg">
                  <path className="anal-dial-track"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke="currentColor" strokeWidth="3.5" />
                  <path className="anal-dial-progress"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke="currentColor"
                    strokeDasharray={`${r.overallScore}, 100`}
                    strokeLinecap="round" strokeWidth="3.5" />
                </svg>
                <div className="anal-dial-label">
                  <span className="anal-dial-score">{r.overallScore}</span>
                  <span className="anal-dial-denom">/100</span>
                </div>
              </div>
              <div>
                <div className="anal-cefr-row">
                  <span className="anal-cefr-label">Niveau CECRL</span>
                  <span className="anal-cefr-pill">{r.cefrLevel}</span>
                </div>
                <div className="anal-cefr-sub">Aptitude confirmée</div>
                <div className="anal-percentile">Percentile: {r.percentile}e supérieur</div>
              </div>
            </div>
            <div className="anal-export-btns">
              <button className="anal-export-btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                </svg>
                Partager
              </button>
              <button className="anal-export-btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                Rapport PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trainer pending */}
      <div className="anal-trainer-banner">
        <div className="anal-trainer-left">
          <div className="anal-trainer-icon">
            <span className="material-symbols-outlined">pending_actions</span>
          </div>
          <div>
            <div className="anal-trainer-title-row">
              <span className="anal-trainer-title">Attestation &amp; Validation Formateur</span>
              <span className="anal-trainer-status">En attente</span>
            </div>
            <p className="anal-trainer-desc">
              Assigné à <strong>Marc V. (Examinateur habilité CIEP/FEI)</strong>. Temps moyen de retour estimé : 6h ouvrées.
            </p>
          </div>
        </div>
        <button className="anal-trainer-action">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
          Demander une révision prioritaire
        </button>
      </div>

      {/* Audio player */}
      <div className="anal-player-card">
        <div className="anal-player-header">
          <div className="anal-player-title-row">
            <div className="anal-player-icon">
              <span className="material-symbols-outlined">graphic_eq</span>
            </div>
            <div>
              <h3 className="anal-player-title">Lecteur Acoustique Synchronisé</h3>
              <span className="anal-player-sub">Piste originale • Analyse spectrale 48 kHz / 24-bit</span>
            </div>
          </div>
          <div className="anal-player-controls-right">
            <div className="anal-speed-group">
              {['0.8x', '1.0x', '1.2x'].map((s) => (
                <button key={s}
                  className={`anal-speed-btn ${s === '1.0x' ? 'anal-speed-btn--active' : ''}`}>
                  {s}
                </button>
              ))}
            </div>
            <button className="anal-player-icon-btn" title="Réduction du bruit">
              <span className="material-symbols-outlined">noise_aware</span>
            </button>
            <button className="anal-player-icon-btn" title="Boucle">
              <span className="material-symbols-outlined">repeat</span>
            </button>
          </div>
        </div>

        {/* Waveform */}
        <div className="anal-waveform-container">
          <div className="anal-waveform-times">
            <span>01:14 (Segment actif)</span>
            <span className="anal-waveform-error">Erreur de liaison détectée à 01:21</span>
            <span>04:32</span>
          </div>
          <div className="anal-waveform">
            {WAVEFORM.map((h, i) => {
              const isPlayed = i < 13;
              const isPlayhead = i === 13;
              const isPause = i === 8 || i === 9;
              let cls = 'anal-wave-bar--future';
              if (isPlayhead) cls = 'anal-wave-bar--playhead';
              else if (isPause) cls = 'anal-wave-bar--pause';
              else if (isPlayed) cls = 'anal-wave-bar--played';
              return (
                <div key={i} className={`anal-wave-bar ${cls}`} style={{ height: `${h * 5}px` }}
                  title={isPause ? 'Pause 1.9s' : undefined} />
              );
            })}
          </div>
          <div className="anal-waveform-legend">
            <span><span className="anal-legend-dot" style={{ background: 'var(--primary)' }} /> Phonétique fluide</span>
            <span><span className="anal-legend-dot" style={{ background: '#f59e0b' }} /> Pause marquée (&gt;1.8s)</span>
            <span><span className="anal-legend-dot" style={{ background: 'var(--error)' }} /> Anomalie / liaison</span>
          </div>
        </div>

        {/* Player controls */}
        <div className="anal-player-bottom">
          <div className="anal-player-btns">
            <button className="anal-player-ctrl-btn" aria-label="Reculer 10s">
              <span className="material-symbols-outlined">replay_10</span>
            </button>
            <button className="anal-play-btn" aria-label="Lecture / Pause">
              <span className="material-symbols-outlined">play_arrow</span>
            </button>
            <button className="anal-player-ctrl-btn" aria-label="Avancer 10s">
              <span className="material-symbols-outlined">forward_10</span>
            </button>
            <span className="anal-time-display">01:14</span>
            <span className="anal-time-total">/ 04:32</span>
          </div>
          <div className="anal-volume">
            <span className="material-symbols-outlined">volume_up</span>
            <div className="anal-vol-bar">
              <div className="anal-vol-fill" style={{ width: '75%' }} />
            </div>
            <button className="anal-segment-btn">
              <span className="material-symbols-outlined">bookmark_add</span>
              Segmenter
            </button>
          </div>
        </div>
      </div>

      {/* 6 Criteria grid */}
      <div className="anal-criteria-section">
        <div className="anal-criteria-header">
          <div>
            <span className="anal-criteria-eyebrow">Grille Officielle Cadre Européen</span>
            <h2 className="anal-criteria-title">6 Critères d'Excellence Évalués</h2>
          </div>
          <p className="anal-criteria-threshold">
            Seuil de maîtrise C1 validé à ≥ 75/100 sur l'ensemble des composantes d'expression autonome.
          </p>
        </div>

        <div className="anal-criteria-grid">
          {r.criteria.map((c) => {
            const color = scoreColor(c.score);
            return (
              <div key={c.id} className="anal-criterion-card">
                <div className="anal-criterion-top">
                  <div className="anal-criterion-left">
                    <div className={`anal-criterion-icon anal-criterion-icon--${color}`}>
                      <span className="material-symbols-outlined">{c.icon}</span>
                    </div>
                    <div>
                      <h4 className="anal-criterion-name">{c.id}. {c.name}</h4>
                      <span className="anal-criterion-sub">{c.subtitle}</span>
                    </div>
                  </div>
                  <div className="anal-criterion-score">
                    <span className={`anal-criterion-score-val anal-criterion-score-val--${color}`}>
                      {c.score}
                    </span>
                    <span className="anal-criterion-score-denom">/100</span>
                  </div>
                </div>

                <div className="anal-criterion-bar-bg">
                  <div
                    className={`anal-criterion-bar anal-criterion-bar--${color}`}
                    style={{ width: `${c.score}%` }}
                  />
                </div>

                <div className="anal-criterion-notes">
                  {c.strengths?.map((s, i) => (
                    <div key={i} className="anal-criterion-note anal-criterion-note--strength">
                      <span className="material-symbols-outlined">check_circle</span>
                      <span><strong>Point fort :</strong> {s}</span>
                    </div>
                  ))}
                  {c.warnings?.map((w, i) => (
                    <div key={i} className="anal-criterion-note anal-criterion-note--warning">
                      <span className="material-symbols-outlined">warning</span>
                      <span><strong>Vigilance :</strong> {w}</span>
                    </div>
                  ))}
                  {c.wpm && (
                    <div className="anal-fluency-stats">
                      <div className="anal-fluency-stat">
                        <span>Débit moyen</span>
                        <span className="anal-fluency-val">{c.wpm}</span>
                        <span>mots/min</span>
                      </div>
                      <div className="anal-fluency-stat">
                        <span>Micro-pauses</span>
                        <span className="anal-fluency-val">{c.pauses}</span>
                        <span>&gt;1.5s détectées</span>
                      </div>
                    </div>
                  )}
                  {c.note && !c.wpm && (
                    <p className="anal-criterion-plain-note">{c.note}</p>
                  )}
                  {c.note && c.wpm && (
                    <p className="anal-criterion-plain-note">{c.note}</p>
                  )}
                </div>

                <div className="anal-criterion-footer">
                  <button className="anal-criterion-link">
                    {c.wpm ? 'Rapport de vélocité vocale' : 'Voir spectres acoustiques'}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Practice again CTA */}
        <div className="anal-cta-row">
          <button className="anal-cta-secondary" onClick={() => navigate('/learner/practice')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
            </svg>
            Nouvelle session de pratique
          </button>
          <button className="anal-cta-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            Voir les exercices recommandés
          </button>
        </div>
      </div>
    </div>
  );
}
