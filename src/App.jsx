import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux';
import Page404 from './pages/page404/Page404';
import Layout from './pages/layout/Layout';
import Home from './pages/home/Home';
import './App.css';
import UserList from './pages/userlist/UserList';
import User from './pages/user/User';
import NewUser from './pages/newuser/NewUser';
import ProductList from './pages/productlist/ProductList';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' errorElement={<Page404 />}>
      <Route index element={<Navigate to='/home' />} />
      <Route path='/' element={<Layout />}>
        <Route path='home' element={<Home />} />
        <Route path='users' element={<UserList />} />
        <Route path='user/:email' element={<User />} />
        <Route path="new-user" element={<NewUser />} />
        <Route path='products' element={<ProductList />} />
      </Route>
      <Route path='*' element={<Page404 />} />
    </Route>
  )
)

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  )
}

export default App
