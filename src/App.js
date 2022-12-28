import { useState } from 'react';
import './App';

function App() {
  const [first, setFirst] = useState('Master');

  return (
    <div className="App">
      <h1>Hello {first}</h1>
    </div>
  );
}

export default App;
