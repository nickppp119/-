import { lazy, Suspense } from 'react';
import LoadingScreen from './components/LoadingScreen';
import { useRoutes } from 'react-router-dom';
import UserGuard from './components/Authentication/UserGuard';


const loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

const PageRoutes = () => {
  const Home = loadable(lazy(() => import('./pages/Home')));
  const Error = loadable(lazy(() => import('./pages/404')));
  const Login = loadable(lazy(() => import('./pages/Login')));
  const UserHome = loadable(lazy(() => import('./pages/User/Home')));
  const UserCreate = loadable(lazy(() => import('./pages/User/Create')));
  const UserUpdate = loadable(lazy(() => import('./pages/User/Update')));
  const UserRemove = loadable(lazy(() => import('./pages/User/Remove')));
  const EventHome = loadable(lazy(() => import('./pages/Event/Home')));
  const EventCreate = loadable(lazy(() => import('./pages/Event/Create')));
  const EventUpdate = loadable(lazy(() => import('./pages/Event/Update')));
  const EventRemove = loadable(lazy(() => import('./pages/Event/Remove')));

  const routes = useRoutes([
    { exact: true, path: '/', element: <UserGuard><Home /></UserGuard> },
    { path: '/login', element: <Login /> },
    {
      path: '/user',
      children: [
        { path: '', element: <UserGuard><UserHome /></UserGuard> },
        { path: 'create', element: <UserGuard><UserCreate /></UserGuard> },
        { path: 'update', element: <UserGuard><UserUpdate /></UserGuard> },
        { path: 'remove', element: <UserGuard><UserRemove /></UserGuard> }
      ]
    },
    {
      path: '/event',
      children: [
        { path: '', element: <UserGuard><EventHome /></UserGuard> },
        { path: 'create', element: <UserGuard><EventCreate /></UserGuard> },
        { path: 'update', element: <UserGuard><EventUpdate /></UserGuard> },
        { path: 'remove', element: <UserGuard><EventRemove /></UserGuard> }
      ]
    },
    { path: '*', element: <Error /> }
  ]);

  return routes;
}

export default PageRoutes;