import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewEntry = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newEntry = {
      title,
      content,
      timestamp: new Date().toISOString(),
    };

    try {
      const res = await fetch(`${__API_BASE__}/api/entries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEntry),
      });

      if (res.ok) {
        navigate('/');
      } else {
        alert('Failed to create entry.');
      }
    } catch (err) {
      console.error(err);
      alert('Error creating entry.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">New Journal Entry</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Content</label>
          <textarea
            className="w-full border rounded p-2"
            rows={6}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Entry
        </button>
      </form>
    </div>
  );
};

export default NewEntry;
