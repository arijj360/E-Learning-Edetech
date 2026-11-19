import { useState } from 'react';
import './Progress.css';

export default function Progress() {
  const [timeRange, setTimeRange] = useState('3months'); // 30days, 3months, academic

  const criteriaEvolution = [
    { name: 'Intonation & Prosodie', initial: 60, current: 84, gain: 24, color: 'primary' },
    { name: 'Vocabulaire & Registre', initial: 78, current: 92, gain: 14, color: 'surface' },
    { name: 'Prononciation & Phonétique', initial: 72, current: 88, gain: 16, color: 'secondary' },
    { name: 'Morphosyntaxe & Complexité', initial: 70, current: 86, gain: 16, color: 'tertiary' },
    { name: 'Cohérence & Stratégie Rhétorique', initial: 74, current: 89, gain: 15, color: 'outline' },
    { name: 'Fluidité & Débit', initial: 64, current: 82, gain: 18, color: 'variant' }
  ];

  return (
    <div className="progress-page">
      {/* Page Header */}
      <header className="progress-header">
        <div className="progress-breadcrumb">
          <span className="breadcrumb-item">Apprenant</span>
          <span className="material-symbols-outlined">chevron_right</span>
          <span className="breadcrumb-item breadcrumb-item--active">Suivi & Progression</span>
        </div>
        <h1 className="progress-title">Suivi & Analyse de Progression CECRL</h1>
        <p className="progress-subtitle">
          Historique consolidé de votre apprentissage vocal, mesure d'écart vers l'objectif{' '}
          <span className="progress-target">DALF C2</span> et calendrier d'assiduité.
        </p>
        <div className="progress-actions">
          <div className="time-range-selector">
            <button 
              className={`time-range-btn ${timeRange === '30days' ? 'time-range-btn--active' : ''}`}
              onClick={() => setTimeRange('30days')}
            >
              30 jours
            </button>
            <button 
              className={`time-range-btn ${timeRange === '3months' ? 'time-range-btn--active' : ''}`}
              onClick={() => setTimeRange('3months')}
            >
              3 mois
            </button>
            <button 
              className={`time-range-btn ${timeRange === 'academic' ? 'time-range-btn--active' : ''}`}
              onClick={() => setTimeRange('academic')}
            >
              Année académique
            </button>
          </div>
          <button className="btn-export">
            <span className="material-symbols-outlined">picture_as_pdf</span>
            <span>Exporter le Bilan Pédagogique (PDF)</span>
          </button>
        </div>
      </header>

      {/* Section 1: KPI Summary Bar */}
      <section className="kpi-grid">
        {/* KPI 1: CECRL Trajectory */}
        <div className="kpi-card">
          <div className="kpi-header">
            <span className="kpi-label">Trajectoire CECRL</span>
            <span className="kpi-badge">Actif : C1</span>
          </div>
          <div className="kpi-content">
            <div className="kpi-level-info">
              <div>
                <div className="kpi-level">C1.1 <span className="kpi-level-sub">Autonome</span></div>
                <div className="kpi-score">Score actuel : <strong>86/100</strong> (Jan. 2024)</div>
              </div>
              <div className="kpi-trend">
                <span className="kpi-trend-value">
                  <span className="material-symbols-outlined">trending_up</span> +18 pts
                </span>
                <div className="kpi-trend-label">depuis Oct. 2023 (B2.2)</div>
              </div>
            </div>
            {/* Bar gauge */}
            <div className="kpi-trajectory-bar">
              <div className="trajectory-segment trajectory-segment--past" style={{width: '35%'}}></div>
              <div className="trajectory-segment trajectory-segment--current" style={{width: '35%'}}></div>
              <div className="trajectory-segment trajectory-segment--future" style={{width: '30%'}}></div>
            </div>
            <div className="kpi-trajectory-labels">
              <span>B2 (68)</span>
              <span className="label-active">C1 (86)</span>
              <span>C2 Visé (24 Mai 2025)</span>
            </div>
          </div>
        </div>

        {/* KPI 2: C2 Goal Gauge */}
        <div className="kpi-card">
          <div className="kpi-header">
            <span className="kpi-label">Objectif DALF C2</span>
          </div>
          <div className="kpi-content kpi-content--horizontal">
            <div>
              <div className="kpi-value">64%</div>
              <p className="kpi-description">
                Progression vers la maîtrise rhétorique & spontanéité absolue
              </p>
              <div className="kpi-deadline">
                <span className="material-symbols-outlined">flag</span>
                Échéance : 24 Mai 2025
              </div>
            </div>
            <div className="circular-progress">
              <svg className="circular-progress-svg" viewBox="0 0 100 100">
                <circle className="progress-bg" cx="50" cy="50" r="40" fill="transparent" strokeWidth="10" />
                <circle 
                  className="progress-fill" 
                  cx="50" cy="50" 
                  r="40" 
                  fill="transparent" 
                  strokeWidth="10"
                  strokeDasharray="251.32"
                  strokeDashoffset="90.47"
                  strokeLinecap="round"
                />
              </svg>
              <div className="progress-center">
                <span className="progress-value">64%</span>
                <span className="progress-label">cible</span>
              </div>
            </div>
          </div>
        </div>

        {/* KPI 3: Speech Time */}
        <div className="kpi-card">
          <div className="kpi-header">
            <span className="kpi-label">Temps de parole</span>
            <div className="kpi-icon">
              <span className="material-symbols-outlined">graphic_eq</span>
            </div>
          </div>
          <div className="kpi-content">
            <div className="kpi-value">48h 20m</div>
            <p className="kpi-description">Parole effective analysée par l'algorithme acoustique</p>
            <div className="kpi-badge-row">
              <span className="kpi-badge-increase">
                <span className="material-symbols-outlined">timer</span>
                +4h 15m
              </span>
              <span>enregistrées ce mois-ci</span>
            </div>
          </div>
        </div>

        {/* KPI 4: Audits & Sessions */}
        <div className="kpi-card">
          <div className="kpi-header">
            <span className="kpi-label">Audits & Séances</span>
            <div className="kpi-icon kpi-icon--primary">
              <span className="material-symbols-outlined">record_voice_over</span>
            </div>
          </div>
          <div className="kpi-content">
            <div className="kpi-value">112</div>
            <p className="kpi-description">Enregistrements notés selon les 6 critères officiels</p>
            <div className="kpi-split-stats">
              <span>
                <span className="stat-dot stat-dot--primary"></span> 89 IA certifiées
              </span>
              <span>
                <span className="stat-dot stat-dot--secondary"></span> 23 Formateurs
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Evolution Chart */}
      <section className="evolution-section">
        <div className="evolution-header">
          <div>
            <div className="evolution-title-row">
              <h2 className="evolution-title">Évolution Dynamique des 6 Critères d'Excellence</h2>
              <span className="evolution-period">Octobre 2023 – Avril 2024</span>
            </div>
            <p className="evolution-description">
              Mesure longitudinale des compétences phonétiques, morphosyntaxiques et pragmatiques 
              adossées aux seuils officiels du Conseil de l'Europe.
            </p>
          </div>
          <div className="evolution-legend">
            <div className="legend-item">
              <div className="legend-line legend-line--outline"></div>
              <span>Seuil B2 (50 pts)</span>
            </div>
            <div className="legend-item">
              <div className="legend-line legend-line--primary-light"></div>
              <span>Seuil C1 (75 pts)</span>
            </div>
            <div className="legend-item">
              <div className="legend-line legend-line--primary"></div>
              <span>Seuil C2 (85 pts)</span>
            </div>
          </div>
        </div>

        {/* SVG Chart */}
        <div className="evolution-chart">
          <svg className="chart-svg" fill="none" viewBox="0 0 900 280">
            {/* Threshold Lines */}
            <line className="threshold-line threshold-line--c2" x1="40" x2="880" y1="53" y2="53" strokeDasharray="4 4" strokeWidth="1.5" />
            <text className="threshold-label" x="44" y="48" fontSize="10" fontWeight="700">SEUIL VALIDATION C2 (85/100)</text>
            
            <line className="threshold-line threshold-line--c1" x1="40" x2="880" y1="75" y2="75" strokeDasharray="3 3" strokeWidth="1.2" />
            <text className="threshold-label threshold-label--c1" x="44" y="70" fontSize="10" fontWeight="600">SEUIL VALIDATION C1 (75/100)</text>
            
            <line className="threshold-line threshold-line--b2" x1="40" x2="880" y1="130" y2="130" strokeDasharray="2 2" strokeWidth="1" />
            <text className="threshold-label threshold-label--b2" x="44" y="125" fontSize="10">SEUIL VALIDATION B2 (50/100)</text>

            {/* Timeline Labels */}
            <text className="timeline-label" x="80" y="260" fontSize="11">Octobre</text>
            <text className="timeline-label" x="210" y="260" fontSize="11">Novembre</text>
            <text className="timeline-label" x="340" y="260" fontSize="11">Décembre</text>
            <text className="timeline-label" x="470" y="260" fontSize="11">Janvier</text>
            <text className="timeline-label" x="600" y="260" fontSize="11">Février</text>
            <text className="timeline-label" x="730" y="260" fontSize="11">Mars</text>
            <text className="timeline-label timeline-label--active" x="850" y="260" fontSize="11" fontWeight="700">Avril (Actuel)</text>

            {/* Data Curves */}
            <path className="data-curve data-curve--primary" d="M 80 108 C 210 100, 340 85, 470 70 S 600 62, 730 57 L 850 55" strokeLinecap="round" strokeWidth="3.5" />
            <path className="data-curve data-curve--surface" d="M 80 68 C 210 62, 340 54, 470 48 S 600 42, 730 39 L 850 37" strokeLinecap="round" strokeWidth="2" />
            <path className="data-curve data-curve--secondary" d="M 80 81 C 210 75, 340 68, 470 60 S 600 52, 730 48 L 850 46" strokeDasharray="5 2" strokeLinecap="round" strokeWidth="2" />
            <path className="data-curve data-curve--tertiary" d="M 80 86 C 210 82, 340 76, 470 68 S 600 58, 730 53 L 850 50" strokeLinecap="round" strokeWidth="1.8" />
            <path className="data-curve data-curve--outline" d="M 80 77 C 210 70, 340 64, 470 56 S 600 50, 730 46 L 850 44" strokeLinecap="round" strokeWidth="1.8" />
            <path className="data-curve data-curve--variant" d="M 80 99 C 210 94, 340 88, 470 78 S 600 70, 730 65 L 850 59" strokeLinecap="round" strokeWidth="1.8" />

            {/* Key Points */}
            <circle className="data-point data-point--surface" cx="850" cy="37" r="5" />
            <circle className="data-point data-point--outline" cx="850" cy="44" r="4" />
            <circle className="data-point data-point--secondary" cx="850" cy="46" r="4" />
            <circle className="data-point data-point--tertiary" cx="850" cy="50" r="4" />
            <circle className="data-point data-point--primary" cx="850" cy="55" r="6" />
            <circle className="data-point data-point--variant" cx="850" cy="59" r="4" />
          </svg>

          {/* Tooltip */}
          <div className="chart-tooltip">
            <div className="tooltip-dot"></div>
            <div className="tooltip-content">
              <div className="tooltip-label">Forte accélération</div>
              <div className="tooltip-title">Intonation & Prosodie : 84/100</div>
              <div className="tooltip-value">+24 points depuis le diagnostic</div>
            </div>
          </div>
        </div>

        {/* Criteria Grid */}
        <div className="criteria-summary-grid">
          {criteriaEvolution.map((criterion, index) => (
            <div key={index} className={`criteria-summary-card ${index === 2 ? 'criteria-summary-card--highlight' : ''}`}>
              <div className="criteria-summary-label">{index + 1}. {criterion.name.split(' ')[0]}</div>
              <div className="criteria-summary-row">
                <span className="criteria-summary-score">{criterion.current}</span>
                <span className="criteria-summary-gain">+{criterion.gain} pts</span>
              </div>
              <div className="criteria-summary-range">
                {criterion.initial} → {criterion.current} (
                {criterion.current >= 85 ? 'C2' : criterion.current >= 75 ? 'En cours C2' : 'C1'}
                {criterion.name.includes('Intonation') && ' • Meilleur gain ★'}
                )
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Goals & Recommendations (Optional, for completeness) */}
      <section className="recommendations-section">
        <h2 className="recommendations-title">Objectifs & Recommandations Personnalisées</h2>
        <div className="recommendations-grid">
          <div className="recommendation-card">
            <div className="recommendation-icon recommendation-icon--success">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <div className="recommendation-content">
              <h3 className="recommendation-title">Points Forts Consolidés</h3>
              <ul className="recommendation-list">
                <li>Vocabulaire & Registre : Excellence maintenue (92/100)</li>
                <li>Cohérence Rhétorique : Maîtrise argumentative avancée</li>
                <li>Prononciation : Au-delà du seuil C2</li>
              </ul>
            </div>
          </div>

          <div className="recommendation-card">
            <div className="recommendation-icon recommendation-icon--primary">
              <span className="material-symbols-outlined">flag</span>
            </div>
            <div className="recommendation-content">
              <h3 className="recommendation-title">Prochains Objectifs</h3>
              <ul className="recommendation-list">
                <li>Maintenir la progression en Intonation (+24 pts)</li>
                <li>Consolider Fluidité & Débit vers 85/100</li>
                <li>Préparer simulation DALF C2 complète</li>
              </ul>
            </div>
          </div>

          <div className="recommendation-card">
            <div className="recommendation-icon recommendation-icon--warning">
              <span className="material-symbols-outlined">lightbulb</span>
            </div>
            <div className="recommendation-content">
              <h3 className="recommendation-title">Actions Recommandées</h3>
              <ul className="recommendation-list">
                <li>3 simulations d'examen supplémentaires</li>
                <li>Focus sur prosodie des objections complexes</li>
                <li>Révision des liaisons en registre formel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
