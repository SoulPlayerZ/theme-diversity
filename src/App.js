import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import './css/myReset.css';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            {/* <Route path="/chars" element={<Chars />} />
            {/* <Route path="/locations" element={<Locations />} />
            <Route path="/episodes" element={<Episodes />} /> */} 
          </Routes>
      </BrowserRouter>
  );
}

export default App;
