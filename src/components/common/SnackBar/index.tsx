import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { closeSnackBar } from '../../../services/app';
import { MdOutlineCheckCircleOutline, MdOutlineClose } from 'react-icons/md';
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
