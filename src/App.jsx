import { useEffect, useState } from 'react';
//import './App.css';

function App() {
  const [backendMessage, setBackendMessage] = useState('Loading from backend...');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`)
      .then(res => res.json())
      .then(data => setBackendMessage(data.message))
      .catch(() => setBackendMessage('❌ Failed to connect to backend.'));
  }, []);

  return (
    <div>
      <h1>👋 Welcome to FrameKit Frontend</h1>
      <p>{backendMessage}</p>
      <p><strong>Backend API:</strong> {import.meta.env.VITE_API_URL}</p>
    </div>
  );
}

export default App;
