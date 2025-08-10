import { useParams, Link } from 'react-router-dom';

export default function ProfileStatsPage() {
  const { name } = useParams();

  return (
    <div style={{ padding: '16px' }}>
      <h1>{name}'s Stats</h1>
      <p>Stats content here...</p>
      <Link to={`/profiles/${name}`}>Back to Menu</Link>
    </div>
  );
}