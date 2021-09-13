import { lazy, Suspense } from 'react';
import { Container } from 'semantic-ui-react';
import Navigation from './navigation/Navigation';
import { Switch } from 'react-router-dom';
import authOperations from '../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PublicRoute from '../routes/PublicRoute';
import PrivateRoute from '../routes/PrivateRoute';

const App = () => {
  const ContactsView = lazy(() => import('../views/ContactsView'));
  const LoginView = lazy(() => import('../views/LoginView'));
  const RegisterView = lazy(() => import('../views/RegisterView'));
  const LogoutView = lazy(() => import('../views/LogoutView'));
  const UserInfoView = lazy(() => import('../views/UserInfoView'));
  const isFetchingUser = useSelector((state) => state.auth.isFetchingUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    isFetchingUser || (
      <div>
        <Navigation />
        <Container>
          <Switch>
            <Suspense fallback={''}>
              <PrivateRoute path="/" exact>
                <ContactsView />
              </PrivateRoute>
              <PublicRoute path="/login" exact redirectTo="/" restricted>
                <LoginView />
              </PublicRoute>
              <PublicRoute path="/register" exact redirectTo="/" restricted>
                <RegisterView />
              </PublicRoute>
              <PrivateRoute path="/logout" exact>
                <LogoutView />
              </PrivateRoute>
              <PrivateRoute path="/user-info" exact>
                <UserInfoView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </Container>
      </div>
    )
  );
};

export default App;
