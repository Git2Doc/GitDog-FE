import { Route, Routes } from 'react-router-dom';
import Main from '../routes/Main';
import About from '../routes/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
