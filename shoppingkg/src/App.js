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
        <BarBottom />
      </Router>
    </div>
  );
}

export default App;
