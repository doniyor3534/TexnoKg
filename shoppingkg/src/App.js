import {
  BrowserRouter as
    Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from "./Component/Home/Home";
import Navbar from "./Component/navbar/Navbar";
import Likes from "./Component/CartsLikes/Likes";
import Carts from "./Component/CartsLikes/Carts";
import CategoryPage from './Component/CategoryPage/CategoryPage';
import LoginLogout from './Component/LoginLogout/LoginLogout';
import BarBottom from './Component/navbar/barBottom';
import ModalFunc from './Component/All/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTelegramPlane } from 'react-icons/fa';
import Footer from './Component/footer/Footer';



function App() {
  // fetch('https://fakestoreapi.com/products')
  // .then(res=>res.json())
  // .then(json=>console.log(json))


  return (
    <div className="app   bg-bg1   dark:bg-dark ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorypage" element={<CategoryPage />} />
          <Route path="/loginlogout" element={<LoginLogout />} />
          <Route path="/like" element={<Likes />} />
          <Route path="/cart" element={<Carts />} />
        </Routes>
        <Footer/>
        <BarBottom />
        {/* ////////////////////modal */}
        <ModalFunc/>
        {/* //////////////////toastify */}
        <ToastContainer />
        {/* //////////////////Icon telegram */}
        <a className='fixed lg:bottom-16  lg:right-10 bottom-24 right-3 lg:text-4xl text-lg p-1 lg:p-3 border  text-blue-600 border-blue-600 rounded-full    ' href="https://t.me/DoniyorbekTursunov35341" target='blank'><FaTelegramPlane/></a>
      </Router>
    </div>
  );
}

export default App;
