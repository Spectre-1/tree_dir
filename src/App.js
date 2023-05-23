import './App.css';

import InputComponent from './components/InputComponent';
import OutputComponent from './components/OutputComponent';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 1, padding: '1rem' }}>
        <h1>Input Component Example</h1>
        <InputComponent />
      </div>
      <div style={{ flex: 1, padding: '1rem' }}>
        <h1>Output Component Example</h1>
        <OutputComponent />
      </div>
    </div>
  );
};

export default App;
