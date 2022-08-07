import React, { FC, ReactNode, useEffect } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import Header from '../../layout/Header';
import { isEmpty } from 'lodash';
import { SnackBarWrapper } from './styled';
import SnackBarItem from '../SnackBar';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { setTokenAction } from 'src/services/auth/reducer';
import { useNavigate } from 'react-router-dom';
interface IProps {
  children: ReactNode;
}
const GlobalContainer: FC<IProps> = ({ children }) => {
  const isAuth = useAppSelector((store) => store.auth.isAuth);
  const { snackBar } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const checkToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setTokenAction(token));
      navigate('home');
    }
  };
  useEffect(() => {
    if (!isAuth) {
      checkToken();
    }
  }, [isAuth]);

  return (
    <div className="px-10 mx-auto xl:px-10 overflow-x-hidden">
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
