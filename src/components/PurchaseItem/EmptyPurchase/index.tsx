import styles from './emptyPurchase.module.scss';
import emoji from '../../../assets/img/emoji.svg';
import { Link } from 'react-router-dom';

const EmptyPurchase: React.FC = () => {
  return (
    <div className={styles.block}>
      <img width={70} height={70} src={emoji} alt="sad_emoji" />
      <h3>No orders</h3>
      <p>You haven't bought anything</p>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button>
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7144 7L1.00007 7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 13L1 7L7 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          come back
        </button>
      </Link>
    </div>
  );
};

export default EmptyPurchase;
