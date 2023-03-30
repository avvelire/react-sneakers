import styles from './sneakerBlock.module.scss';
import plus from '../../assets/img/buttonPlus.svg';
import { useDispatch } from 'react-redux';
import { addItem, CartItem } from '../../redux/slices/cartSlice';

type SneakerBlockProps = {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
};

const SneakerBlock: React.FC<SneakerBlockProps> = (props) => {
  const { id, imageUrl, title, price } = props;
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      imageUrl,
      title,
      price,
    };
    dispatch(addItem(item));
  };
  return (
    <div className={styles.content}>
      <img width={133} height={112} src={imageUrl} alt="sneaker" className={styles.center} />
      <h5>{title}</h5>
      <div className={styles.price}>
        <div>
          <span>Price:</span>
          <b>{price}$</b>
        </div>
        <img onClick={onClickAdd} width={32} height={32} src={plus} alt="buttonPlus" />
      </div>
    </div>
  );
};

export default SneakerBlock;
