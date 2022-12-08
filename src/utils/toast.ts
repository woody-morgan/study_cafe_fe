import { ReactText } from 'react';
import { toast } from 'react-toastify';

export const ToastError = (message: string): ReactText => {
  return toast.error(message, {
    toastId: 1,
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const ToastWarn = (message: string): ReactText => {
  return toast.warn(message, {
    toastId: 1,
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const ToastSuccess = (message: string): ReactText => {
  return toast.success(message, {
    toastId: 1,
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const ToastInfo = (message: string): ReactText => {
  return toast.info(message, {
    toastId: 1,
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
