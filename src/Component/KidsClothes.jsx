import ProductList from "./ProductList";
import '../../src/App.css';



const KidsClothes = () => {
    return(
        <>
        <h2 className="kidsClothes">Детская одежда</h2>
        <ProductList department="kids" />
        </>
    );
}

export default KidsClothes