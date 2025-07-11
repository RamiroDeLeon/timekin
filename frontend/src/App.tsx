import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [apiMessage, setApiMessage] = useState('Loading...');

  useEffect(() => {
    fetch(`${__API_BASE__}/`)
      .then(res => res.text())
      .then(setApiMessage)
      .catch(() => setApiMessage('Failed to reach API'));
  }, []);

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1 className="text-3xl font-bold text-purple-600">Timekin is alive</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div className="p-4">
        <h1 className="text-3xl font-bold text-purple-600">Timekin Frontend</h1>
        <p className="mt-4 text-lg">{apiMessage}</p>
      </div>
    </>
  )
}

export default App
