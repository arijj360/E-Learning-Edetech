import { useState } from 'react';
import './Simulations.css';

export default function Simulations() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const examTopics = [
    {
      id: 1,
      category: 'dalf',
      title: 'La gratuité des transports publics urbains',
      description: 'Analyse critique d\'une mesure de mobilité soutenable',
      difficulty: 'DALF C1',
      duration: '35 min',
      attempts: 2,
      avgScore: 78,
      keywords: ['Transport', 'Politique', 'Écologie']
    },
    {
      id: 2,
      category: 'dalf',
      title: 'Télétravail et déconnexion',
      description: 'Défendre la séparation stricte des temps pro/perso',
      difficulty: 'DELF B2',
      duration: '25 min',
      attempts: 1,
      avgScore: 82,
      keywords: ['Travail', 'Société']
    },
    {
      id: 3,
      category: 'delf',
      title: 'Urban Architecture and Sustainable Design',
      description: 'Debate public housing models and eco-design',
      difficulty: 'IELTS Academic',
      duration: '45 min',
      attempts: 0,
      avgScore: null,
      keywords: ['Architecture', 'Environment']
    },
    {
      id: 4,
      category: 'dalf',
      title: 'Fast-Intégrale ou les choix du narrateur',
      description: 'Critique littéraire des techniques narratives',
      difficulty: 'DALF C1',
      duration: '35 min',
      attempts: 3,
      avgScore: 85,
      keywords: ['Littérature', 'Analyse']
    },
    {
      id: 5,
      category: 'tcf',
      title: 'Immigration et intégration économique',
      description: 'Débat sur les politiques migratoires canadiennes',
      difficulty: 'TCF Canada',
      duration: '30 min',
      attempts: 1,
      avgScore: 76,
      keywords: ['Immigration', 'Économie']
    },
    {
      id: 6,
      category: 'cambridge',
      title: 'Artificial Intelligence and Ethics',
      description: 'Discussion on AI regulation and societal impact',
      difficulty: 'Cambridge C1',
      duration: '40 min',
      attempts: 0,
      avgScore: null,
      keywords: ['Technology', 'Ethics']
    }
  ];

  const filteredTopics = selectedFilter === 'all' 
    ? examTopics 
    : examTopics.filter(t => t.category === selectedFilter);

  const handleStartExam = (topic) => {
    setSelectedTopic(topic);
    setIsModalOpen(true);
  };

  return (
    <div className="simulations-page-new">
      {/* Top Bar */}
      <div className="sim-header-section">
        <div className="sim-header-content">
          <div className="sim-header-badges">
            <span className="sim-badge-primary">Module Certifiant CECRL</span>
            <span className="sim-badge-dot"></span>
            <span className="sim-badge-secondary">Conditions Officielles d'Épreuve</span>
          </div>
          <h1 className="sim-main-title">Simulations d'Examen Oral en Conditions Réelles</h1>
          <p className="sim-main-subtitle">
            Mises en situation chronométrées face à un examinateur virtuel IA calibré sur les grilles 
            officielles (DALF, DELF, TCF, Cambridge, IELTS).
          </p>
        </div>
        <div className="sim-header-actions">
          <button className="sim-btn-secondary">
            <span className="material-symbols-outlined">history_edu</span>
            Historique de mes épreuves (4 passées)
          </button>
          <button className="sim-btn-primary-small">
            <span className="material-symbols-outlined">rule</span>
            Grilles de Notation
          </button>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="sim-filter-pills">
        <button 
          className={`sim-filter-pill ${selectedFilter === 'all' ? 'sim-filter-pill-active' : ''}`}
          onClick={() => setSelectedFilter('all')}
        >
          <span>Tous les examens</span>
          <span className="sim-pill-badge">18</span>
        </button>
        <button 
          className={`sim-filter-pill ${selectedFilter === 'dalf' ? 'sim-filter-pill-active' : ''}`}
          onClick={() => setSelectedFilter('dalf')}
        >
          <span>DALF (C1-C2)</span>
          <span className="sim-pill-badge-secondary">6</span>
        </button>
        <button 
          className={`sim-filter-pill ${selectedFilter === 'delf' ? 'sim-filter-pill-active' : ''}`}
          onClick={() => setSelectedFilter('delf')}
        >
          <span>DELF (B1-B2)</span>
          <span className="sim-pill-badge-secondary">5</span>
        </button>
        <button 
          className={`sim-filter-pill ${selectedFilter === 'tcf' ? 'sim-filter-pill-active' : ''}`}
          onClick={() => setSelectedFilter('tcf')}
        >
          <span>TCF Canada & TP</span>
          <span className="sim-pill-badge-secondary">3</span>
        </button>
        <button 
          className={`sim-filter-pill ${selectedFilter === 'cambridge' ? 'sim-filter-pill-active' : ''}`}
          onClick={() => setSelectedFilter('cambridge')}
        >
          <span>Cambridge C1 Advanced</span>
          <span className="sim-pill-badge-secondary">2</span>
        </button>
        <button 
          className={`sim-filter-pill ${selectedFilter === 'ielts' ? 'sim-filter-pill-active' : ''}`}
          onClick={() => setSelectedFilter('ielts')}
        >
          <span>IELTS Academic</span>
          <span className="sim-pill-badge-secondary">2</span>
        </button>
      </div>

      {/* Featured Exam Hero */}
      <div className="sim-hero-card">
        <div className="sim-hero-ambient-1"></div>
        <div className="sim-hero-ambient-2"></div>
        
        <div className="sim-hero-grid">
          {/* Left Column */}
          <div className="sim-hero-left">
            <div className="sim-hero-tags">
              <span className="sim-hero-tag-featured">ÉPREUVE BLANCHE RECOMMANDÉE</span>
              <span className="sim-hero-tag-level">CECRL C1</span>
              <span className="sim-hero-tag-status">
                <span className="sim-status-pulse"></span>
                Examinateur IA Prêt
              </span>
            </div>
            
            <div className="sim-hero-text">
              <h2 className="sim-hero-title">
                DALF C1 — Épreuve Orale Individuelle : Synthèse de Documents & Débat Contradictoire
              </h2>
              <p className="sim-hero-description">
                Format strict France Éducation International. Analyse d'un dossier documentaire écrit, 
                élaboration d'un exposé argumenté et soutenance polémique face à l'examinateur IA.
              </p>
            </div>

            <div className="sim-hero-metrics">
              <div className="sim-metric-card">
                <span className="sim-metric-label">
                  <span className="material-symbols-outlined">timer</span>
                  Durée Totale
                </span>
                <span className="sim-metric-value">45 min</span>
                <span className="sim-metric-detail">30m prep + 15m oral</span>
              </div>
              <div className="sim-metric-card">
                <span className="sim-metric-label">
                  <span className="material-symbols-outlined">psychology</span>
                  Niveau Visé
                </span>
                <span className="sim-metric-value">C1 Autonome</span>
                <span className="sim-metric-detail">Grille FEI officielle</span>
              </div>
              <div className="sim-metric-card sim-metric-card-wide">
                <span className="sim-metric-label">
                  <span className="material-symbols-outlined">speed</span>
                  Indice Réussite
                </span>
                <div className="sim-metric-score">
                  <span className="sim-metric-value">88%</span>
                  <span className="sim-metric-badge">Fort</span>
                </div>
                <span className="sim-metric-detail">Basé sur vos 4 oraux</span>
              </div>
            </div>

            <div className="sim-hero-actions">
              <button className="sim-hero-btn-primary" onClick={() => handleStartExam(examTopics[0])}>
                <span className="material-symbols-outlined">headset_mic</span>
                <span>Démarrer la simulation (Salle d'Examen)</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="sim-hero-btn-secondary">
                <span className="material-symbols-outlined">description</span>
                Consulter le dossier témoin
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="sim-hero-right">
            <div className="sim-jury-card">
              <div className="sim-jury-header">
                <div className="sim-jury-avatar">
                  <span className="material-symbols-outlined">smart_toy</span>
                </div>
                <div className="sim-jury-info">
                  <span className="sim-jury-name">Jury IA : Pr. Valérie Lambert</span>
                  <span className="sim-jury-title">Spécialiste Épreuves DALF C1 / C2</span>
                </div>
                <span className="sim-jury-id">ID: JURY-994</span>
              </div>

              <div className="sim-structure-card">
                <div className="sim-structure-header">
                  <span>Structure de l'oral</span>
                  <span className="sim-structure-duration">15 minutes effectives</span>
                </div>
                <div className="sim-progress-dual">
                  <div className="sim-progress-segment-1"></div>
                  <div className="sim-progress-segment-2"></div>
                </div>
                <div className="sim-structure-legend">
                  <span className="sim-legend-item">
                    <span className="sim-legend-dot sim-legend-dot-1"></span>
                    Exposé (8-10 min)
                  </span>
                  <span className="sim-legend-item">
                    <span className="sim-legend-dot sim-legend-dot-2"></span>
                    Débat & Controverse (5-7 min)
                  </span>
                </div>
              </div>

              <div className="sim-criteria-section">
                <span className="sim-criteria-label">Critères prioritaires de l'évaluation</span>
                <div className="sim-criteria-grid">
                  <div className="sim-criteria-item">
                    <span className="material-symbols-outlined">schema</span>
                    <div>
                      <div className="sim-criteria-name">Cohérence Logique</div>
                      <div className="sim-criteria-desc">Connecteurs & plan</div>
                    </div>
                  </div>
                  <div className="sim-criteria-item">
                    <span className="material-symbols-outlined">record_voice_over</span>
                    <div>
                      <div className="sim-criteria-name">Aisance Phonique</div>
                      <div className="sim-criteria-desc">Débit, prosodie, accent</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Phase Protocol */}
      <div className="sim-protocol-section">
        <div className="sim-protocol-header">
          <div>
            <h3 className="sim-protocol-title">Protocole d'Examen en 3 Phases Interactives</h3>
            <p className="sim-protocol-subtitle">
              Le moteur ORALIS applique le strict règlement anti-triche et les contraintes temporelles 
              des commissions officielles.
            </p>
          </div>
          <span className="sim-protocol-badge">Chronométrage Inviolable</span>
        </div>

        <div className="sim-phases-grid">
          {/* Phase 1 */}
          <div className="sim-phase-card">
            <div className="sim-phase-header">
              <span className="sim-phase-number">01</span>
              <span className="sim-phase-badge sim-phase-badge-1">Tirage au Sort</span>
            </div>
            <h4 className="sim-phase-title">Corpus & Problématique</h4>
            <p className="sim-phase-description">
              Sélection algorithmique d'un dossier officiel constitué de 2 articles de presse 
              généraliste ou spécialisée (1 000 à 1 200 mots).
            </p>
            <div className="sim-phase-tags">
              <span>Bioéthique</span>
              <span>Économie circulaire</span>
              <span>IA & Droit</span>
            </div>
            <div className="sim-phase-footer">
              <span className="material-symbols-outlined">casino</span>
              <span>Double sujet au choix en mode DALF</span>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="sim-phase-card">
            <div className="sim-phase-header">
              <span className="sim-phase-number">02</span>
              <span className="sim-phase-badge sim-phase-badge-2">30:00 Rebours</span>
            </div>
            <h4 className="sim-phase-title">Loge de Préparation</h4>
            <p className="sim-phase-description">
              Écran scindé avec le corpus documentaire, un bloc-notes structuré (thèse, antithèse, synthèse) 
              et assistance lexicale désactivée.
            </p>
            <div className="sim-phase-timer">
              <div className="sim-timer-info">
                <span className="material-symbols-outlined">lock_clock</span>
                <span>Minuteur Inaltérable</span>
              </div>
              <span className="sim-timer-value">30:00</span>
            </div>
            <div className="sim-phase-footer">
              <span className="material-symbols-outlined">edit_note</span>
              <span>Brouillon sauvegardé et accessible à l'oral</span>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="sim-phase-card">
            <div className="sim-phase-header">
              <span className="sim-phase-number">03</span>
              <span className="sim-phase-badge sim-phase-badge-3">En Direct</span>
            </div>
            <h4 className="sim-phase-title">Face-à-Face & Débat IA</h4>
            <p className="sim-phase-description">
              Capture audio continue haute fidélité. Après votre exposé, l'examinateur IA prend la parole 
              pour tester votre réactivité et vos arguments.
            </p>
            <div className="sim-phase-mic">
              <span className="material-symbols-outlined">mic</span>
              <span>Transcription en temps réel et scoring instantané</span>
            </div>
            <div className="sim-phase-footer">
              <span className="material-symbols-outlined">smart_toy</span>
              <span>L'IA interrompt et questionne vos arguments</span>
            </div>
          </div>
        </div>
      </div>

      {/* Catalog of Topics */}
      <div className="sim-catalog-section">
        <div className="sim-catalog-header">
          <h3 className="sim-catalog-title">Catalogue de Sujets Disponibles</h3>
          <div className="sim-catalog-search">
            <span className="material-symbols-outlined">search</span>
            <input type="text" placeholder="Rechercher par titre..." />
          </div>
        </div>

        <div className="sim-topics-grid">
          {filteredTopics.map((topic) => (
            <div key={topic.id} className="sim-topic-card">
              <div className="sim-topic-header">
                <span className="sim-topic-difficulty">{topic.difficulty}</span>
                {topic.attempts > 0 && (
                  <span className="sim-topic-attempts">{topic.attempts} tentatives</span>
                )}
              </div>
              
              <h4 className="sim-topic-title">{topic.title}</h4>
              <p className="sim-topic-description">{topic.description}</p>

              <div className="sim-topic-keywords">
                {topic.keywords.map((keyword, i) => (
                  <span key={i} className="sim-keyword">{keyword}</span>
                ))}
              </div>

              <div className="sim-topic-footer">
                <div className="sim-topic-meta">
                  <span className="material-symbols-outlined">schedule</span>
                  <span>{topic.duration}</span>
                </div>
                {topic.avgScore && (
                  <div className="sim-topic-score">
                    Score moy: <strong>{topic.avgScore}/100</strong>
                  </div>
                )}
                <button className="sim-topic-btn" onClick={() => handleStartExam(topic)}>
                  <span className="material-symbols-outlined">play_circle</span>
                  Lancer l'épreuve
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="sim-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="sim-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="sim-modal-close" onClick={() => setIsModalOpen(false)}>
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="sim-modal-icon">
              <span className="material-symbols-outlined">headset_mic</span>
            </div>
            <h3 className="sim-modal-title">Prêt à commencer ?</h3>
            <p className="sim-modal-text">
              Vous allez entrer dans la salle d'examen virtuelle. Assurez-vous d'être dans un 
              environnement calme avec un microphone fonctionnel.
            </p>
            <div className="sim-modal-checklist">
              <label>
                <input type="checkbox" />
                <span>Mon microphone est testé et fonctionnel</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>Je suis dans un environnement calme</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>J'ai lu les instructions de l'épreuve</span>
              </label>
            </div>
            <div className="sim-modal-actions">
              <button className="sim-modal-btn-secondary" onClick={() => setIsModalOpen(false)}>
                Annuler
              </button>
              <button className="sim-modal-btn-primary">
                <span className="material-symbols-outlined">headset_mic</span>
                Entrer dans la salle d'examen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
