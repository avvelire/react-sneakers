import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchSneaker } from '../redux/slices/sneakersSlice';
import { RootState, useAppDispatch } from '../redux/store';
import Search from './Search';
import Skeleton from './Skeleton';
import SneakerBlock from './SneakerBlock';

const MainPart: React.FC = () => {
  const { searchValue } = useSelector((state: RootState) => state.filter);
  const { items, status } = useSelector((state: RootState) => state.sneakers);

  const dispatch = useAppDispatch();

  const getSneakers = async () => {
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchSneaker({
        search,
      }),
    );
  };

  useEffect(() => {
    getSneakers();
    // eslint-disable-next-line
  }, [searchValue]);

  const sneakers = items.map((obj: any) => <SneakerBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

  return (
    <>
      <div className="content__top">
        <h2>All sneakers</h2>
        <Search />
      </div>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>An error has occurred 😕</h2>
          <p>Unfortunately, it was not possible to get sneakers. Please try again later.</p>
        </div>
      ) : (
        <div className="content__main">{status === 'loading' ? skeletons : sneakers}</div>
      )}
    </>
  );
};

export default MainPart;
