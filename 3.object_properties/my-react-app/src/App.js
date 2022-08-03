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
          className="text-4xl font-extrabold text-red-500 text-opacity-50 text-right border-b-4"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="border-2 rounded-tl-3xl border-opacity-20 border-white-800 border-dotted">
          <ul className='text-1xl list-disc list-inside'>
            Benefit of learning React:
            <div className="ring-4 ring-opacity-20">
              <li>Modern</li>
              <li>Component based</li>
            </div>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
