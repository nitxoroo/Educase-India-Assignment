import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Welcome from './components/welcome';
import Login from './components/login';
import Profile from './components/profile';
import Account from './components/account';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/account",
    element: <Account />
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
