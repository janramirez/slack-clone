import './App.css';
import Header from "./Header";
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>

      < Header />

      <div className='app__body'>
        < Sidebar />
        < Routes >
          <Route exact path="/" element={<h1>Home</h1>} />
          <Route exact path="/about" element={<h1>about</h1>} />
          {/* <Route path='/room/:roomId'>
            <h1>Channel</h1>
          </Route> */}
        </Routes>
      </div>

      </Router>

    </div>
  );
}

export default App;
