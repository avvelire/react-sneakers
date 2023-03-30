import adidasLogo from '../assets/img/adidas-logo.png';
import frog from '../assets/img/adidas-sustainable-shoes-removebg-preview.png';

const Slider: React.FC = () => {
  return (
    <>
      <div className="slider__left">
        <img width={99} height={40} src={adidasLogo} alt="frogLogo" />
        <div>
          <h1>
            <b>Stan Smith</b>, Forever!
          </h1>
        </div>
      </div>
      <div>
        <img width={640} height={300} src={frog} alt="" />
      </div>
    </>
  );
};

export default Slider;
