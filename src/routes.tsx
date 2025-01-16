import { useRoutes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { Home, Contact, ProductDetails, Register, Login, UserProfile, AdminProfile, Products, NotFound, Logout } from './components/pages';

const Routes = () => {
  const user = useSelector((state: RootState) => state.user.user);

  const element = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/contact', element: <Contact /> },
    { path: '/products/:id', element: <ProductDetails /> },
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },
    { path: '/logout', element: <Logout /> },
    { path: '/dashboard/user/profile', element: user ? <UserProfile /> : <Navigate to="/login" /> },
    { path: '/dashboard/admin/profile', element: user?.isAdmin ? <AdminProfile /> : <Navigate to="/login" /> },
    { path: '/dashboard/admin/products', element: user?.isAdmin ? <Products /> : <Navigate to="/login" /> },
    { path: '*', element: <NotFound /> },
  ]);

  return element;
};

export default Routes;
