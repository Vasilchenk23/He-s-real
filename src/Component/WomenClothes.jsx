import ProductList from "./ProductList";
import Header from "./Header";
import Footer from "./Footer";
const WomenClothes = () => {
    return(
        <>
        <Header/>
        <h2>Женская одежда</h2>
        <ProductList department="women" />
        <Footer/>
        </>
    );
}

export default WomenClothes