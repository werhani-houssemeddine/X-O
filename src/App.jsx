import { Link, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<p>Home Page</p>} />
        <Route path="/play/:id" element={<p>Play Page</p>} />
        <Route path="/history" element={<p>History Page</p>} />
        <Route path="*" element={<p>Home Page</p>} />
      </Routes>
    </>
  );
}

export default App;
