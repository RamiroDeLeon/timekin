import { useEffect, useState } from 'react';

type Entry = {
  id: string;
  title: string;
  content: string;
  timestamp: string;
};

const JournalList = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${__API_BASE__}/api/entries`)
      .then((res) => {
        if (!res.ok) throw new Error('Fetch failed');
        return res.json();
      })
      .then(setEntries)
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <p className="text-red-500">Failed to load journal entries.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Journal Entries</h1>
      {entries.length === 0 ? (
        <p>No entries found.</p>
      ) : (
        <ul className="space-y-4">
          {entries.map((entry) => (
            <li key={entry.id} className="border p-4 rounded shadow-sm">
              <h2 className="text-xl font-semibold">{entry.title}</h2>
              <p className="text-sm text-gray-600">{new Date(entry.timestamp).toLocaleString()}</p>
              <p className="mt-2">{entry.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JournalList;
