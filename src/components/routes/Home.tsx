import { ShoppingCartState } from "../../context/Context";
import { ProductType } from "../../models";
import SingleProduct from "../SingleProduct";
import Filters from "../Filters";
import "../styles.css";

const Home: React.FC = () => {
  const { state:{products}, } = ShoppingCartState();
  
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {(products).map((prod: ProductType) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
