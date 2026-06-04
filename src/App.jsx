import logo from './assets/react.svg'; // If you don't have this file yet, it's okay!
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="App-logo" alt="logo" style={{ height: '40vmin', animation: 'spin infinite 20s linear' }} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#61dafb' }}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;