
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import './App.css';
import LoginForm from './Component/LoginForm';
import MainComponent from './Component/MainComponent';
import WomenClothes from './Component/WomenClothes';
import MenClothes from './Component/MenClothes';
import About from './Component/About'
import ServiceСommitments from './Component/ServiceСommitments'
import KidsClothes from './Component/KidsClothes'
import MainDisplayClothesMen from "./Component/MainDisplayClothesMen"
import MainDisplayClothesWomen from "./Component/MainDisplayClothesWomen"
import MainDisplayClothesKids from "./Component/MainDisplayClothesKids"
import ShoppingBag from "./Component/ShoppingBag"
import Feedback from './Component/Feedback';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/women" element={<WomenClothes/>} />
          <Route path="/men" element={<MenClothes/>} />
          <Route path="/kids" element={<KidsClothes/>} />
          <Route path="/logo" element={<MainComponent/>} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<ServiceСommitments />} />
          <Route path="/" element={<MainComponent/>} />
          <Route path="/clothes/men/:productId" element={<MainDisplayClothesMen />} />
          <Route path="/clothes/women/:productId" element={<MainDisplayClothesWomen />} />
          <Route path="/clothes/kids/:productId" element={<MainDisplayClothesKids />} />
          <Route path="/basket" element={<ShoppingBag />} />
          <Route path="/feedbacks" element={<Feedback />} />
        </Routes>
    </Router>
  );
}

export default App;
