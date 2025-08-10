import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    navigate(`/profiles/${encodeURIComponent(searchTerm.trim())}`);
  };

  return (
    <div style={{ padding: '16px' }}>
      <h1>Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter name"
        />
        <button type="submit">Go</button>
      </form>
    </div>
  );
}