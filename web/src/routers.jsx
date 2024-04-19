import { lazy, Suspense } from 'react';
import LoadingScreen from './components/LoadingScreen';


const loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

const Home = loadable(lazy(() => import('./pages/Home')));
const Error = loadable(lazy(() => import('./pages/404')));
const Login = loadable(lazy(() => import('./pages/Login')));
const UserHome = loadable(lazy(() => import('./pages/User/Home')));
const UserUpdate = loadable(lazy(() => import('./pages/User/Update')));
const UserCreate = loadable(lazy(() => import('./pages/User/Create')));
const UserDelete = loadable(lazy(() => import('./pages/User/Delete')));
const EventHome = loadable(lazy(() => import('./pages/Event/Home')));
const EventUpdate = loadable(lazy(() => import('./pages/Event/Update')));
const EventCreate = loadable(lazy(() => import('./pages/Event/Create')));
const EventDelete = loadable(lazy(() => import('./pages/Event/Delete')));

const routes = [
  {
    exact: true,
    path: '/',
    element: (
      <Home />
    )
  }, {
    path: '/login',
    element: (
      <Login />
    )
  }, {
    path: '/user',
    element: (
      <UserHome />
    )
  }, {
    path: '/user/create',
    element: (
      <UserCreate />
    )
  }, {
    path: '/user/update',
    element: (
      <UserUpdate />
    )
  }, {
    path: '/user/delete',
    element: (
      <UserDelete />
    )
  },
  {
    path: '/event/create',
    element: (
      <EventCreate />
    )
  },
  {
    path: '/event/delete',
    element: (
      <EventDelete />
    )
  },
  {
    path: '/event',
    element: (
      <EventHome />
    )
  },
  {
    path: '/event/update',
    element: (
      <EventUpdate />
    )
  }, {
    path: '*',
    element: (
      <Error />
    )
  }
];

export default routes;