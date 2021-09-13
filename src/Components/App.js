import { lazy, Suspense } from 'react';
import { Container } from 'semantic-ui-react';
import Navigation from './navigation/Navigation';
import { Switch, Route } from 'react-router-dom';
import authOperations from '../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
  const ContactsView = lazy(() => import('../views/ContactsView'));
  const LoginView = lazy(() => import('../views/LoginView'));
  const RegisterView = lazy(() => import('../views/RegisterView'));
  const LogoutView = lazy(() => import('../views/LogoutView'));
  const UserInfoView = lazy(() => import('../views/UserInfoView'));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <Container>
        <Switch>
          <Route path="/" exact>
            <Suspense fallback={''}>
              <ContactsView />
            </Suspense>
          </Route>
          <Route path="/login" exact>
            <Suspense fallback={''}>
              <LoginView />
            </Suspense>
          </Route>
          <Route path="/register" exact>
            <Suspense fallback={''}>
              <RegisterView />
            </Suspense>
          </Route>
          <Route path="/logout" exact>
            <Suspense fallback={''}>
              <LogoutView />
            </Suspense>
          </Route>
          <Route path="/user-info" exact>
            <Suspense fallback={''}>
              <UserInfoView />
            </Suspense>
          </Route>
        </Switch>
      </Container>
    </div>
  );
};

export default App;
