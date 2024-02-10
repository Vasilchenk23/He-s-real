import ProductList from "./ProductList";
import '../../src/App.css';

const WomenClothes = () => {
    return(
        <>
        <h2 className="womenClothes">Женская одежда</h2>
        <ProductList department="women" />
        </>
    );
}

export default WomenClothes