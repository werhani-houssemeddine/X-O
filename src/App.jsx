import { Link, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Game from './components/Game';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/play/:id" element={<Game />} />
        <Route path="/history" element={<p>History Page</p>} />
        <Route path="*" element={<Nav />} />
      </Routes>
    </>
  );
}

export default App;
