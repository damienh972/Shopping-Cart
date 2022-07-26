import { Form, Button } from "react-bootstrap";
import { ShoppingCartState } from "../context/Context";
import { GoEye } from "react-icons/go";
import Rating from "./Rating";
import "./styles.css";

const Filters = () => {
  const { filterState: {
    sort,
    byStock,
    byFastDelivery,
    byRating,
  }, filterDispatch } = ShoppingCartState();

  console.log(sort, byStock, byFastDelivery, byRating, );

  return (
    <div className="filters">
      <span className="title">
        Filter
        <GoEye
          fontSize="25px"
          style={{ cursor: "pointer", marginLeft: "100px" }}
          onClick={() =>
            filterDispatch({
              type: "TOGGLE_FILTERS",
            })
          }
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            filterDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            filterDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            filterDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button
        onClick={() =>
          filterDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
}

export default Filters;