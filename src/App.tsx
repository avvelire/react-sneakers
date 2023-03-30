import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './scss/libs/app.scss';
import MainLayout from './layouts/MainLayout';
import Account from './pages/Account';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="account" element={<Account />} />
      </Route>
    </Routes>
  );
}

export default App;
