import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { MdOutlineCheckCircleOutline, MdOutlineClose } from 'react-icons/md';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { closeSnackBar } from 'src/services/app/reducer';
interface IProps {
  type: string;
  message: string;
  id: string;
}
const SnackBar: FunctionComponent<IProps> = ({ type, message, id }) => {
  const dispatch = useAppDispatch();

  const onClose = useCallback(() => {
    dispatch(closeSnackBar(id));
  }, [dispatch, id]);

  useEffect(() => {
    setTimeout(() => onClose(), 3000);
  }, [id, onClose]);

  return (
    <div className={`snack ${type}`}>
      <MdOutlineCheckCircleOutline />
      <div className="status">
        <span>{message}</span>
      </div>
      <MdOutlineClose
        size={16}
        onClick={onClose}
      />
    </div>
  );
};

export default SnackBar;
