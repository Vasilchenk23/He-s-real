import ProductList from "./ProductList";
import Header from "./Header";
import Footer from "./Footer";
import '../../src/App.css';



const KidsClothes = () => {
    return(
        <>
        <Header/>
        <h2 className="kidsClothes">Детская одежда</h2>
        <ProductList department="kids" />
        <Footer/>
        </>
    );
}

export default KidsClothes