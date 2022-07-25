import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  Container,
  FormControl,
  Nav,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { FaShoppingCart, FaEthereum } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { ShoppingCartState } from "../context/Context";
import { Location } from "../models";




const Header: React.FC = () => {
  const url:Location = useLocation();
  const { state: { cart }, dispatch, filterDispatch } = ShoppingCartState();

  const handleMenu = () => {
    document.getElementById("drop_menu")!.classList.remove("show");
  }

  return (
    <header className="header">
      <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">Marketplace</Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              className="m-auto"
              placeholder="Search a product"
              onChange={(e) =>
                filterDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value
                })
              }
            />
          </Navbar.Text>
          <Nav>
            <Dropdown align="end">
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge bg="success">{cart.length}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu
                id="drop_menu"
                className="drop_menu"
                align="start"
                style={{ minWidth: 370, padding: cart.length === 0 ? 20 : 0 }}
              >
                {cart.length > 0 ? (
                  <>
                    {cart.map((prod) => (
                      <span className="cartItem" key={prod.id}>
                        <img
                          className="cartItem__img"
                          src={prod.image}
                          alt={prod.name}
                        />
                        <div className="cartItem__detail">
                          <span>{prod.name}</span>
                          <span>
                            {prod.price} <FaEthereum fontSize="15px" />
                          </span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })
                          }
                        />
                      </span>
                    ))}
                    {url.pathname !== "/cart" && (
                      <Link to="/cart">
                        <Button
                          onClick={() => handleMenu()}
                          style={{ width: "95%", margin: "10px" }}
                        >
                          Go to Cart
                        </Button>
                      </Link>
                    )}
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is empty</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;