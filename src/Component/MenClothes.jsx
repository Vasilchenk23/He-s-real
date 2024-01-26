import ProductList from "./ProductList";
import Header from "./Header";
import Footer from "./Footer";

const MenClothes = () => {
    return(
        <>
        <Header/>
        <h2>Мужская одежда</h2>
        <ProductList department="men" />
        <Footer/>
        </>
    );
}

export default MenClothes;