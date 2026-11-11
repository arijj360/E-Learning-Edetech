import styles from './OralisBrand.module.css';

/**
 * ORALIS logo mark + wordmark, used in headers & sidebar.
 * size: 'sm' | 'md' | 'lg'
 * light: boolean — white variant for dark backgrounds
 */
export default function OralisBrand({ size = 'md', light = false }) {
  const dim = size === 'sm' ? 36 : size === 'lg' ? 48 : 40;
  const iconSize = size === 'sm' ? 18 : size === 'lg' ? 24 : 20;

  return (
    <div className={`${styles['oralis-brand']} ${light ? styles['oralis-brand--light'] : ''}`}>
      <div
        className={styles['brand-icon']}
        style={{ width: dim, height: dim }}
        aria-hidden="true"
      >
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 20h2V4H2zm4 0h2V8H6zm4 0h2V12h-2zm4 0h2V6h-2zm4 0h2V10h-2z"/>
        </svg>
      </div>
      <div className={styles['brand-text']}>
        <span className={`${styles['brand-name']} ${styles[`brand-text-${size}`]}`}>ORALIS</span>
        {size !== 'sm' && (
          <span className={styles['brand-sub']}>Audio Cognitive AI</span>
        )}
      </div>
    </div>
  );
}
