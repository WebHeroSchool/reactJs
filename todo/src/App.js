import logo from './logo.svg';
import './App.css';
const a = 'App';
const num = 7;
const num1 = 6;
const app = false;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3> 
          {num + num1}
        </h3>
        <p style={{
          color: 'blue'
        }}>
          Hello world!
        </p>
        <p>
          {a}
        </p>
        <p>
          {app || 'App is true'}
        </p>
        <p>
          {app ? 'App is true' : 'App is false'}
        </p>
        <p>
          {undefined}
          {null}
          {true}
          {false}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
