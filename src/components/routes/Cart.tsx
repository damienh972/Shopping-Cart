import { useEffect, useState } from "react";
import { ShoppingCartState } from "../../context/Context";
import { Button, Col, FormControl, ListGroup, Row, Image } from "react-bootstrap";
import { FaEthereum } from "react-icons/fa";
import Rating from "../Rating";
import { AiFillDelete } from "react-icons/ai";

const Cart: React.FC = () => {
  const {
    state: { cart },
    dispatch,
  } = ShoppingCartState();
  const [total, setTotal] = useState<number>();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty!, 0)
    );
  }, [cart])
  
  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>
                  <span>
                    {prod.price} <FaEthereum fontSize="15px" />
                  </span>
                </Col>
                <Col md={2}>
                  <Rating rating={prod.rating} />
                </Col>
                <Col md={2}>
                  <FormControl
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QUANTITY",
                        payload: { id: prod.id, qty: Number(e.target.value) },
                      })
                    }
                  >
                    {Array.from(Array(prod.inStock).keys()).map(
                      (x: number) => (
                        (<option key={x + 1}>{x + 1}</option>)
                      )
                    )}
                  </FormControl>
                </Col>
                <Col md={1}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>
          Total: {total} <FaEthereum fontSize="15px" />
        </span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
