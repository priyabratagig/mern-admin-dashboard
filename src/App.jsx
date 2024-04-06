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
import Product from './pages/product/Product';
import NewProduct from './pages/newproduct/NewProduct';
import EmailSettings from './pages/emailsettings/EmailSettings';
import UnderConstruction from './pages/underconstruction/UnderConstruction';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' errorElement={<Page404 />}>
      <Route index element={<Navigate to='/home' />} />
      <Route path='/' element={<Layout />}>
        <Route path='home' element={<Home />} />
        <Route path='home/analytics' element={<Home />} />
        <Route path='home/sales' element={<Home />} />
        <Route path='users' element={<UserList />} />
        <Route path='user/:email' element={<User />} />
        <Route path="new-user" element={<NewUser />} />
        <Route path='products' element={<ProductList />} />
        <Route path='product/:productName' element={<Product />} />
        <Route path="newproduct" element={<NewProduct />} />
        <Route path='emailsettings' element={<EmailSettings />} />
        <Route path='feedbacksettings' element={<UnderConstruction />} />
        <Route path='messagesettings' element={<UnderConstruction />} />
        <Route path='managestuffs' element={<UnderConstruction />} />
        <Route path='analytics' element={<UnderConstruction />} />
        <Route path='reports' element={<UnderConstruction />} />
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
