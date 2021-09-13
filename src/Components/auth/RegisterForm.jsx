import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import authOperations from '../../redux/auth/auth-operations';
import { Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LoginForm = ({ setOpen }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameInputId] = useState(uuidv4());
  const [emailInputId] = useState(uuidv4());
  const [passwordInputId] = useState(uuidv4());
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { name, email, password };
    dispatch(authOperations.register(body));
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'name':
        setName(value);
        break;
      default:
        return;
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        placeholder="Username"
        onChange={handleChange}
        type="text"
        name="name"
        value={name}
        id={usernameInputId}
        required
      />
      <Form.Input
        placeholder="Email"
        onChange={handleChange}
        type="email"
        name="email"
        value={email}
        id={emailInputId}
        required
      />
      <Form.Input
        placeholder="Password"
        onChange={handleChange}
        type="password"
        name="password"
        id={passwordInputId}
        value={password}
        required
      />
      <div className="space-beetwen">
        {' '}
        <Button content="Add" type="submit" positive />
        <Link to="/login">LogIn</Link>
      </div>
    </Form>
  );
};

export default LoginForm;
