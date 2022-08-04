import { FC, memo, ReactNode } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import Header from '../../layout/Header';

interface IProps {
  children: ReactNode;
}
const GlobalContainer: FC<IProps> = memo(({ children }) => {
  const isAuth = useAppSelector((store) => store.auth.isAuth);

  return (
    <div className="px-20 mx-auto xl:px-20 overflow-x-hidden">
      {isAuth && <Header />}

      {children}
    </div>
  );
});

export default GlobalContainer;
