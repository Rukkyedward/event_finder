import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './page/ProfilePage';
import Home from './page/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App