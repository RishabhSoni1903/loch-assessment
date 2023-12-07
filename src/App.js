import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';

function App() {
  return (
    <Router basename="/loch-assessment">
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
