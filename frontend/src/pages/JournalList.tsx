import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type JournalEntry = {
  id: string;
  title: string;
  content: string;
  timestamp: string;
};

const JournalList = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${__API_BASE__}/api/entries`)
      .then((res) => res.json())
      .then((data) => {
        setEntries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch entries:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Journal Entries</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-4">
          {entries.map((entry) => (
            <li key={entry.id} className="border p-4 rounded shadow hover:bg-gray-50 transition">
              <Link to={`/entry/${entry.id}`}>
                <h3 className="text-lg font-bold text-blue-600 hover:underline">{entry.title}</h3>
                <p className="text-sm text-gray-500">{new Date(entry.timestamp).toLocaleString()}</p>
                <p className="mt-2">{entry.content}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JournalList;
