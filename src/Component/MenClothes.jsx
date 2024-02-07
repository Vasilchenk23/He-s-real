import ProductList from "./ProductList";
import Header from "./Header";
import Footer from "./Footer";
import '../../src/App.css';


const MenClothes = () => {
    return(
        <>
        <Header/>
        <h2 className="menClothes">Мужская одежда</h2>
        <ProductList department="men" />
        <Footer/>
        </>
    );
}

export default MenClothes;