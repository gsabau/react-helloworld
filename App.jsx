import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import { ToggleButton } from './ToggleButton.jsx';

function App() {
  // TODO: Create state with useState(false).
  // Name the value `excited` and the setter `setExcited`.

  return (
    <main style={styles.main}>
      <div style={styles.stack}>
        <h1 style={styles.heading}>
          {/* TODO: If excited is true, show "Hello Hello". Otherwise show "Hello World". */}
        </h1>
        <p style={styles.sub}>Smallest React app with Vite</p>
        <ToggleButton
        // TODO: Pass pressed={excited}
        // TODO: Pass onToggle — a function that flips state with setExcited
        />
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: '100vh',
    margin: 0,
    display: 'grid',
    placeItems: 'center',
    fontFamily:
      'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    background: '#0f172a',
    color: '#f8fafc',
  },
  stack: {
    textAlign: 'center',
  },
  heading: {
    margin: 0,
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    letterSpacing: '-0.04em',
  },
  sub: {
    margin: '0.75rem 0 0',
    color: '#94a3b8',
    fontSize: '1.05rem',
  },
};

document.body.style.margin = '0';
// TODO: Mount <App /> on the element with id "root".
// Use createRoot(document.getElementById('root')).render(<App />)
