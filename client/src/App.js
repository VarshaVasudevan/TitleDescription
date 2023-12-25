import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TitleDescription from './components/TitleDescription';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UpdatePage from './components/UpdatePage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<TitleDescription />} />
      <Route path="/update/:id" element={<UpdatePage />} />
    </Routes>
  </Router>
  );
}

export default App;
