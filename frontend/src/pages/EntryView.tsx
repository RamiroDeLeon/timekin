import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

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

  const handleDelete = async () => {
    const confirm = window.confirm('Are you sure you want to delete this entry?');
    if (!confirm) return;

    try {
      const res = await fetch(`${__API_BASE__}/api/entries/${id}`, {
        method: 'DELETE',
      });

      if (res.status === 204) {
        navigate('/');
      } else {
        alert('Failed to delete entry.');
      }
    } catch (err) {
      console.error(err);
      alert('Error deleting entry.');
    }
  };

  if (loading) return <p className="p-6">Loading...</p>;
  if (!entry) return <p className="p-6 text-red-500">Entry not found.</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-2">{entry.title}</h2>
      <p className="text-sm text-gray-500 mb-4">{new Date(entry.timestamp).toLocaleString()}</p>
      <p className="mb-6">{entry.content}</p>

      <button
        onClick={handleDelete}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Delete Entry
      </button>
    </div>
  );
};

export default EntryView;
