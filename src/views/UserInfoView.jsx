import { useState } from 'react';
import ModalWindow from '../Components/modalWindow/ModalWindow';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LoginVIew = () => {
  const [open, setOpen] = useState(true);
  const user = useSelector((state) => state.auth.userData);

  return (
    <>
      {open ? (
        <ModalWindow
          open={open}
          setOpen={setOpen}
          isTrigger={false}
          title="User Data"
        >
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </ModalWindow>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default LoginVIew;
