import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import JournalList from './pages/JournalList';
import NewEntry from './pages/NewEntry';
import EntryView from './pages/EntryView';

function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4 flex gap-4 border-b pb-2">
          <Link to="/" className="text-blue-600 hover:underline">Journal</Link>
          <Link to="/new" className="text-blue-600 hover:underline">New Entry</Link>
        </nav>

        <Routes>
          <Route path="/" element={<JournalList />} />
          <Route path="/new" element={<NewEntry />} />
          <Route path="/entry/:id" element={<EntryView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
