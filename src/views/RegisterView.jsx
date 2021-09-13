import { useState } from 'react';
import ModalWindow from '../Components/modalWindow/ModalWindow';
import { Redirect } from 'react-router-dom';
import RegisterForm from '../Components/auth/RegisterForm';

const LoginVIew = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open ? (
        <ModalWindow
          open={open}
          title="Register"
          setOpen={setOpen}
          isTrigger={false}
        >
          <RegisterForm setOpen={setOpen} />
        </ModalWindow>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default LoginVIew;
