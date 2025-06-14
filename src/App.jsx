import React, { useEffect, useState } from 'react';

const App = () => {
  const [backendStatus, setBackendStatus] = useState('⏳ Connecting to backend...');
  const [apiURL, setApiURL] = useState(import.meta.env.VITE_API_URL || 'Not Set');

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await fetch(`${apiURL}/api/auth/login`);
        if (!response.ok) throw new Error('Server responded with error');

        const data = await response.json();
        if (data.message) {
          setBackendStatus('✅ Connected to backend!');
          console.log('Backend message:', data.message);
        } else {
          setBackendStatus('⚠️ Unexpected response from backend.');
        }
      } catch (error) {
        console.error('Connection error:', error);
        setBackendStatus('❌ Failed to connect to backend.');
      }
    };

    checkBackend();
  }, [apiURL]);

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem', textAlign: 'center' }}>
      <h1>👋 Welcome to FrameKit Frontend</h1>
      <p>{backendStatus}</p>
      <p><strong>Backend API:</strong> {apiURL}</p>
    </div>
  );
};

export default App;
