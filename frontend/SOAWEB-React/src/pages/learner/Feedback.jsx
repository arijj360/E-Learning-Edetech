import { useState } from 'react';
import './Feedback.css';

export default function Feedback() {
  const [activeTab, setActiveTab] = useState('all');
  const [levelFilter, setLevelFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const criteriaCount = {
    all: 18,
    pronunciation: 5,
    intonation: 3,
    fluency: 3,
    vocabulary: 2,
    grammar: 3,
    coherence: 2
  };

  const exercises = [
    {
      id: 1,
      title: 'Liaisons facultatives et obligatoires en contexte formel',
      type: 'pronunciation',
      level: 'C1 / C2',
      duration: '12 min',
      difficulty: 'Avancé',
      description: 'Maîtrisez la liaison en [t] et [z] dans les formes plurielles du registre académique',
      recommended: true,
      status: 'new'
    },
    {
      id: 2,
      title: 'Prosodie des objections et nuances argumentatives',
      type: 'intonation',
      level: 'C1',
      duration: '18 min',
      difficulty: 'Expert',
      description: 'Affinez votre courbe mélodique pour exprimer le désaccord poli',
      recommended: false,
      priority: true,
      status: 'new'
    },
    {
      id: 3,
      title: 'Débit optimal et pauses stratégiques DALF',
      type: 'fluency',
      level: 'C1 / C2',
      duration: '15 min',
      difficulty: 'Avancé',
      description: 'Apprenez à placer vos respirations pour maintenir un rythme naturel',
      recommended: false,
      status: 'new'
    },
    {
      id: 4,
      title: 'Connecteurs de causalité et subordination complexe',
      type: 'coherence',
      level: 'B2 / C1',
      duration: '10 min',
      difficulty: 'Intermédiaire',
      description: 'Structurez vos arguments avec des connecteurs sophistiqués',
      recommended: false,
      status: 'new'
    }
  ];

  return (
    <div className="feedback-page">
      {/* Ambient Background Effects */}
      <div className="feedback-ambient">
        <div className="ambient-orb ambient-orb-1"></div>
        <div className="ambient-orb ambient-orb-2"></div>
      </div>

      {/* Page Header */}
      <header className="feedback-header">
        <div className="feedback-breadcrumb">
          <span className="breadcrumb-item">Espace Apprenant</span>
          <span className="material-symbols-outlined">chevron_right</span>
          <span className="breadcrumb-item breadcrumb-item--active">Feedback & Exercices Adaptatifs</span>
        </div>
        <h1 className="feedback-title">Feedback Pédagogique & Exercices Adaptatifs</h1>
        <p className="feedback-subtitle">
          Consultez les retours croisés de l'IA neuronale et de vos formateurs certificateurs. 
          Travaillez vos points d'inflexion avec des modules ciblés sur les 6 critères officiels du CECRL.
        </p>
        <div className="feedback-actions">
          <button className="btn-secondary">
            <span className="material-symbols-outlined">history</span>
            <span>Journal complet des retours</span>
          </button>
          <button className="btn-primary">
            <span className="material-symbols-outlined">picture_as_pdf</span>
            <span>Exporter le plan d'entraînement (PDF)</span>
          </button>
        </div>
      </header>

      {/* Arbitrage Section */}
      <section className="arbitrage-section">
        <div className="arbitrage-header">
          <div className="arbitrage-meta">
            <span className="session-badge">Session #REC-8849</span>
            <h2 className="arbitrage-title">Transition écologique et souveraineté</h2>
            <span className="level-badge">
              <span className="level-dot"></span>
              DALF C1 • Épreuve Individuelle
            </span>
          </div>
          <div className="arbitrage-date">
            <span className="material-symbols-outlined">schedule</span>
            <span>Évalué le 24 Mai 2024 à 14:32</span>
          </div>
        </div>

        <div className="arbitrage-content">
          {/* Examiner Card */}
          <div className="examiner-card">
            <div className="examiner-header">
              <div className="examiner-info">
                <img src="https://i.pravatar.cc/150?img=5" alt="Dr. Sarah Moreau" className="examiner-avatar" />
                <div>
                  <div className="examiner-badge">
                    <span className="material-symbols-outlined">verified</span>
                    Validation Certificateur
                  </div>
                  <h3 className="examiner-name">Dr. Sarah Moreau</h3>
                  <p className="examiner-role">Examinatrice C2 agréée • France Éducation International</p>
                </div>
              </div>
              <span className="arbitrage-badge">Arbitrage Officiel</span>
            </div>
            
            <div className="examiner-quote">
              <p>« Excellente structuration argumentative avec une nuance rhétorique digne du niveau C1. 
              Veillez toutefois à soigner l'articulation des liaisons obligatoires sur les formes plurielles 
              en registre formel pour garantir l'automatisme lors de l'entretien spontané. »</p>
              <div className="audio-player">
                <button className="audio-play-btn">
                  <span className="material-symbols-outlined">play_arrow</span>
                </button>
                <div className="audio-waveform">
                  {[2,4,5,3,6,4,2,3,5,2,4,1,3].map((h, i) => (
                    <span key={i} className={`wave-bar ${i < 7 ? 'wave-bar--played' : ''}`} style={{height: `${h * 4}px`}}></span>
                  ))}
                </div>
                <span className="audio-time">0:42 / 1:18</span>
                <span className="audio-label">Note vocale formateur</span>
              </div>
            </div>

            <div className="priority-targets">
              <span className="targets-label">2 Points d'Inflexion Prioritaires :</span>
              <div className="targets-grid">
                <div className="target-card">
                  <div className="target-icon">
                    <span className="material-symbols-outlined">graphic_eq</span>
                  </div>
                  <div className="target-content">
                    <div className="target-header">
                      <h4>Liaisons en [t] et [z]</h4>
                      <span className="target-score">88%</span>
                    </div>
                    <p>Critère Prononciation • Manque de régularité</p>
                  </div>
                </div>
                <div className="target-card">
                  <div className="target-icon">
                    <span className="material-symbols-outlined">multiline_chart</span>
                  </div>
                  <div className="target-content">
                    <div className="target-header">
                      <h4>Prosodie des Objections</h4>
                      <span className="target-score">84%</span>
                    </div>
                    <p>Critère Intonation • Rupture mélodique F0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Score Card */}
          <div className="score-card">
            <div className="score-header">
              <span className="score-label">Score Final Arbitré</span>
              <span className="score-level">Niveau Validé C1.2</span>
            </div>
            <div className="score-display">
              <span className="score-value">87</span>
              <span className="score-max">/ 100</span>
            </div>
            <div className="score-breakdown">
              <div className="score-item">
                <div className="score-item-header">
                  <span className="score-item-label">
                    <span className="score-dot score-dot--primary"></span>
                    Note Formateur Arbitre
                  </span>
                  <span className="score-item-value">87.0 / 100</span>
                </div>
                <div className="score-bar-bg">
                  <div className="score-bar score-bar--primary" style={{width: '87%'}}></div>
                </div>
              </div>
              <div className="score-item">
                <div className="score-item-header">
                  <span className="score-item-label">
                    <span className="score-dot score-dot--secondary"></span>
                    Évaluation Initiale IA
                  </span>
                  <span className="score-item-value">86.8 / 100</span>
                </div>
                <div className="score-bar-bg">
                  <div className="score-bar score-bar--secondary" style={{width: '86.8%'}}></div>
                </div>
              </div>
            </div>
            <div className="score-delta">
              <span>Écart IA/Expert :</span>
              <span className="delta-value">
                <span className="material-symbols-outlined">arrow_upward</span>
                +0.2 pts (Alignement 99.7%)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="filters-section">
        <div className="search-bar">
          <span className="material-symbols-outlined">search</span>
          <input 
            type="text" 
            placeholder="Rechercher une notion, un connecteur, un virelangue, une règle..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="filter-controls">
          <div className="level-filters">
            {['all', 'B1', 'B2', 'C1', 'C2'].map(level => (
              <button 
                key={level}
                className={`level-filter ${levelFilter === level ? 'level-filter--active' : ''}`}
                onClick={() => setLevelFilter(level)}
              >
                {level === 'all' ? 'Tous' : level}
              </button>
            ))}
          </div>
          <div className="status-filters">
            <button className="status-filter status-filter--active">Tous statuts</button>
            <button className="status-filter">À faire</button>
            <button className="status-filter">En cours</button>
            <button className="status-filter">Validés</button>
          </div>
          <button className="filter-button" title="Filtrer par durée">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>
      </section>

      {/* Criteria Tabs */}
      <div className="criteria-tabs">
        <button 
          className={`criteria-tab ${activeTab === 'all' ? 'criteria-tab--active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          <span>Tous les critères</span>
          <span className="tab-badge">{criteriaCount.all}</span>
        </button>
        <button 
          className={`criteria-tab ${activeTab === 'pronunciation' ? 'criteria-tab--active' : ''}`}
          onClick={() => setActiveTab('pronunciation')}
        >
          <span className="tab-dot"></span>
          <span>Prononciation & Phonétique</span>
          <span className="tab-badge tab-badge--recommended">{criteriaCount.pronunciation} • Recommandé</span>
        </button>
        <button 
          className={`criteria-tab ${activeTab === 'intonation' ? 'criteria-tab--active' : ''}`}
          onClick={() => setActiveTab('intonation')}
        >
          <span className="tab-dot tab-dot--secondary"></span>
          <span>Intonation & Prosodie</span>
          <span className="tab-badge tab-badge--priority">{criteriaCount.intonation} • Prioritaire</span>
        </button>
        <button 
          className={`criteria-tab ${activeTab === 'fluency' ? 'criteria-tab--active' : ''}`}
          onClick={() => setActiveTab('fluency')}
        >
          <span>Fluidité & Débit</span>
          <span className="tab-badge">{criteriaCount.fluency}</span>
        </button>
        <button 
          className={`criteria-tab ${activeTab === 'vocabulary' ? 'criteria-tab--active' : ''}`}
          onClick={() => setActiveTab('vocabulary')}
        >
          <span>Vocabulaire & Registre</span>
          <span className="tab-badge">{criteriaCount.vocabulary}</span>
        </button>
        <button 
          className={`criteria-tab ${activeTab === 'grammar' ? 'criteria-tab--active' : ''}`}
          onClick={() => setActiveTab('grammar')}
        >
          <span>Morphosyntaxe & Complexité</span>
          <span className="tab-badge">{criteriaCount.grammar}</span>
        </button>
        <button 
          className={`criteria-tab ${activeTab === 'coherence' ? 'criteria-tab--active' : ''}`}
          onClick={() => setActiveTab('coherence')}
        >
          <span>Cohérence & Rhétorique</span>
          <span className="tab-badge">{criteriaCount.coherence}</span>
        </button>
      </div>

      {/* Exercises Grid */}
      <section className="exercises-grid">
        {exercises.map(exercise => (
          <article key={exercise.id} className={`exercise-card ${exercise.recommended ? 'exercise-card--recommended' : ''}`}>
            {exercise.recommended && <div className="exercise-card-accent"></div>}
            <div className="exercise-card-header">
              <div className="exercise-badges">
                {exercise.recommended && (
                  <span className="exercise-badge exercise-badge--recommended">
                    <span className="material-symbols-outlined">psychology</span>
                    Recommandé Formateur
                  </span>
                )}
                <span className="exercise-level">{exercise.level}</span>
              </div>
            </div>
            <div className="exercise-meta-row">
              <span className="exercise-meta-item">
                <span className="material-symbols-outlined">record_voice_over</span>
                Critère {exercise.type}
              </span>
              <span className="exercise-meta-item">
                <span className="material-symbols-outlined">schedule</span>
                {exercise.duration}
              </span>
            </div>
            <h3 className="exercise-title">{exercise.title}</h3>
            <p className="exercise-description">{exercise.description}</p>
            <div className="exercise-footer">
              <div className="exercise-difficulty">
                <span className="material-symbols-outlined">signal_cellular_alt</span>
                <span>{exercise.difficulty}</span>
                {exercise.priority && <span className="priority-icon">🔥</span>}
              </div>
              <button className="btn-exercise">
                <span className="material-symbols-outlined">play_circle</span>
                <span>Démarrer</span>
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
