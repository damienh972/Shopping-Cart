import { ShoppingCartState } from "../../context/Context";
import { ProductType } from "../../models";
import SingleProduct from "../SingleProduct";
import Filters from "../Filters";
import "../styles.css";

const Home: React.FC = () => {
  const {
    state: { products },
    filterState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = ShoppingCartState();

  const transformProducts = () => {
    let sortedProducts = products;
    console.log(sort);

    if (sort) {
      sortedProducts = sortedProducts.sort(
        (a, b) => sort === "lowToHigh"
        ? Number(a.price!) - Number(b.price!)
        : Number(b.price!) - Number(a.price!)
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.inStock
      );
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.fastDelivery
      );
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.rating! >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.name!.toLowerCase().includes(searchQuery)
      );
    }
    return sortedProducts;
  };

 

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((prod: ProductType) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
