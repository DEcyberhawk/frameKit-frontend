import React, { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('Loading from backend...');

  useEffect(() => {
    const fetchBackend = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL;
        const response = await fetch(`${API_URL}/api/auth/login`);
        const data = await response.json();
        setMessage(data.message || 'Response received, but no message found');
      } catch (error) {
        console.error('Error fetching backend:', error);
        setMessage('❌ Failed to connect to backend.');
      }
    };

    fetchBackend();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>👋 Welcome to FrameKit Frontend</h1>
      <p>{message}</p>
      <p><strong>Backend API:</strong> {import.meta.env.VITE_API_URL}</p>
    </div>
  );
};

export default App;
