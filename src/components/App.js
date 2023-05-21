import { Route, Routes } from 'react-router-dom';
import Main from '../routes/Main';
import About from '../routes/About';
import Contact from '../routes/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
