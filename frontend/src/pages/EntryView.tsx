import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type JournalEntry = {
  id: string;
  title: string;
  content: string;
  timestamp: string;
};

const EntryView = () => {
  const { id } = useParams<{ id: string }>();
  const [entry, setEntry] = useState<JournalEntry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${__API_BASE__}/api/entries/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Entry not found');
        return res.json();
      })
      .then((data) => {
        setEntry(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch entry:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!entry) return <p className="p-6 text-red-500">Entry not found.</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-2">{entry.title}</h2>
      <p className="text-sm text-gray-500 mb-4">{new Date(entry.timestamp).toLocaleString()}</p>
      <p>{entry.content}</p>
    </div>
  );
};

export default EntryView;
