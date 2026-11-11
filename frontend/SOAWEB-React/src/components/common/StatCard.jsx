import './StatCard.css';

export default function StatCard({ label, value, suffix, icon, badge, badgeColor, trend, iconBg = 'primary' }) {
  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <span className="stat-card-label">{label}</span>
        {icon && (
          <div className={`stat-card-icon stat-card-icon--${iconBg}`}>
            <span className="material-symbols-outlined">{icon}</span>
          </div>
        )}
      </div>
      <div className="stat-card-value-row">
        <span className="stat-card-value">
          {value}
          {suffix && <span className="stat-card-suffix">{suffix}</span>}
        </span>
        {badge && (
          <span className={`stat-card-badge stat-card-badge--${badgeColor || 'primary'}`}>
            {badge}
          </span>
        )}
      </div>
      {trend && (
        <div className={`stat-card-trend stat-card-trend--${trend > 0 ? 'up' : 'down'}`}>
          <span className="material-symbols-outlined">
            {trend > 0 ? 'trending_up' : 'trending_down'}
          </span>
          <span>{Math.abs(trend)}%</span>
        </div>
      )}
    </div>
  );
}
