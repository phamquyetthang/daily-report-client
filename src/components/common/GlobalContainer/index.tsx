import React, { FC, ReactNode } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import Header from '../../layout/Header';
import { isEmpty } from 'lodash';
import { SnackBarWrapper } from './styled';
import SnackBarItem from '../SnackBar';
interface IProps {
  children: ReactNode;
}
const GlobalContainer: FC<IProps> = ({ children }) => {
  const isAuth = useAppSelector((store) => store.auth.isAuth);
  const { snackBar } = useAppSelector((state) => state.app);
  return (
    <div className="px-20 mx-auto xl:px-20 overflow-x-hidden">
      {isAuth && <Header />}

      {children}

      {!isEmpty(snackBar) && (
        <SnackBarWrapper>
          {snackBar.map((item) => (
            <SnackBarItem
              id={item.id}
              message={item.message}
              type={item.type}
              key={item.id}
            />
          ))}
        </SnackBarWrapper>
      )}
    </div>
  );
};
export default GlobalContainer;
