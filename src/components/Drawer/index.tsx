import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { CartItem, changeActive, clearItems } from '../../redux/slices/cartSlice';
import { RootState } from '../../redux/store';
import { useEffect } from 'react';

import styles from './drawer.module.scss';
import minus from '../../assets/img/minusButton.jpg';
import { addPurchaseItem } from '../../redux/slices/purchaseSlice';
import DrawerCard from './DrawerCard';
import EmptyDrawer from './EmptyDrawer';

const Drawer: React.FC = () => {
  const { active, items, totalPrice } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      html.style.overflow = active ? 'hidden' : 'auto';
    }
  }, [active]);

  const setActive = () => {
    dispatch(changeActive(!active));
  };

  const addOrderedItems = () => {
    dispatch(addPurchaseItem(items));
    dispatch(clearItems());
    dispatch(changeActive(!active));
    setTimeout(() => alert('Your order has been confirmed'), 0);
  };

  const empty = <EmptyDrawer />;

  return (
    <div className={`${styles.overlay} ${active ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <div className={styles.top}>
          <h1>Cart</h1>
          {totalPrice ? (
            <img
              style={{ cursor: 'pointer' }}
              width={32}
              height={32}
              onClick={setActive}
              src={minus}
              alt="minusButton"
            />
          ) : (
            ''
          )}
        </div>
        {!totalPrice ? (
          empty
        ) : (
          <>
            <div className={styles.items}>
              {items.map((obj: CartItem) => (
                <DrawerCard key={obj.id} {...obj} />
              ))}
            </div>
            <div className={styles.cartTotalBlock}>
              <ul>
                <li>
                  <p>Total</p>
                  <div></div>
                  <b>{totalPrice}$</b>
                </li>
              </ul>
              <button onClick={addOrderedItems}>Click to order</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Drawer;
