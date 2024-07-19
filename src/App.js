
import './App.css';
import CartProvider from './Store/CartProvider';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Store from './Pages/Store';
import Home from './Pages/Home';
import Root from './Pages/Root';
import About from './Pages/About';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/store',
          element: <Store />
        },
        {
          path: '/about',
          element: <About />
        },
      ]
    }
  ])


  return (
    <CartProvider>
            
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
