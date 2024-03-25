import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux';
import Page404 from './pages/page404/Page404';
import Layout from './pages/layout/Layout';
import Home from './pages/home/Home';
import './App.css';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Navigate to='/home' />} />
      <Route path='/' element={<Layout />}>
        <Route path='home' element={<Home />} />
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
