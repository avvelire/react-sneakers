import { CartItem } from '../../../redux/slices/cartSlice';
import style from './purchaseItem.module.scss';

const PurchaseCard: React.FC<CartItem> = (props) => {
  const { imageUrl, title, price } = props;
  return (
    <div className={style.contents}>
      <img width={133} height={112} src={imageUrl} alt="sneaker" className={style.centers} />
      <h5>{title}</h5>
      <div className={style.prices}>
        <div>
          <span>Price:</span>
          <b>{price}$</b>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;
