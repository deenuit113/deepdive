import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import OrderPage from './pages/OrderPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='product/:id' index element={<DetailPage/>}/>
          <Route path='cart' index element={<CartPage/>}/>
          <Route path='login' index element={<LoginPage/>}/>
          <Route path='register' index element={<RegisterPage/>}/>
          <Route path='order' index element={<OrderPage/>}/>
          <Route path='*' index element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
