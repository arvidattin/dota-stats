import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  const [count, setCount] = useState(0);
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      // 1) create a random user so you always get something back
      await fetch('http://localhost:4001/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `User_${Math.floor(Math.random() * 100000)}`,
          score: Math.floor(Math.random() * 100),
        }),
      });

      // 2) fetch all users
      const res = await fetch('http://localhost:4001/users');
      const data = await res.json();
      setResults(data);

      // proof in console too
      console.log('Fetched users:', data);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  return (
    <Routes>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>

        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 ml-2"
        >
          Search
        </button>

        <p className="mt-2 text-sm">
          Results: {results.length}
        </p>
      </div>
    </Routes>
  );
}