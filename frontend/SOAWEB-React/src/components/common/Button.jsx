import './Button.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  iconRight,
  disabled,
  onClick,
  type = 'button',
  fullWidth,
  className = ''
}) {
  const classNames = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && 'btn--full',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="material-symbols-outlined btn-icon">{icon}</span>}
      <span>{children}</span>
      {iconRight && <span className="material-symbols-outlined btn-icon-right">{iconRight}</span>}
    </button>
  );
}
