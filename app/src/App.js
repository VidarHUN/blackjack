import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App() {
  async function handleNewRoom() {
    console.log("newRooomButton pressed")
    await axios.post('http://localhost:4000/newRoom', {});
  };
  const handleRoomButton = () => {
    console.log("roomButton pressed")
  };
  const handleHitButton = () => {
    console.log("hitButton pressed")
  };
  const handleDoubleButton = () => {
    console.log("doubleButton pressed")
  };
  const handleSplitButton = () => {
    console.log("splitButton pressed")
  };
  const handleInsuranceButton = () => {
    console.log("insuranceButton pressed")
  };
  const handleSurrenderButton = () => {
    console.log("surrenderButton pressed")
  };
  const handlePushButton = () => {
    console.log("pushButton pressed")
  };
  return (
    <div className="App">
      <button onClick={handleNewRoom} id="newRoomButton">Create a new room</button>
      <button onClick={handleRoomButton} id="roomButton">Join room</button>
      <button onClick={handleHitButton} id="hitButton">Hit</button>
      <button onClick={handleDoubleButton} id="doubleButton">Double</button>
      <button onClick={handleSplitButton} id="splitButton">Split</button>
      <button onClick={handleInsuranceButton} id="insuranceButton">Insurance</button>
      <button onClick={handleSurrenderButton} id="surrenderButton">Surrender</button>
      <button onClick={handlePushButton} id="pushButton">Push</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
