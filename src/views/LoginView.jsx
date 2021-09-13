import { useState } from 'react';
import ModalWindow from '../Components/modalWindow/ModalWindow';
import { Redirect } from 'react-router-dom';
import LoginForm from '../Components/auth/LoginForm';

const LoginVIew = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open ? (
        <ModalWindow
          open={open}
          setOpen={setOpen}
          title="LogIn"
          isTrigger={false}
        >
          <LoginForm setOpen={setOpen} />
        </ModalWindow>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default LoginVIew;
