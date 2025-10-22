import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        ¡Tailwind funciona!
      </h1>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount((count) => count + 1)}
      >
        Contador: {count}
      </button>
    </div>
  );
}

export default App;