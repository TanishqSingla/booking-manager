import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import '../App.css';

import { FaCalendarAlt, FaDoorOpen, FaUsers } from 'react-icons/fa'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav>
            <ul>
                <li>
                  <Link to="/bookings" className="btn btn-header">
                    <FaCalendarAlt />
                    <span>Bookings</span>
                  </Link>
                </li>
                <li>
                  <Link to="/bookables" className="btn btn-header">
                    <FaDoorOpen />
                    <span>Bookables</span>
                  </Link>
                </li>
                <li>
                  <Link to="/users" className="btn btn-header">
                    <FaUsers />
                    <span>Users</span>
                  </Link>
                </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/bookings" element={""} />
          <Route path="/bookables" element={""} />
          <Route path="/users" element={""} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
