import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-4xl font-extrabold underline text-red-500 text-opacity-50 text-right"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <ul className='text-1xl list-disc list-inside'>
            Benefit of learning React:
            <li>Modern</li>
            <li>Component based</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
