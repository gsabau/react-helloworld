export function ToggleButton({ onToggle, pressed }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={pressed}
      style={styles.button}
    >
      {pressed ? 'Show Hello World' : 'Show Hello Hello'}
    </button>
  );
}

const styles = {
  button: {
    marginTop: '1.5rem',
    padding: '0.7rem 1.15rem',
    border: '1px solid #334155',
    borderRadius: '999px',
    background: '#1e293b',
    color: '#f8fafc',
    font: 'inherit',
    fontSize: '0.95rem',
    cursor: 'pointer',
  },
};
