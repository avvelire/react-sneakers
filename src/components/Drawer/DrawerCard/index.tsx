import { useDispatch } from 'react-redux';
import { CartItem, removeItem } from '../../../redux/slices/cartSlice';
import styles from './drawerCard.module.scss';
import minus from '../../../assets/img/minusButton.jpg';

const DrawerCard: React.FC<CartItem> = (props) => {
  const { id, imageUrl, title, price } = props;
  const dispatch = useDispatch();

  const onClickRemove = (id: number) => {
    dispatch(removeItem(id));
  };

  return (
    <div className={styles.cartItem}>
      <img width={70} height={70} src={imageUrl} alt="sneakers" />
      <div>
        <p>{title}</p>
        <b>{price} $</b>
      </div>
      <img
        onClick={() => onClickRemove(id)}
        className={styles.minus}
        src={minus}
        alt="minusButton"
      />
    </div>
  );
};

export default DrawerCard;
