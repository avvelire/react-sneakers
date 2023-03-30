import { useSelector } from 'react-redux';
import { CartItem } from '../../redux/slices/cartSlice';
import { RootState } from '../../redux/store';
import PurchaseCard from './PurchaseCard';

const PurchaseItem: React.FC = () => {
  const items = useSelector((state: RootState) => state.purchase.items);

  return (
    <>
      {items.map((obj: CartItem, i) => (
        <PurchaseCard key={obj.id} {...obj} />
      ))}
    </>
  );
};

export default PurchaseItem;
