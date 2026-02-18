import './App.css';
import { BrowserRouter } from 'react-router-dom';
import WebController from './controller/WebController';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <WebController />
      </div>
    </BrowserRouter>
  );
}

export default App;