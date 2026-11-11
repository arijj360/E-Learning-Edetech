import { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import StatCard from '../../components/common/StatCard';
import Button from '../../components/common/Button';
import { mockPendingEvaluations, mockEvaluationDetail } from '../../services/mockData';
import './FeedbackValidation.css';

export default function FeedbackValidation() {
  const [selectedEval, setSelectedEval] = useState(null);
  const [trainerScores, setTrainerScores] = useState(null);
  const [trainerComment, setTrainerComment] = useState('');

  const pendingCount = mockPendingEvaluations.filter(e => e.status === 'pending').length;
  const avgAutoScore = mockPendingEvaluations.reduce((acc, e) => acc + e.autoScore, 0) / mockPendingEvaluations.length;
  
  const handleReview = (evaluationId) => {
    setSelectedEval(mockEvaluationDetail);
    setTrainerScores(mockEvaluationDetail.aiEvaluation.criteria.reduce((acc, c) => ({
      ...acc,
      [c.name]: c.score
    }), {}));
  };

  const handleValidate = () => {
    alert('Évaluation validée avec succès !');
    setSelectedEval(null);
    setTrainerScores(null);
    setTrainerComment('');
  };

  const adjustScore = (criterion, delta) => {
    setTrainerScores(prev => ({
      ...prev,
      [criterion]: Math.max(0, Math.min(100, prev[criterion] + delta))
    }));
  };

  return (
    <div className="validation-page">
      {!selectedEval ? (
        <>
          <PageHeader
            title="Validation Formateur"
            subtitle="Validez et ajustez les évaluations automatiques"
            icon="assignment_turned_in"
            breadcrumbs={[
              { label: 'Encadrement' },
              { label: 'Validation', active: true },
            ]}
          />

          <div className="validation-stats-grid">
            <StatCard
              label="En Attente"
              value={pendingCount}
              icon="pending_actions"
              badge="À valider"
              badgeColor="warning"
              iconBg="warning"
            />
            <StatCard
              label="Validées Aujourd'hui"
              value="8"
              icon="task_alt"
              iconBg="success"
            />
            <StatCard
              label="Score Auto Moyen"
              value={avgAutoScore.toFixed(0)}
              suffix="/100"
              icon="smart_toy"
              iconBg="primary"
            />
            <StatCard
              label="Taux d'Accord IA"
              value="94"
              suffix="%"
              icon="thumb_up"
              trend={3}
              iconBg="success"
            />
          </div>

          <div className="validation-list">
            <h2 className="validation-section-title">Évaluations en Attente</h2>
            {mockPendingEvaluations.map((evaluation) => (
              <div key={evaluation.id} className="validation-card">
                <div className="validation-card-header">
                  <div className="validation-learner-info">
                    <div className="validation-learner-avatar">
                      {evaluation.learnerName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="validation-learner-name">{evaluation.learnerName}</h3>
                      <div className="validation-card-meta">
                        <span className="material-symbols-outlined">calendar_today</span>
                        <span>{new Date(evaluation.recordingDate).toLocaleDateString('fr-FR')}</span>
                        <span>•</span>
                        <span>{evaluation.duration}</span>
                        <span>•</span>
                        <span>{evaluation.cefrLevel}</span>
                      </div>
                    </div>
                  </div>
                  <div className="validation-auto-score">
                    <span className="validation-auto-score-label">Score IA</span>
                    <span className="validation-auto-score-value">{evaluation.autoScore}/100</span>
                  </div>
                </div>
                
                <div className="validation-card-topic">
                  <span className="material-symbols-outlined">subject</span>
                  <span>{evaluation.topic}</span>
                </div>

                {evaluation.status === 'attention' && (
                  <div className="validation-alert">
                    <span className="material-symbols-outlined">priority_high</span>
                    <span>Cette évaluation nécessite une attention particulière</span>
                  </div>
                )}

                <Button
                  variant="primary"
                  icon="rate_review"
                  onClick={() => handleReview(evaluation.id)}
                >
                  Réviser l'évaluation
                </Button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="validation-review-screen">
          <div className="validation-review-header">
            <Button
              variant="ghost"
              icon="arrow_back"
              onClick={() => setSelectedEval(null)}
            >
              Retour à la liste
            </Button>
          </div>

          <div className="validation-review-grid">
            {/* Left: Recording & Transcript */}
            <div className="validation-review-left">
              <div className="validation-learner-card">
                <h3>Apprenant</h3>
                <div className="validation-learner-details">
                  <div className="validation-learner-avatar-large">
                    {selectedEval.learner.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="validation-learner-name-large">{selectedEval.learner.name}</div>
                    <div className="validation-learner-email">{selectedEval.learner.email}</div>
                    <div className="validation-learner-level">Niveau actuel: {selectedEval.learner.currentLevel}</div>
                  </div>
                </div>
              </div>

              <div className="validation-recording-card">
                <h3>Enregistrement</h3>
                <div className="validation-recording-info">
                  <div><strong>Date:</strong> {new Date(selectedEval.recording.date).toLocaleDateString('fr-FR')}</div>
                  <div><strong>Durée:</strong> {selectedEval.recording.duration}</div>
                  <div><strong>Sujet:</strong> {selectedEval.recording.topic}</div>
                </div>
                
                <div className="validation-audio-player">
                  <button className="validation-play-btn">
                    <span className="material-symbols-outlined">play_arrow</span>
                  </button>
                  <div className="validation-audio-waveform">
                    {[...Array(30)].map((_, i) => (
                      <div key={i} className="validation-wave-bar" style={{ height: `${Math.random() * 100}%` }} />
                    ))}
                  </div>
                  <span className="validation-audio-time">00:00 / 04:32</span>
                </div>
              </div>

              <div className="validation-transcript-card">
                <h3>Transcription</h3>
                <div className="validation-transcript-text">
                  {selectedEval.transcript}
                </div>
              </div>
            </div>

            {/* Right: AI Evaluation & Trainer Validation */}
            <div className="validation-review-right">
              <div className="validation-ai-eval-card">
                <div className="validation-ai-header">
                  <h3>Évaluation Automatique (IA)</h3>
                  <span className="validation-ai-badge">
                    <span className="material-symbols-outlined">smart_toy</span>
                    Score: {selectedEval.aiEvaluation.overallScore}/100
                  </span>
                </div>

                <div className="validation-criteria-list">
                  {selectedEval.aiEvaluation.criteria.map((criterion) => (
                    <div key={criterion.name} className="validation-criterion">
                      <div className="validation-criterion-header">
                        <span className="validation-criterion-name">{criterion.name}</span>
                        <div className="validation-score-adjuster">
                          <button onClick={() => adjustScore(criterion.name, -5)} className="validation-score-btn">
                            <span className="material-symbols-outlined">remove</span>
                          </button>
                          <span className="validation-criterion-score">
                            {trainerScores[criterion.name]}/100
                          </span>
                          <button onClick={() => adjustScore(criterion.name, 5)} className="validation-score-btn">
                            <span className="material-symbols-outlined">add</span>
                          </button>
                        </div>
                      </div>
                      <div className="validation-criterion-bar-bg">
                        <div 
                          className="validation-criterion-bar" 
                          style={{ width: `${trainerScores[criterion.name]}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="validation-ai-insights">
                  <div className="validation-insight-section">
                    <h4>
                      <span className="material-symbols-outlined">check_circle</span>
                      Points Forts (IA)
                    </h4>
                    <ul>
                      {selectedEval.aiEvaluation.strengths.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="validation-insight-section">
                    <h4>
                      <span className="material-symbols-outlined">error</span>
                      Points d'Amélioration (IA)
                    </h4>
                    <ul>
                      {selectedEval.aiEvaluation.weaknesses.map((w, i) => (
                        <li key={i}>{w}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="validation-trainer-comment-card">
                <h3>Commentaire Formateur</h3>
                <textarea
                  className="validation-comment-textarea"
                  placeholder="Ajoutez vos commentaires personnalisés et recommandations..."
                  value={trainerComment}
                  onChange={(e) => setTrainerComment(e.target.value)}
                  rows="6"
                />
              </div>

              <div className="validation-actions">
                <Button variant="outline" icon="close">
                  Rejeter
                </Button>
                <Button variant="primary" icon="check_circle" onClick={handleValidate}>
                  Valider l'Évaluation
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
