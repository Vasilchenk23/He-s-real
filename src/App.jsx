
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import './App.css';
import LoginForm from './Component/LoginForm';
import MainComponent from './Component/MainComponent';
import WomenClothes from './Component/WomenClothes';
import MenClothes from './Component/MenClothes';
import KidsClothes from './Component/KidsClothes'
import Feedback from './Component/Feedback';
import MainClothes from './Component/MainClothes';
import MainClothesOrder from './Component/MainClothesOrder';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/women" element={<WomenClothes/>} />
          <Route path="/men" element={<MenClothes/>} />
          <Route path="/kids" element={<KidsClothes/>} />
          <Route path="/logo" element={<MainComponent/>} />
          <Route path="/" element={<MainComponent/>} />
          <Route path="/clothes/:department/:productId" element={<MainClothes />} />
          <Route path="/cart/:price/:productName/:sizes/:collectionId/:id/:image" element={<MainClothesOrder />} />
          <Route path="/feedbacks" element={<Feedback />} />
        </Routes>
    </Router>
  );
}

export default App;
