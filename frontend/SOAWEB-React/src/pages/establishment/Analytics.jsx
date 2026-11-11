import PageHeader from '../../components/common/StatCard';
import StatCard from '../../components/common/StatCard';
import Button from '../../components/common/Button';
import {
  mockInstitutionStats,
  mockCefrDistribution,
  mockPerformanceByGroup,
  mockInstitutionalAlerts,
  mockSkillsRadar
} from '../../services/mockData';
import './Analytics.css';

export default function Analytics() {
  const maxCefrCount = Math.max(...mockCefrDistribution.map(d => d.count));

  return (
    <div className="analytics-page">
      <PageHeader
        title="Pilotage Institutionnel"
        subtitle="Tableau de bord analytics et KPIs de votre établissement"
        icon="account_balance"
        breadcrumbs={[
          { label: 'Établissement' },
          { label: 'Pilotage', active: true },
        ]}
        action={<Button variant="primary" icon="download">Exporter le rapport</Button>}
      />

      {/* Institution Stats */}
      <div className="analytics-stats-grid">
        <StatCard
          label="Total Apprenants"
          value={mockInstitutionStats.totalLearners}
          icon="people"
          trend={8}
          iconBg="primary"
        />
        <StatCard
          label="Apprenants Actifs"
          value={mockInstitutionStats.activeLearners}
          icon="trending_up"
          badge={`${Math.round((mockInstitutionStats.activeLearners / mockInstitutionStats.totalLearners) * 100)}%`}
          badgeColor="success"
          iconBg="success"
        />
        <StatCard
          label="Score Moyen"
          value={mockInstitutionStats.avgScore}
          suffix="/100"
          icon="speed"
          trend={5}
          iconBg="warning"
        />
        <StatCard
          label="Taux de Réussite"
          value={mockInstitutionStats.successRate}
          suffix="%"
          icon="emoji_events"
          iconBg="success"
        />
      </div>

      {/* Main Grid */}
      <div className="analytics-main-grid">
        {/* CEFR Distribution */}
        <div className="analytics-card">
          <div className="analytics-card-header">
            <h3 className="analytics-card-title">Distribution CECRL</h3>
            <span className="analytics-card-subtitle">
              {mockInstitutionStats.totalLearners} apprenants totaux
            </span>
          </div>
          <div className="analytics-cefr-chart">
            {mockCefrDistribution.map((item) => {
              const percentage = (item.count / mockInstitutionStats.totalLearners) * 100;
              return (
                <div key={item.level} className="analytics-cefr-bar-col">
                  <div className="analytics-cefr-count">{item.count}</div>
                  <div className="analytics-cefr-bar-wrapper">
                    <div
                      className="analytics-cefr-bar"
                      style={{ height: `${(item.count / maxCefrCount) * 100}%` }}
                    />
                  </div>
                  <div className="analytics-cefr-label">{item.level}</div>
                  <div className="analytics-cefr-percentage">{percentage.toFixed(0)}%</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Performance by Group */}
        <div className="analytics-card">
          <div className="analytics-card-header">
            <h3 className="analytics-card-title">Performance par Groupe</h3>
            <span className="analytics-card-subtitle">Score moyen</span>
          </div>
          <div className="analytics-performance-list">
            {mockPerformanceByGroup.map((group) => (
              <div key={group.groupName} className="analytics-performance-item">
                <span className="analytics-performance-name">{group.groupName}</span>
                <div className="analytics-performance-bar-wrapper">
                  <div
                    className="analytics-performance-bar"
                    style={{ width: `${group.avgScore}%` }}
                  />
                </div>
                <span className="analytics-performance-score">{group.avgScore}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Analysis */}
      <div className="analytics-card">
        <div className="analytics-card-header">
          <h3 className="analytics-card-title">Analyse par Compétence (Établissement)</h3>
          <span className="analytics-card-subtitle">Forces et faiblesses institutionnelles</span>
        </div>
        <div className="analytics-skills-grid">
          {Object.entries(mockSkillsRadar).map(([skill, score]) => (
            <div key={skill} className="analytics-skill-item">
              <div className="analytics-skill-header">
                <span className="analytics-skill-name">
                  {skill === 'pronunciation' && 'Prononciation'}
                  {skill === 'fluency' && 'Fluidité'}
                  {skill === 'intonation' && 'Intonation'}
                  {skill === 'vocabulary' && 'Vocabulaire'}
                  {skill === 'grammar' && 'Grammaire'}
                  {skill === 'coherence' && 'Cohérence'}
                </span>
                <span className="analytics-skill-score">{score}/100</span>
              </div>
              <div className="analytics-skill-bar-bg">
                <div className="analytics-skill-bar" style={{ width: `${score}%` }} />
              </div>
              {score >= 85 ? (
                <span className="analytics-skill-status analytics-skill-status--strong">Point fort</span>
              ) : score < 80 ? (
                <span className="analytics-skill-status analytics-skill-status--weak">À renforcer</span>
              ) : (
                <span className="analytics-skill-status">Bon niveau</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Alerts & Recommendations */}
      <div className="analytics-alerts-section">
        <h3 className="analytics-section-title">Alertes & Recommandations</h3>
        <div className="analytics-alerts-grid">
          {mockInstitutionalAlerts.map((alert) => (
            <div key={alert.id} className={`analytics-alert analytics-alert--${alert.severity}`}>
              <div className="analytics-alert-icon">
                {alert.severity === 'high' && <span className="material-symbols-outlined">error</span>}
                {alert.severity === 'medium' && <span className="material-symbols-outlined">warning</span>}
                {alert.severity === 'low' && <span className="material-symbols-outlined">info</span>}
              </div>
              <div className="analytics-alert-content">
                <div className="analytics-alert-type">
                  {alert.type === 'low_progress' && 'Activité faible'}
                  {alert.type === 'declining_performance' && 'Performance en baisse'}
                  {alert.type === 'certification_ready' && 'Prêt pour certification'}
                </div>
                <div className="analytics-alert-message">{alert.message}</div>
                {alert.learnerName && (
                  <div className="analytics-alert-target">Apprenant: {alert.learnerName}</div>
                )}
                {alert.groupName && (
                  <div className="analytics-alert-target">Groupe: {alert.groupName}</div>
                )}
              </div>
              <Button variant="ghost" icon="arrow_forward" size="sm">
                Voir
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="analytics-summary-grid">
        <div className="analytics-summary-card">
          <span className="material-symbols-outlined analytics-summary-icon">groups</span>
          <div>
            <div className="analytics-summary-value">{mockInstitutionStats.totalGroups}</div>
            <div className="analytics-summary-label">Groupes Actifs</div>
          </div>
        </div>
        <div className="analytics-summary-card">
          <span className="material-symbols-outlined analytics-summary-icon">person</span>
          <div>
            <div className="analytics-summary-value">{mockInstitutionStats.totalTrainers}</div>
            <div className="analytics-summary-label">Formateurs</div>
          </div>
        </div>
        <div className="analytics-summary-card">
          <span className="material-symbols-outlined analytics-summary-icon">verified</span>
          <div>
            <div className="analytics-summary-value">{mockInstitutionStats.certificationReadiness}%</div>
            <div className="analytics-summary-label">Prêts Certification</div>
          </div>
        </div>
      </div>
    </div>
  );
}
