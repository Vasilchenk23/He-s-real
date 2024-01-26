import ProductList from "./ProductList";
import Header from "./Header";
import Footer from "./Footer";


const KidsClothes = () => {
    return(
        <>
        <Header/>
        <h2>Детская одежда</h2>
        <ProductList department="kids" />
        <Footer/>
        </>
    );
}

export default KidsClothes