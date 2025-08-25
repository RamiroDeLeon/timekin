import { useParams } from 'react-router-dom';

export default function EntryView() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Entry: {id}</h1>
      <p>Entry detail placeholder</p>
    </div>
  );
}
