import './App.css';
import Uploader from './Uploader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Uploader />
        <div id="preview" style={{"display":"none"}}>
        </div>
      </header>
    </div>
  );
}

export default App;
