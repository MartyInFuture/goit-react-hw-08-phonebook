import { Button } from 'semantic-ui-react';

const TrigerButton = ({ setOpen }) => {
  return (
    <Button color="green" icon="add" circular onClick={() => setOpen(true)} />
  );
};

export default TrigerButton;
