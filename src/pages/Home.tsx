import MainPart from '../components/MainPart';
import Slider from '../components/Slider';

const Home: React.FC = () => {
  return (
    <>
      <div className="slider">
        <Slider />
      </div>
      <div className="content">
        <MainPart />
      </div>
    </>
  );
};

export default Home;
