export function ToggleButton(/* TODO: receive onToggle and pressed as props */) {
  return (
    <button
      type="button"
      // TODO: Call the onToggle callback when the button is clicked (onClick)
      // TODO: Set aria-pressed to the pressed prop
      style={styles.button}
    >
      {/* TODO: If pressed, show "Show Hello World". Otherwise show "Show Hello Hello". */}
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
