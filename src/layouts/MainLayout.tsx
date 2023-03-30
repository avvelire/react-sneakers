import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Drawer from '../components/Drawer';
import Header from '../components/Header';
import { RootState } from '../redux/store';

const MainLayout: React.FC = () => {
  const active = useSelector((state: RootState) => state.cart.active);
  return (
    <div className={`wrapper ${active ? 'wrapper__overflow-hidden' : ''}`}>
      <div>
        <Drawer />
      </div>
      <div className="header">
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
