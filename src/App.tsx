import { Route, Routes } from 'react-router';
import './App.css';
import CustomerLayout from './layouts/CustomerLayout';
import Dashboard from './views/Dashboard';
import UserIndex from './views/users/UserIndex';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="customer/" element={<CustomerLayout />}>
          <Route path="users/*" element={<UserIndex />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
