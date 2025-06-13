 HEAD
import React, { useState } from "react";

function App() {
  const [bio, setBio] = useState("");
  const [theme, setTheme] = useState("Soft Girl");
  const [dmLink, setDmLink] = useState("");
  const [receiptInfo, setReceiptInfo] = useState({ name: "", amount: "" });
  const [receiptGenerated, setReceiptGenerated] = useState(false);
  const [receiptResponse, setReceiptResponse] = useState(null);

  const handleGenerateReceipt = async () => {
    if (receiptInfo.name && receiptInfo.amount) {
      try {
       const API_URL = import.meta.env.VITE_API_BASE_URL;
const response = await fetch(`${API_URL}/api/receipt`, {

          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(receiptInfo),
        });

        if (!response.ok) throw new Error("Failed to generate receipt");

        const data = await response.json();
        setReceiptResponse(data);
        setReceiptGenerated(true);
      } catch (err) {
        console.error("Error generating receipt:", err);
      }
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Frame Your Brand. Flaunt Your Style.</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px' }}>
        FrameKit helps you design stunning Instagram profiles with smart DM pages,
        personalized vibes, branded receipts, and more — no coding needed.
      </p>

      {/* Smart DM Page Generator */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>Smart DM Page Generator</h2>
        <input
          type="text"
          placeholder="Enter your DM landing page link"
          value={dmLink}
          onChange={(e) => setDmLink(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
        />
        {dmLink && (
          <p style={{ marginTop: '0.5rem' }}>
            Preview: <a href={dmLink} target="_blank" rel="noopener noreferrer">{dmLink}</a>
          </p>
        )}
      </div>

      {/* Vibe Picker */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>Pick Your Vibe</h2>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
        >
          <option>Soft Girl</option>
          <option>FaithGram</option>
          <option>TravelGram</option>
          <option>Minimal Boss</option>
        </select>
        <p style={{ marginTop: '0.5rem' }}>Selected Vibe: {theme}</p>
      </div>

      {/* Bio Customization */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>Customize Your Bio</h2>
        <textarea
          placeholder="Write your Instagram bio..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          style={{ width: '100%', height: '100px', padding: '0.5rem', marginTop: '0.5rem' }}
        />
        <p style={{ marginTop: '0.5rem' }}>Preview Bio: {bio}</p>
      </div>

      {/* Branded Receipt Creator */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>Branded Receipt Generator</h2>
        <input
          type="text"
          placeholder="Customer Name"
          value={receiptInfo.name}
          onChange={(e) => setReceiptInfo({ ...receiptInfo, name: e.target.value })}
          style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
        />
        <input
          type="text"
          placeholder="Amount Paid"
          value={receiptInfo.amount}
          onChange={(e) => setReceiptInfo({ ...receiptInfo, amount: e.target.value })}
          style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
        />
        <button onClick={handleGenerateReceipt} style={{ padding: '0.5rem 1rem' }}>Generate Receipt</button>

        {receiptGenerated && receiptResponse && (
          <div style={{ marginTop: '1rem', border: '1px solid #ccc', padding: '1rem', maxWidth: '300px' }}>
            <h3>Receipt</h3>
            <p><strong>Name:</strong> {receiptResponse.name}</p>
            <p><strong>Amount:</strong> €{receiptResponse.amount}</p>
            <p><strong>Date:</strong> {new Date(receiptResponse.date).toLocaleDateString()}</p>
          </div>
        )}
      </div>

      <footer style={{ textAlign: 'center', fontSize: '0.8rem', color: '#888', marginTop: '4rem' }}>
        © 2025 FrameKit.app – All rights reserved
      </footer>

function App() {
  return (
    <div>
      <h1>Welcome to InstaFrame</h1>
 b256a892af546b7725276ed00b04c0318dd97ad2
    </div>
  );
}

export default App;
