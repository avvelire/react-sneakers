import { useDispatch, useSelector } from 'react-redux';
import emptyCart from '../../../assets/img/emptyCart.svg';
import { changeActive } from '../../../redux/slices/cartSlice';
import { RootState } from '../../../redux/store';
import styles from './emptyDrawer.module.scss';

const EmptyDrawer: React.FC = () => {
  const active = useSelector((state: RootState) => state.cart.active);
  const dispatch = useDispatch();

  const setActive = () => {
    dispatch(changeActive(!active));
  };
  return (
    <div className={styles.block}>
      <img width={120} height={120} src={emptyCart} alt="emptyCart" />
      <h3>Cart is empty</h3>
      <p>Add at least one pair of sneakers to place an order.</p>
      <button onClick={setActive}>
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
    </div>
  );
};

export default EmptyDrawer;
