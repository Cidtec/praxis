import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const Notification = () => {
//   const notify = (message: string) => toast.success(message);
  
//   return (
//     <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
//   );
  
// }
// export const notifySuccess = (message:string) => toast.success(message);
// export default Notification;

const Notification = () => {
    return (
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    );
  }
  
  export default Notification;
  
  export const showSuccessNotification = (message:string) => {
    toast.success(message);
  };
