import { Route, Routes } from 'react-router';
import './App.css';
import UserLayout from './layouts/UserLayout';
import Dashboard from './views/Dashboard';
import UserCreation from './views/users/UserCreation';
import UserIndex from './views/users/UserIndex';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="users/" element={<UserLayout />}>
          <Route path="" element={<UserIndex />} />
          <Route path="new" element={<UserCreation />} /> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
