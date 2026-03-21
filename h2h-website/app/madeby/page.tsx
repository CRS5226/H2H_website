export default function MadeBy() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        fontFamily: 'Space Mono, monospace',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#6b7280', fontSize: '12px', letterSpacing: '2px', marginBottom: '8px' }}>
          DESIGNED & DEVELOPED BY
        </p>
        <a
          href="https://www.linkedin.com/in/chitraksh-singh/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#0F1923',
            fontSize: '20px',
            fontWeight: 'bold',
            textDecoration: 'none',
          }}
        >
          Harshit
        </a>
      </div>
    </main>
  )
}