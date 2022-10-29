import { Link, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Board from './components/Board';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/play/:id" element={<Board />} />
        <Route path="/history" element={<p>History Page</p>} />
        <Route path="*" element={<Nav />} />
      </Routes>
    </>
  );
}

export default App;
