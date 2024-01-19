import logo from './logo.svg';
import './App.css';

function App() {
  console.log('Hello!')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://aptible.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hi Aptible!
        </a>
      </header>
    </div>
  );
}

export default App;
