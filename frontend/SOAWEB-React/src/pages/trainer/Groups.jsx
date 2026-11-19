import { useState } from 'react';
import './Groups.css';

export default function Groups() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const groups = [
    {
      id: 1,
      name: 'DALF C1 Élite — UFR Lettres & Langues',
      cohort: 'Cohorte #C1-PARIS-24 • Sorbonne Master FLE',
      level: 'C1',
      language: 'Français FLE',
      learners: 18,
      activePercent: 100,
      attendance: 92,
      hoursPerWeek: 2.8,
      avgScore: 84.6,
      scoreChange: 4.2,
      status: 'Actif',
      examDate: '18 Mai'
    },
    {
      id: 2,
      name: 'DALF C2 Sciences Po — Préparation Entrée École',
      cohort: 'Cohorte #C2-SCP-24 • Institut d\'Études Politiques',
      level: 'C2',
      language: 'Français',
      learners: 12,
      activePercent: 100,
      attendance: 87,
      hoursPerWeek: 3.1,
      avgScore: 89.2,
      scoreChange: 2.8,
      status: 'Actif',
      examDate: '25 Mai'
    },
    {
      id: 3,
      name: 'DELF B2 Ingénieurs — Formation Continue',
      cohort: 'Cohorte #B2-ENG-24 • Centrale Supélec',
      level: 'B2',
      language: 'Français',
      learners: 22,
      activePercent: 95,
      attendance: 78,
      hoursPerWeek: 2.2,
      avgScore: 76.8,
      scoreChange: -1.5,
      status: 'Actif',
      examDate: '10 Juin'
    },
    {
      id: 4,
      name: 'IELTS Academic — Programme International',
      cohort: 'Cohorte #IELTS-INT-24 • Business School Paris',
      level: 'IELTS',
      language: 'Anglais',
      learners: 16,
      activePercent: 88,
      attendance: 85,
      hoursPerWeek: 2.5,
      avgScore: 79.4,
      scoreChange: 3.6,
      status: 'Actif',
      examDate: '02 Juin'
    }
  ];

  const filteredGroups = groups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          group.cohort.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || 
                          (selectedFilter === 'C1' && group.level === 'C1') ||
                          (selectedFilter === 'B2' && group.level === 'B2') ||
                          (selectedFilter === 'IELTS' && group.level === 'IELTS');
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="groups-page">
      {/* Breadcrumb */}
      <div className="groups-breadcrumb">
        <span className="groups-breadcrumb-item">Formateur</span>
        <span className="material-symbols-outlined">chevron_right</span>
        <span className="groups-breadcrumb-item groups-breadcrumb-active">Mes Groupes & Classes</span>
      </div>

      {/* Page Header */}
      <div className="groups-header">
        <div className="groups-header-content">
          <h1 className="groups-title">Gestion des Groupes & Suivi des Cohortes</h1>
          <p className="groups-subtitle">
            Supervisez vos 4 groupes d'entraînement oral, paramétrez les grilles de notation CECRL 
            et suivez la progression comparative des apprenants.
          </p>
        </div>
        <div className="groups-header-actions">
          <button className="groups-btn groups-btn-outline">
            <span className="material-symbols-outlined">upload_file</span>
            <span>Importer (CSV)</span>
          </button>
          <button className="groups-btn groups-btn-outline">
            <span className="material-symbols-outlined">picture_as_pdf</span>
            <span>Rapport Promo (PDF)</span>
          </button>
          <button className="groups-btn groups-btn-primary" onClick={() => setIsPanelOpen(true)}>
            <span className="material-symbols-outlined">group_add</span>
            <span>Créer un nouveau groupe</span>
          </button>
        </div>
      </div>

      {/* KPI Section */}
      <div className="groups-kpi-grid">
        <div className="groups-kpi-card">
          <div className="groups-kpi-header">
            <span className="groups-kpi-label">Groupes Actifs</span>
            <div className="groups-kpi-icon groups-kpi-icon-default">
              <span className="material-symbols-outlined">groups_3</span>
            </div>
          </div>
          <div className="groups-kpi-value">4</div>
          <p className="groups-kpi-description">Promotions sous supervision</p>
          <div className="groups-kpi-status">
            <span className="groups-kpi-pulse"></span>
            <span>100% actives ce semestre</span>
          </div>
        </div>

        <div className="groups-kpi-card">
          <div className="groups-kpi-header">
            <span className="groups-kpi-label">Effectif Global</span>
            <div className="groups-kpi-icon groups-kpi-icon-primary">
              <span className="material-symbols-outlined">record_voice_over</span>
            </div>
          </div>
          <div className="groups-kpi-value">68</div>
          <p className="groups-kpi-description">Apprenants encadrés</p>
          <div className="groups-kpi-meta">
            <span className="material-symbols-outlined">school</span>
            <span>Moyenne 17 / cohorte</span>
          </div>
        </div>

        <div className="groups-kpi-card">
          <div className="groups-kpi-header">
            <span className="groups-kpi-label">Assiduité Studio</span>
            <div className="groups-kpi-icon groups-kpi-icon-default">
              <span className="material-symbols-outlined">mic</span>
            </div>
          </div>
          <div className="groups-kpi-value">88.4%</div>
          <p className="groups-kpi-description">Présence hebdomadaire</p>
          <div className="groups-kpi-progress">
            <div className="groups-kpi-progress-bar" style={{ width: '88.4%' }}></div>
          </div>
        </div>

        <div className="groups-kpi-card">
          <div className="groups-kpi-header">
            <span className="groups-kpi-label">Score Global</span>
            <div className="groups-kpi-icon groups-kpi-icon-default">
              <span className="material-symbols-outlined">auto_graph</span>
            </div>
          </div>
          <div className="groups-kpi-value-flex">
            <span className="groups-kpi-value">82.5</span>
            <span className="groups-kpi-unit">/100</span>
          </div>
          <p className="groups-kpi-description">Performance CECRL pondérée</p>
          <div className="groups-kpi-trend">
            <span className="material-symbols-outlined">trending_up</span>
            <span>+3.1 pts ce mois</span>
          </div>
        </div>

        <div className="groups-kpi-card groups-kpi-card-alert">
          <div className="groups-kpi-header">
            <span className="groups-kpi-label groups-kpi-label-alert">Alertes Actives</span>
            <div className="groups-kpi-icon groups-kpi-icon-alert">
              <span className="material-symbols-outlined">warning</span>
            </div>
          </div>
          <div className="groups-kpi-value groups-kpi-value-alert">3</div>
          <p className="groups-kpi-description groups-kpi-description-alert">Apprenants en remédiation</p>
          <div className="groups-kpi-alert-footer">
            <span className="material-symbols-outlined">priority_high</span>
            <span>Intervention requise</span>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="groups-toolbar">
        <div className="groups-search">
          <span className="material-symbols-outlined">search</span>
          <input
            type="text"
            placeholder="Rechercher par groupe, niveau CECRL, code cohorte..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="groups-filters">
          <div className="groups-filter-pills">
            <button
              className={`groups-filter-pill ${selectedFilter === 'all' ? 'groups-filter-pill-active' : ''}`}
              onClick={() => setSelectedFilter('all')}
            >
              Tous (4)
            </button>
            <button
              className={`groups-filter-pill ${selectedFilter === 'C1' ? 'groups-filter-pill-active' : ''}`}
              onClick={() => setSelectedFilter('C1')}
            >
              DALF C1 (2)
            </button>
            <button
              className={`groups-filter-pill ${selectedFilter === 'B2' ? 'groups-filter-pill-active' : ''}`}
              onClick={() => setSelectedFilter('B2')}
            >
              DELF B2 (1)
            </button>
            <button
              className={`groups-filter-pill ${selectedFilter === 'IELTS' ? 'groups-filter-pill-active' : ''}`}
              onClick={() => setSelectedFilter('IELTS')}
            >
              IELTS (1)
            </button>
          </div>
          <div className="groups-divider"></div>
          <div className="groups-select-wrapper">
            <select className="groups-select">
              <option>Statut : Tous actifs</option>
              <option>En phase d'examen</option>
              <option>Archivés</option>
            </select>
            <span className="material-symbols-outlined">expand_more</span>
          </div>
          <div className="groups-select-wrapper">
            <select className="groups-select">
              <option>Trier par performance</option>
              <option>Trier par effectif</option>
              <option>Trier par date d'examen</option>
            </select>
            <span className="material-symbols-outlined">sort</span>
          </div>
        </div>
      </div>

      {/* Groups Table */}
      <div className="groups-table-container">
        <div className="groups-table-header">
          <div className="groups-table-header-left">
            <h2 className="groups-table-title">Cohortes & Grilles Évaluées</h2>
            <span className="groups-table-badge">{filteredGroups.length} actives</span>
          </div>
          <span className="groups-table-hint">Cliquez sur une ligne pour charger le diagnostic détaillé</span>
        </div>
        <div className="groups-table-wrapper">
          <table className="groups-table">
            <thead>
              <tr>
                <th>Groupe & Cohorte</th>
                <th>Niveau & Langue</th>
                <th>Effectif</th>
                <th>Assiduité Vocale</th>
                <th>Score Moyen</th>
                <th>Statut & Échéance</th>
                <th className="groups-table-actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredGroups.map((group, index) => (
                <tr key={group.id} className={index === 0 ? 'groups-table-row-selected' : ''}>
                  <td>
                    <div className="groups-table-group">
                      <div className={`groups-table-avatar ${group.level === 'C2' ? 'groups-table-avatar-secondary' : ''}`}>
                        {group.level}
                      </div>
                      <div className="groups-table-group-info">
                        <div className="groups-table-group-name">{group.name}</div>
                        <div className="groups-table-group-cohort">{group.cohort}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="groups-table-level-info">
                      <span className="groups-table-level-badge">{group.level}</span>
                      <span className="groups-table-language">{group.language}</span>
                    </div>
                  </td>
                  <td>
                    <div className="groups-table-learners">
                      <span className="groups-table-learners-count">{group.learners} apprenants</span>
                      <span className="groups-table-learners-active">
                        <span className="groups-table-active-dot"></span> {group.activePercent}% actifs
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="groups-table-attendance">
                      <div className="groups-table-attendance-header">
                        <span className="groups-table-attendance-percent">{group.attendance}%</span>
                        <span className="groups-table-attendance-hours">~{group.hoursPerWeek}h/sem</span>
                      </div>
                      <div className="groups-table-progress">
                        <div className="groups-table-progress-bar" style={{ width: `${group.attendance}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="groups-table-score">
                      <span className="groups-table-score-value">{group.avgScore}</span>
                      <span className={`groups-table-score-change ${group.scoreChange < 0 ? 'groups-table-score-negative' : ''}`}>
                        {group.scoreChange > 0 ? '+' : ''}{group.scoreChange}%
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="groups-table-status">
                      <span className="groups-table-status-badge">{group.status}</span>
                      <span className="groups-table-exam-date">Examen blanc : {group.examDate}</span>
                    </div>
                  </td>
                  <td className="groups-table-actions">
                    <div className="groups-table-actions-buttons">
                      <button className="groups-table-btn-primary">Consulter</button>
                      <button className="groups-table-btn-icon">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Slideout Panel */}
      <div className={`groups-slideout ${isPanelOpen ? 'groups-slideout-open' : ''}`}>
        <div className="groups-slideout-overlay" onClick={() => setIsPanelOpen(false)}></div>
        <div className="groups-slideout-panel">
          <div className="groups-slideout-header">
            <h3 className="groups-slideout-title">Créer un Nouveau Groupe</h3>
            <button className="groups-slideout-close" onClick={() => setIsPanelOpen(false)}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="groups-slideout-content">
            <div className="groups-form-group">
              <label className="groups-form-label">Nom du groupe</label>
              <input type="text" className="groups-form-input" placeholder="Ex: DALF C1 Élite" />
            </div>
            <div className="groups-form-group">
              <label className="groups-form-label">Code cohorte</label>
              <input type="text" className="groups-form-input" placeholder="Ex: C1-PARIS-24" />
            </div>
            <div className="groups-form-row">
              <div className="groups-form-group">
                <label className="groups-form-label">Niveau CECRL</label>
                <select className="groups-form-select">
                  <option>A1</option>
                  <option>A2</option>
                  <option>B1</option>
                  <option>B2</option>
                  <option>C1</option>
                  <option>C2</option>
                </select>
              </div>
              <div className="groups-form-group">
                <label className="groups-form-label">Langue</label>
                <select className="groups-form-select">
                  <option>Français</option>
                  <option>Anglais</option>
                  <option>Espagnol</option>
                </select>
              </div>
            </div>
            <div className="groups-form-row">
              <div className="groups-form-group">
                <label className="groups-form-label">Date de début</label>
                <input type="date" className="groups-form-input" />
              </div>
              <div className="groups-form-group">
                <label className="groups-form-label">Date de fin</label>
                <input type="date" className="groups-form-input" />
              </div>
            </div>
          </div>
          <div className="groups-slideout-footer">
            <button className="groups-btn groups-btn-outline" onClick={() => setIsPanelOpen(false)}>
              Annuler
            </button>
            <button className="groups-btn groups-btn-primary">
              Créer le groupe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
