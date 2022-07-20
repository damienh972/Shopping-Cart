import { ShoppingCartState } from "../../context/Context";

const Home: React.FC = () => {
  const { state:{products}, } = ShoppingCartState();
  console.log(products);
  
  return <div>Home</div>
};

export default Home;
