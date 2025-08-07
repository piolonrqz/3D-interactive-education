import Sidebar from '../components/Sidebar';
import Header from '../components/header';
import Content from '../components/Content';
import ReadingProgressBar from '../components/ReadingProgressBar';
import { Outlet, useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1 min-w-0">
          <Header />
          {location.pathname === '/' ? <Content /> : <Outlet />}
        </div>
      </div>
      <ReadingProgressBar isVisible={true} />
    </div>
  );
};

export default Home;