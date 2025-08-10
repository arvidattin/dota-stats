import { useParams, Link } from 'react-router-dom';

export default function ProfileAboutPage() {
  const { name } = useParams();

  return (
    <div style={{ padding: '16px' }}>
      <h1>About {name}</h1>
      <p>About content here...</p>
      <Link to={`/profiles/${name}`}>Back to Menu</Link>
    </div>
  );
}