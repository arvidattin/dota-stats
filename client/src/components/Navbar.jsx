import { useParams, useLocation, Link } from 'react-router-dom';

export default function Navbar() {
  const { name } = useParams();
  const location = useLocation();

  return (
    <nav style={{ background: '#eee', padding: '8px' }}>
      <Link to="/">Home</Link>
      {name && (
        <span style={{ marginLeft: '16px', fontWeight: 'bold' }}>
          {name}'s profile
        </span>
      )}
      {/* Optional: Back to menu when on stats/about */}
      {name && location.pathname.includes('/profiles/') && location.pathname !== `/profiles/${name}` && (
        <Link to={`/profiles/${name}`} style={{ marginLeft: '16px' }}>
          Back to Menu
        </Link>
      )}
    </nav>
  );
}