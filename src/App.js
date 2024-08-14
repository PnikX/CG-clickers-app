import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserHomePage from './pages/UserHomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<UserHomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
