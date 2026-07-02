import { Slide, ToastContainer } from 'react-toastify';

function AppToastContainer() {
  return (
    <ToastContainer
      autoClose={3000}
      closeOnClick
      draggable
      hideProgressBar
      newestOnTop={false}
      pauseOnFocusLoss
      pauseOnHover
      position="bottom-right"
      rtl={false}
      theme="dark"
      transition={Slide}
    />
  );
}

export { AppToastContainer };
