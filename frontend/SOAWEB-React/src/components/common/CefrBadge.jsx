import './CefrBadge.css';

const levelColors = {
  B1: 'cefr-b1',
  B2: 'cefr-b2',
  C1: 'cefr-c1',
  C2: 'cefr-c2',
};

/**
 * CEFR pill badge: B1 | B2 | C1 | C2
 */
export default function CefrBadge({ level, variant = 'default', className = '' }) {
  const colorClass = levelColors[level] || 'cefr-b1';
  return (
    <span className={`cefr-badge ${colorClass} cefr-${variant} ${className}`}>
      {level}
    </span>
  );
}
