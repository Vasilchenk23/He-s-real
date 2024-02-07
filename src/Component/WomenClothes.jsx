import ProductList from "./ProductList";
import Header from "./Header";
import Footer from "./Footer";
import '../../src/App.css';

const WomenClothes = () => {
    return(
        <>
        <Header/>
        <h2 className="womenClothes">Женская одежда</h2>
        <ProductList department="women" />
        <Footer/>
        </>
    );
}

export default WomenClothes