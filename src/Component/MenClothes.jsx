import ProductList from "./ProductList";
import '../../src/App.css';


const MenClothes = () => {
    return(
        <>
        <h2 className="menClothes">Мужская одежда</h2>
        <ProductList department="men" />
        </>
    );
}

export default MenClothes;