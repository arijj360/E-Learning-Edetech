import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Practice.css';

const WAVEFORM_BARS = 36;

export default function Practice() {
  const navigate = useNavigate();
  const [recording, setRecording] = useState(false);
  const [paused, setPaused] = useState(false);
  const [elapsed, setElapsed] = useState(0); // seconds
  const [bars, setBars] = useState(Array(WAVEFORM_BARS).fill(8));
  const [level, setLevel] = useState('C1');
  const [format, setFormat] = useState('opinion');
  const [lang, setLang] = useState('Français');
  const [transcript, setTranscript] = useState(
    '« ...Il convient en premier lieu de souligner que l\'avènement des modèles de langage massifs dans le paysage universitaire ne constitue pas une simple rupture instrumentale, mais bien une reconfiguration épistémologique majeure. D\'une part, on peut légitimement craindre une atrophie des compétences herméneutiques si l\'étudiant délègue systématiquement le travail de problématisation critique à l\'algorithme... »'
  );

  const timerRef = useRef(null);
  const animRef = useRef(null);
  const maxDuration = 300; // 5 min

  const fmtTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  const animateBars = () => {
    setBars(
      Array.from({ length: WAVEFORM_BARS }, (_, i) => {
        // Last 8 bars pulse (live recording zone)
        if (i >= WAVEFORM_BARS - 8) {
          return 8 + Math.random() * 56;
        }
        // Past bars: filled
        if (i < Math.floor((elapsed / maxDuration) * (WAVEFORM_BARS - 8))) {
          return 20 + Math.random() * 60;
        }
        // Future bars: low
        return 4 + Math.random() * 12;
      })
    );
  };

  useEffect(() => {
    if (recording && !paused) {
      timerRef.current = setInterval(() => {
        setElapsed((v) => Math.min(v + 1, maxDuration));
      }, 1000);
      animRef.current = setInterval(animateBars, 100);
    } else {
      clearInterval(timerRef.current);
      clearInterval(animRef.current);
    }
    return () => {
      clearInterval(timerRef.current);
      clearInterval(animRef.current);
    };
  }, [recording, paused, elapsed]);

  const handleRecord = () => {
    if (!recording) {
      setRecording(true);
      setPaused(false);
      setElapsed(0);
    } else {
      // Stop
      setRecording(false);
      setPaused(false);
    }
  };

  const handlePause = () => setPaused((v) => !v);

  const handleSubmit = () => {
    navigate('/learner/analysis');
  };

  const handleRestart = () => {
    setRecording(false);
    setPaused(false);
    setElapsed(0);
    setBars(Array(WAVEFORM_BARS).fill(8));
  };

  const progress = (elapsed / maxDuration) * 100;

  return (
    <div className="prac-page">
      {/* Config bar */}
      <div className="prac-config-bar">
        <div className="prac-config-left">
          {/* Language */}
          <div className="prac-config-group">
            <span className="material-symbols-outlined prac-config-icon">translate</span>
            <span className="prac-config-label">Langue :</span>
            {['Français', 'English'].map((l) => (
              <button key={l}
                className={`prac-config-btn ${lang === l ? 'prac-config-btn--active' : ''}`}
                onClick={() => setLang(l)}>
                {l}
              </button>
            ))}
          </div>

          {/* CEFR level */}
          <div className="prac-config-group">
            <span className="material-symbols-outlined prac-config-icon">military_tech</span>
            <span className="prac-config-label">Niveau CECRL :</span>
            {['B1', 'B2', 'C1', 'C2'].map((l) => (
              <button key={l}
                className={`prac-level-btn ${level === l ? 'prac-level-btn--active' : ''}`}
                onClick={() => setLevel(l)}>
                {l}
              </button>
            ))}
          </div>

          {/* Format */}
          <div className="prac-config-group">
            <span className="material-symbols-outlined prac-config-icon">category</span>
            <span className="prac-config-label">Format :</span>
            <select className="prac-format-select"
              value={format} onChange={(e) => setFormat(e.target.value)}>
              <option value="opinion">Expression d'opinion & argumentation</option>
              <option value="synthese">Synthèse critique de documents</option>
              <option value="monologue">Monologue suivi et problématisé</option>
              <option value="interaction">Interaction formelle & débat contradictoire</option>
            </select>
          </div>
        </div>

        <div className="prac-config-right">
          <span className="prac-mic-status">
            <span className="prac-mic-dot" />
            Micro calibré : USB
          </span>
          <button className="prac-settings-btn" aria-label="Paramètres audio">
            <span className="material-symbols-outlined">tune</span>
          </button>
        </div>
      </div>

      {/* Main grid */}
      <div className="prac-grid">
        {/* LEFT: Prompt + Console */}
        <div className="prac-left">
          {/* Prompt box */}
          <div className="prac-prompt-card">
            <div className="prac-prompt-top">
              <div className="prac-prompt-badges">
                <span className="prac-prompt-exam">Épreuve DALF {level}</span>
                <span className="prac-prompt-session">Session #2024-{level}-09B</span>
              </div>
              <div className="prac-timers">
                <div className="prac-timer-pill prac-timer-pill--warning">
                  <span className="material-symbols-outlined">hourglass_top</span>
                  Prépa restant :
                  <span className="prac-timer-val">02:45</span>
                </div>
                <div className="prac-timer-pill">
                  <span className="material-symbols-outlined">timer</span>
                  Durée allouée :
                  <span className="prac-timer-val">05:00 max</span>
                </div>
              </div>
            </div>

            <h1 className="prac-prompt-title">
              L'impact de l'intelligence artificielle sur l'enseignement supérieur et le
              développement de la pensée critique
            </h1>
            <p className="prac-prompt-desc">
              À partir de votre expérience et de vos réflexions sociétales, présentez un exposé
              structuré (thèse, antithèse, synthèse prospective). Vous veillerez à nuancer votre
              propos, à mobiliser des connecteurs logiques de niveau {level}, et à formuler une
              problématique claire.
            </p>

            <div className="prac-prompt-directives">
              {[
                { icon: 'schema', label: 'Structure Attendue', desc: 'Introduction, 2 parties équilibrées, conclusion ouverte.' },
                { icon: 'menu_book', label: 'Richesse Lexicale', desc: 'Vocabulaire abstrait, figures de style, registre soutenu.' },
                { icon: 'record_voice_over', label: 'Prosodie & Aisance', desc: 'Débit régulier (120-140 mots/min), intonation expressive.' },
              ].map((d) => (
                <div key={d.label} className="prac-directive">
                  <span className="material-symbols-outlined prac-directive-icon">{d.icon}</span>
                  <div>
                    <div className="prac-directive-label">{d.label}</div>
                    <div className="prac-directive-desc">{d.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recording console */}
          <div className="prac-console">
            <div className="prac-console-bg1" aria-hidden="true" />
            <div className="prac-console-bg2" aria-hidden="true" />

            {/* Console header */}
            <div className="prac-console-header">
              <div className="prac-console-status">
                <div className={`prac-status-pill ${recording && !paused ? 'prac-status-pill--live' : ''}`}>
                  <span className={`prac-status-dot ${recording && !paused ? 'prac-status-dot--live' : ''}`} />
                  {recording && !paused ? 'Enregistrement en direct' : recording && paused ? 'En pause' : 'Prêt'}
                </div>
                <span className="prac-console-info">Échantillonnage 48.0 kHz • Stéréo</span>
              </div>
              {/* VU Meter */}
              <div className="prac-vu-meter">
                <span className="material-symbols-outlined prac-vu-icon">graphic_eq</span>
                <span className="prac-vu-label">NIVEAU</span>
                <div className="prac-vu-bar-bg">
                  <div className={`prac-vu-bar-fill ${recording && !paused ? 'prac-vu-bar-fill--live' : ''}`}
                    style={{ width: recording && !paused ? '65%' : '10%' }} />
                  <div className="prac-vu-bar-peak" style={{ width: recording && !paused ? '15%' : '0' }} />
                </div>
                <span className="prac-vu-db">{recording && !paused ? '-12.4' : '-∞'} dB</span>
              </div>
            </div>

            {/* Waveform visualizer */}
            <div className="prac-waveform-container">
              <div className="prac-waveform-times">
                <span>00:00</span>
                <span>CANAL GAUCHE / DROITE • SPECTRE VOCAL</span>
                <span>05:00</span>
              </div>
              <div className="prac-waveform" aria-label="Visualisation de la forme d'onde">
                {bars.map((h, i) => {
                  const isLive = i >= WAVEFORM_BARS - 8;
                  const isPast = i < Math.floor((elapsed / maxDuration) * (WAVEFORM_BARS - 8));
                  let colorClass = 'prac-wave-bar--future';
                  if (isLive && recording && !paused) colorClass = 'prac-wave-bar--live';
                  else if (isPast) colorClass = 'prac-wave-bar--past';
                  return (
                    <span key={i}
                      className={`prac-wave-bar ${colorClass} ${isLive && recording && !paused ? 'wave-bar' : ''}`}
                      style={{ height: `${Math.min(h, 96)}px` }}
                    />
                  );
                })}
              </div>
              {/* Scrubber */}
              <div className="prac-scrubber">
                <div className="prac-scrubber-fill" style={{ width: `${progress}%` }} />
              </div>
            </div>

            {/* Controls */}
            <div className="prac-controls">
              {/* Timer */}
              <div className="prac-timer-display">
                <div className="prac-timer-icon">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <span className="prac-timer-label">Chronomètre de prise</span>
                  <div className="prac-timer-row">
                    <span className="prac-timer-main">{fmtTime(elapsed)}</span>
                    <span className="prac-timer-total">/ 05:00</span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="prac-btn-group">
                {/* Pause */}
                <button
                  className="prac-btn-secondary prac-btn-round"
                  onClick={handlePause}
                  disabled={!recording}
                  aria-label={paused ? 'Reprendre' : 'Pause'}
                  title={paused ? 'Reprendre' : 'Mettre en pause'}
                >
                  <span className="material-symbols-outlined">
                    {paused ? 'play_arrow' : 'pause'}
                  </span>
                </button>

                {/* Record / Stop */}
                <button
                  className={`prac-btn-record ${recording ? 'prac-btn-record--stop' : ''}`}
                  onClick={handleRecord}
                  aria-label={recording ? 'Arrêter l\'enregistrement' : 'Démarrer l\'enregistrement'}
                >
                  {recording && <span className="prac-record-ping" aria-hidden="true" />}
                  <span className="material-symbols-outlined">
                    {recording ? 'stop' : 'mic'}
                  </span>
                </button>

                {/* Validate take */}
                <button
                  className="prac-btn-secondary prac-btn-round prac-btn-validate"
                  disabled={!recording && elapsed === 0}
                  onClick={handleSubmit}
                  title="Valider cette prise"
                  aria-label="Valider cette prise"
                >
                  <span className="material-symbols-outlined">done_all</span>
                </button>
              </div>

              {/* Playback controls */}
              <div className="prac-playback">
                <button className="prac-playback-btn" aria-label="Réécouter" title="Écouter l'enregistrement">
                  <span className="material-symbols-outlined">play_arrow</span>
                </button>
                <div className="prac-speed-btns">
                  <button className="prac-speed-btn prac-speed-btn--active">1.0x</button>
                  <button className="prac-speed-btn">1.25x</button>
                </div>
                <button className="prac-playback-btn" aria-label="Télécharger l'audio" title="Télécharger l'audio (WAV)">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            </div>

            {/* Live transcript */}
            <div className="prac-transcript">
              <div className="prac-transcript-header">
                <div className="prac-transcript-title-row">
                  <span className="material-symbols-outlined prac-transcript-icon">subtitles</span>
                  <span className="prac-transcript-title">
                    Transcription IA continue ({lang} DALF {level})
                  </span>
                </div>
                {recording && !paused && (
                  <span className="prac-confidence">
                    <span className="prac-confidence-dot" />
                    Confiance phonétique : 94.8%
                  </span>
                )}
              </div>
              <div className="prac-transcript-body">
                <p>{transcript}</p>
                {recording && !paused && (
                  <p className="prac-transcript-typing">
                    <span className="prac-typing-dot" />
                    « ...Toutefois, lorsqu'elle est appréhendée comme un sparring-partner
                    socratique... »
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Action bar */}
          <div className="prac-action-bar">
            <div className="prac-action-left">
              <button className="prac-action-btn-secondary" onClick={handleRestart}>
                <span className="material-symbols-outlined">replay</span>
                Recommencer l'enregistrement
              </button>
              <button className="prac-action-btn-secondary">
                <span className="material-symbols-outlined">bookmark_border</span>
                Sauvegarder en brouillon
              </button>
            </div>
            <button
              className="prac-action-submit"
              onClick={handleSubmit}
            >
              <span className="material-symbols-outlined">smart_toy</span>
              Soumettre pour Analyse IA Immédiate
            </button>
          </div>
        </div>

        {/* RIGHT: Session history */}
        <div className="prac-right">
          <div className="prac-history-card">
            <h3 className="prac-history-title">Historique des Sessions</h3>
            <div className="prac-history-list">
              {[
                { id: '#204', date: '24 Oct', topic: 'Transition écologique', score: 87, level: 'C1' },
                { id: '#203', date: '21 Oct', topic: 'IA & enseignement', score: 84, level: 'C1' },
                { id: '#202', date: '18 Oct', topic: 'Soft power diplomatique', score: 81, level: 'B2' },
                { id: '#201', date: '14 Oct', topic: 'Justice climatique', score: 79, level: 'B2' },
              ].map((s) => (
                <div key={s.id} className="prac-history-item">
                  <div className="prac-history-item-top">
                    <span className="prac-history-id">{s.id}</span>
                    <span className="prac-history-date">{s.date}</span>
                  </div>
                  <div className="prac-history-topic">{s.topic}</div>
                  <div className="prac-history-bottom">
                    <div className="prac-history-score-bar">
                      <div className="prac-history-score-fill" style={{ width: `${s.score}%` }} />
                    </div>
                    <span className="prac-history-score">{s.score}/100</span>
                    <span className="prac-history-level">{s.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick rubric */}
          <div className="prac-rubric-card">
            <h3 className="prac-rubric-title">Grille de Notation Rapide</h3>
            <p className="prac-rubric-sub">
              Seuil de maîtrise {level} validé à ≥ 75/100
            </p>
            {[
              { label: 'Prononciation', pct: 30 },
              { label: 'Fluidité', pct: 25 },
              { label: 'Lexique', pct: 20 },
              { label: 'Cohérence', pct: 25 },
            ].map((r) => (
              <div key={r.label} className="prac-rubric-item">
                <div className="prac-rubric-row">
                  <span className="prac-rubric-label">{r.label}</span>
                  <span className="prac-rubric-pct">{r.pct}%</span>
                </div>
                <div className="prac-rubric-bar-bg">
                  <div className="prac-rubric-bar" style={{ width: `${r.pct * 3.33}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
