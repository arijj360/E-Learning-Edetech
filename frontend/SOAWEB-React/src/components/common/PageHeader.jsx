import './PageHeader.css';

export default function PageHeader({ title, subtitle, icon, action, breadcrumbs }) {
  return (
    <div className="page-header">
      {breadcrumbs && (
        <div className="page-breadcrumbs">
          {breadcrumbs.map((crumb, i) => (
            <span key={i}>
              {i > 0 && <span className="page-breadcrumb-sep">/</span>}
              <span className={crumb.active ? 'page-breadcrumb-active' : ''}>
                {crumb.label}
              </span>
            </span>
          ))}
        </div>
      )}
      <div className="page-header-main">
        <div className="page-header-left">
          {icon && (
            <div className="page-header-icon">
              <span className="material-symbols-outlined">{icon}</span>
            </div>
          )}
          <div>
            <h1 className="page-header-title">{title}</h1>
            {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
          </div>
        </div>
        {action && <div className="page-header-action">{action}</div>}
      </div>
    </div>
  );
}
