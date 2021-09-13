import { useState } from 'react';
import ModalWindow from '../Components/modalWindow/ModalWindow';
import { Redirect } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import authOperations from '../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

const LoginVIew = () => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(authOperations.logOut());
    setOpen(false);
  };

  return (
    <>
      {open ? (
        <ModalWindow
          open={open}
          setOpen={setOpen}
          title="LogOut"
          size="mini"
          isTrigger={false}
        >
          <h2>You reale want to logout?</h2>
          <div className="space-beetwen">
            {' '}
            <Button color="red" onClick={() => setOpen(false)}>
              <Icon name="remove" /> No
            </Button>
            <Button color="green" onClick={logOut}>
              <Icon name="checkmark" /> Yes
            </Button>
          </div>
        </ModalWindow>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default LoginVIew;
