import { Link, useParams } from 'react-router-dom';

export default function ProfileMenuPage() {
  const { name } = useParams();

  return (
    <div style={{ padding: '16px' }}>
      <h1>Main Menu</h1>
      <ul>
        <li><Link to={`/profiles/${name}/stats`}>Stats</Link></li>
        <li><Link to={`/profiles/${name}/about`}>About</Link></li>
        <li><Link to="/">Back to Search</Link></li>
      </ul>
    </div>
  );
}