import { Route, Routes } from 'react-router-dom';
import Main from '../routes/Main';
import About from '../routes/About';
import Result from '../routes/Result';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
