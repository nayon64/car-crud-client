
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main/Main';
import CheckOut from './pages/CheckOut/CheckOut';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Order from './pages/Order/Order';
import Register from './pages/Register/Register';
import PrivetRoute from './router/PrivetRoute/PrivetRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivetRoute>
            <CheckOut></CheckOut>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://car-crud-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/order",
        element: (
          <PrivetRoute>
            <Order></Order>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
