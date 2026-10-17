import { ProfilePage } from './pages/ProfilePage.jsx';
import { emmanuelProfile } from './data/profile.js';

export default function App() {
  return <ProfilePage profileData={emmanuelProfile} />;
}
