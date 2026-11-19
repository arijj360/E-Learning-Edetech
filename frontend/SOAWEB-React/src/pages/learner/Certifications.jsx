import { useState } from 'react';
import './Certifications.css';

export default function Certifications() {
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  const criteriaData = [
    { name: 'Prononciation & Articulation', score: 88, required: 75, validated: true },
    { name: 'Fluidité & Débit Vocal', score: 82, required: 75, validated: true },
    { name: 'Intonation & Prosodie', score: 84, required: 75, validated: true },
    { name: 'Vocabulaire & Registre', score: 92, required: 80, validated: true },
    { name: 'Morphosyntaxe & Subjonctif', score: 86, required: 80, validated: true },
    { name: 'Cohérence & Stratégie', score: 89, required: 80, validated: true }
  ];

  const certifications = [
    {
      id: 1,
      name: 'DALF C1',
      provider: 'France Éducation International',
      level: 'C1',
      language: 'Français',
      duration: 'Oral : 45 min',
      validity: 'Validité à vie',
      eligibility: 94,
      status: 'Prêt pour inscription',
      description: 'Niveau d\'utilisateur expérimenté autonome.',
      format: 'Synthèse + débat'
    },
    {
      id: 2,
      name: 'DALF C2',
      provider: 'France Éducation International',
      level: 'C2',
      language: 'Français',
      duration: 'Oral : 60 min',
      validity: 'Validité à vie',
      eligibility: 78,
      status: 'En préparation active',
      description: 'Maîtrise d\'exception & aisance native.',
      format: 'Jury expert'
    },
    {
      id: 3,
      name: 'Cambridge C1 Advanced',
      provider: 'Cambridge Assessment English',
      level: 'C1',
      language: 'Anglais',
      duration: 'Oral : 15 min',
      validity: 'Validité à vie',
      eligibility: 72,
      status: 'Entraînement requis',
      description: 'Certifie un niveau avancé en anglais.',
      format: 'Conversation + présentation'
    },
    {
      id: 4,
      name: 'IELTS Academic',
      provider: 'British Council / IDP',
      level: 'C1-C2',
      language: 'Anglais',
      duration: 'Oral : 11-14 min',
      validity: '2 ans',
      eligibility: 68,
      status: 'Préparation longue requise',
      description: 'Test académique reconnu mondialement.',
      format: 'Interview structurée'
    }
  ];

  const attestations = [
    {
      id: 1,
      title: 'Attestation ORALIS — Niveau C1 Consolidé',
      level: 'C1.2',
      issueDate: '2024-03-15',
      score: 87,
      seal: 'ORX-2024-C1-00142',
      type: 'ORALIS',
      validationDate: '15 mars 2024'
    },
    {
      id: 2,
      title: 'Certificat de Participation — Module Avancé CECRL',
      level: 'C1',
      issueDate: '2024-02-28',
      score: 84,
      seal: 'ORX-2024-MOD-00098',
      type: 'Module',
      validationDate: '28 février 2024'
    }
  ];

  return (
    <div className="certifications-page">
      {/* Page Header */}
      <header className="certifications-header">
        <div className="certifications-breadcrumb">
          <span className="breadcrumb-item">Espace Apprenant</span>
          <span className="material-symbols-outlined">chevron_right</span>
          <span className="breadcrumb-item breadcrumb-item--active">Certifications & Attestations</span>
        </div>
        <h1 className="certifications-title">Certifications Officielles & Attestations de Compétence</h1>
        <p className="certifications-subtitle">
          Consultez votre éligibilité aux certifications nationales et internationales (DALF, DELF, TCF, Cambridge, IELTS) 
          et téléchargez vos attestations scellées par ORALIS.
        </p>
        <div className="certifications-actions">
          <a href="#referentiel-cecrl" className="btn-secondary">
            <span className="material-symbols-outlined">menu_book</span>
            <span>Consulter le référentiel CECRL officiel</span>
          </a>
          <button className="btn-primary" onClick={() => setShowVerificationModal(true)}>
            <span className="material-symbols-outlined">verified_user</span>
            <span>Vérifier l'authenticité d'un scellement</span>
          </button>
        </div>
      </header>

      {/* Section 1: Admissibility & Global Preparation */}
      <section className="admissibility-section">
        {/* Left: Readiness Gauge Card */}
        <div className="admissibility-card">
          <div className="admissibility-ambient"></div>
          <div className="admissibility-content">
            <div className="admissibility-header">
              <span className="admissibility-badge">Indice d'Admissibilité FEI</span>
              <span className="admissibility-session">Session Mai 2025</span>
            </div>
            <h2 className="admissibility-title">DALF C1 / C2 — Préparation Globale</h2>
            <p className="admissibility-description">
              Conformité aux exigences de l'épreuve orale de production et d'interaction.
            </p>
          </div>

          {/* Circular Gauge */}
          <div className="gauge-container">
            <div className="circular-gauge">
              <svg className="gauge-svg" viewBox="0 0 120 120">
                <circle className="gauge-bg" cx="60" cy="60" r="50" fill="transparent" strokeWidth="10" />
                <circle 
                  className="gauge-fill" 
                  cx="60" cy="60" 
                  r="50" 
                  fill="transparent" 
                  strokeWidth="10"
                  strokeDasharray="314.16"
                  strokeDashoffset="37.7"
                  strokeLinecap="round"
                />
              </svg>
              <div className="gauge-center">
                <span className="gauge-value">88%</span>
                <span className="gauge-label">Accomplie</span>
              </div>
            </div>

            <div className="gauge-stats">
              <div className="gauge-stat-item">
                <span className="gauge-stat-dot"></span>
                <span className="gauge-stat-label">Seuil d'admissibilité franchi (&gt;75%)</span>
              </div>
              <p className="gauge-stat-description">
                Vos enregistrements studios récents confirment l'assimilation des registres formels et de 
                l'argumentation spontanée en contexte académique.
              </p>
              <div className="gauge-stat-meta">
                <span><strong>32</strong> heures d'écoute validées</span>
                <span>•</span>
                <span><strong>14</strong> simulations jury</span>
              </div>
            </div>
          </div>

          {/* Trainer Feedback */}
          <div className="trainer-feedback">
            <img 
              src="https://i.pravatar.cc/150?img=12" 
              alt="Marc V." 
              className="trainer-avatar"
            />
            <div className="trainer-content">
              <div className="trainer-header">
                <span className="trainer-name">Marc V.</span>
                <span className="trainer-role">Formateur Référent & Jury FEI</span>
              </div>
              <p className="trainer-quote">
                « Dossier d'admissibilité complet. Présentation recommandée pour la session de Mai 2025. 
                Accentuation rhétorique et rigueur syntaxique parfaitement alignées avec les exigences C1. »
              </p>
            </div>
          </div>
        </div>

        {/* Right: 6 Criteria Breakdown */}
        <div className="criteria-breakdown">
          <div className="criteria-header">
            <div>
              <h3 className="criteria-title">Grille d'Évaluation CECRL & FEI (6 Critères)</h3>
              <span className="criteria-subtitle">
                Étalonnage algorithmique vérifié par supervision humaine continue.
              </span>
            </div>
            <span className="criteria-badge">
              <span className="material-symbols-outlined">check_circle</span>
              6 / 6 Critères Validés
            </span>
          </div>

          <div className="criteria-grid">
            {criteriaData.map((criterion) => (
              <div key={criterion.name} className="criterion-card">
                <div className="criterion-header">
                  <span className="criterion-name">{criterion.name}</span>
                  <div className="criterion-score">
                    <span className="criterion-value">{criterion.score}</span>
                    <span className="criterion-max">/100</span>
                  </div>
                </div>
                <div className="criterion-bar-bg">
                  <div 
                    className="criterion-bar" 
                    style={{ width: `${criterion.score}%` }}
                  />
                </div>
                <div className="criterion-footer">
                  <span className="criterion-required">Requis : {criterion.required}/100</span>
                  <span className="criterion-status">
                    <span className="material-symbols-outlined">done</span>
                    Validé
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="criteria-footer">
            <span>Dernière révision le 18 Mars 2025 à 16:42 UTC</span>
            <a href="#" className="criteria-link">
              <span>Détail des 24 descripteurs phonétiques</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: Certifications Catalogue */}
      <section className="catalogue-section">
        <div className="catalogue-header">
          <div>
            <span className="catalogue-label">Diplômes & Tests Internationaux</span>
            <h2 className="catalogue-title">Catalogue des Certifications & Éligibilité</h2>
          </div>
          <span className="catalogue-subtitle">
            4 parcours d'examen synchronisés avec vos compétences orales
          </span>
        </div>

        <div className="catalogue-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-card-header">
                <span className={`cert-eligibility ${cert.eligibility >= 90 ? 'cert-eligibility--high' : cert.eligibility >= 75 ? 'cert-eligibility--medium' : 'cert-eligibility--low'}`}>
                  Éligibilité {cert.eligibility}%
                </span>
                <span className={`cert-status ${cert.status.includes('Prêt') ? 'cert-status--ready' : cert.status.includes('préparation') ? 'cert-status--progress' : 'cert-status--training'}`}>
                  {cert.status}
                </span>
              </div>

              <div className="cert-card-body">
                <span className="cert-provider">{cert.provider}</span>
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-description">{cert.description}</p>
              </div>

              <div className="cert-card-details">
                <div className="cert-detail-item">
                  <span className="material-symbols-outlined">timer</span>
                  <span>{cert.duration}</span>
                </div>
                <div className="cert-detail-item">
                  <span className="material-symbols-outlined">translate</span>
                  <span>{cert.language} • {cert.validity}</span>
                </div>
              </div>

              <div className="cert-card-actions">
                <button className="btn-cert-primary">
                  <span className="material-symbols-outlined">play_circle</span>
                  <span>Démarrer simulation dédiée</span>
                </button>
                <button className="btn-cert-secondary">
                  Rapport d'admissibilité
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Attestations */}
      <section className="attestations-section">
        <div className="attestations-header">
          <div>
            <span className="attestations-label">Documents Officiels ORALIS</span>
            <h2 className="attestations-title">Mes Attestations & Certificats</h2>
          </div>
          <span className="attestations-subtitle">
            {attestations.length} attestation(s) scellée(s) disponible(s) au téléchargement
          </span>
        </div>

        <div className="attestations-grid">
          {attestations.map((att) => (
            <div key={att.id} className="attestation-card">
              <div className="attestation-icon">
                <span className="material-symbols-outlined">workspace_premium</span>
              </div>

              <div className="attestation-content">
                <div className="attestation-type">{att.type === 'ORALIS' ? 'Attestation Officielle' : 'Certificat de Module'}</div>
                <h3 className="attestation-title">{att.title}</h3>
                
                <div className="attestation-details">
                  <div className="attestation-detail">
                    <span className="detail-label">Niveau Certifié</span>
                    <span className="detail-value">{att.level}</span>
                  </div>
                  <div className="attestation-detail">
                    <span className="detail-label">Score Global</span>
                    <span className="detail-value">{att.score}/100</span>
                  </div>
                  <div className="attestation-detail">
                    <span className="detail-label">Date de Validation</span>
                    <span className="detail-value">{att.validationDate}</span>
                  </div>
                  <div className="attestation-detail">
                    <span className="detail-label">Sceau Numérique</span>
                    <span className="detail-value detail-value--seal">{att.seal}</span>
                  </div>
                </div>
              </div>

              <div className="attestation-actions">
                <button className="btn-attestation-view">
                  <span className="material-symbols-outlined">visibility</span>
                  <span>Prévisualiser</span>
                </button>
                <button className="btn-attestation-download">
                  <span className="material-symbols-outlined">download</span>
                  <span>Télécharger PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verification Modal */}
      {showVerificationModal && (
        <div className="modal-overlay" onClick={() => setShowVerificationModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Vérification de Sceau Numérique</h3>
              <button className="modal-close" onClick={() => setShowVerificationModal(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="modal-description">
                Entrez le code de sceau numérique pour vérifier l'authenticité d'une attestation ORALIS.
              </p>
              <input 
                type="text" 
                className="modal-input"
                placeholder="Ex: ORX-2024-C1-00142"
              />
              <button className="btn-modal-verify">
                <span className="material-symbols-outlined">verified_user</span>
                <span>Vérifier le sceau</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
