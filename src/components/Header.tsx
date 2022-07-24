import { useRef } from "react";
import { Link } from "react-router-dom";
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

const Header: React.FC = () => {
  const menu = useRef(null);
  const { state: { cart }, dispatch } = ShoppingCartState();

  const handleMenu = () => {
    console.log(menu.current)
    // menu.current!.show = false;
  }

  return (
    <header className="header">
      <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">Marketplace</Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl className="m-auto" placeholder="Search a product" />
          </Navbar.Text>
          <Nav>
            <Dropdown align="end">
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge bg="success">{cart.length}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="drop_menu"
                ref={menu}
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
                    <Link to="/cart">
                      <Button onClick={() => handleMenu()}style={{ width: "95%", margin: "10px" }}>
                        Go to Cart
                      </Button>
                    </Link>
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