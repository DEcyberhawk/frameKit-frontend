import React, { useState } from 'react';

const ReceiptGenerator = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [receipt, setReceipt] = useState(null);

  const generateReceipt = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/receipt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, amount }),
      });

      const data = await response.json();
      setReceipt(data);
    } catch (error) {
      console.error('Error generating receipt:', error);
    }
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-2">Branded Receipt Generator</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="block mb-2 p-2 border w-full"
      />

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        className="block mb-2 p-2 border w-full"
      />

      <button
        onClick={generateReceipt}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Generate Receipt
      </button>

      {receipt && (
        <div className="mt-4 border p-4 bg-gray-50">
          <p><strong>Name:</strong> {receipt.name}</p>
          <p><strong>Amount:</strong> €{receipt.amount}</p>
          <p><strong>Date:</strong> {new Date(receipt.date).toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default ReceiptGenerator;
