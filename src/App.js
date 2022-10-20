import './App.css';
import Header from "./Header";
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './Chat';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      <Router>
      {!user ? (
            <h1>LOGIN page</h1>
          ): (
        <>
        < Header />

        <div className='app__body'>
          < Sidebar />
          < Routes >
            
            <Route path="/room/:roomId" element={<Chat />} />

            <Route path="/" element={<h1>No Channel selected</h1>} />
            {/* <Route path='/room/:roomId'>
              <h1>Channel</h1>
            </Route> */}
          </Routes>
        </div>
        </>             
      )}

      </Router>

    </div>
  );
}

export default App;
