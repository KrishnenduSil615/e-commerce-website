
import './App.css';
import CartProvider from './Store/CartProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Store from './Pages/Store';
import Home from './Pages/Home';
import Root from './Pages/Root';
import About from './Pages/About';
import Contect from './Pages/Contect';
import ProductPage from './Pages/ProductPage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/store',
          element: <Store />
        },
        {
          path: '/store/:productId',
          element: <ProductPage /> // New route for individual product pages
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contect />
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

