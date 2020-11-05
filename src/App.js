import './App.css';
import { Router, Link } from '@reach/router';
import WordNumber from "./components/WordNumber";
import Welcome from "./components/Welcome";
import WordColor from "./components/WordColor";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <div className="d-flex col-6 mx-auto justify-content-around">
        <Link to="/welcome">Welcome</Link>
        <Link to="/number">Number</Link>
        <Link to="/word">Word</Link>
        <Link to="/wordcolor">Word and Color</Link>
      </div> */}
      <Router>
        <Welcome path="/welcome" />
        <WordNumber path="/:WordNumber" />
        <WordColor path="/:word/:color/:background" />
      </Router>
    </div>
  );
}

export default App;
