import './App.css';
import MultiSelect from './components/multiselect';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState([
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
  ]);

  return (
    <div className="App">
      <div className='content'>
        <MultiSelect value={value} readonly={false} />
      </div>
    </div>
  );
}

export default App;
