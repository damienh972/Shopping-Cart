import { ShoppingCartState } from "../../context/Context";
import { ProductType } from "../../models";
import SingleProduct from "../SingleProduct";
import Filters from "../Filters";
import { RiEyeCloseFill } from "react-icons/ri";
import "../styles.css";

const Home: React.FC = () => {
  const {
    state: { products },
    filterState: { sort, byStock, byFastDelivery, byRating, searchQuery, show },
    filterDispatch
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
      {show ? (
        <Filters />
      ) : (
        <div className="filters closed">
          <RiEyeCloseFill
            fontSize="30px"
            style={{ cursor: "pointer", marginLeft: "15px" }}
            onClick={() =>
              filterDispatch({
                type: "TOGGLE_FILTERS",
              })
            }
          />
        </div>
      )}

      <div className="productContainer">
        {transformProducts().map((prod: ProductType) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
