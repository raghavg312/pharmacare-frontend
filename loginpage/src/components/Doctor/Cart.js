import { useEffect, useState } from "react";
import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { Navbar,NavbarBrand } from "reactstrap";
import { CartState } from "./Context";
import "../Style.css";
import axios from "axios";
import baseUrl from "../api's/base_url";

const Cart = ({user}) => {

  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();
  
  const postOrderToApi = (order) => {
    axios.post(baseUrl + "/order", order).then(
        (response) => {
            console.log(response);
            alert("Order Placed. Mail sent to your EmailId");
        },
        (error) => {
            console.log(error);
        }
    );
};
const [order, setOrder] = useState({
  drugList: cart,
  doctorId : user.userId
});

const placeOrderHandler = () => {
  console.log(order);
  postOrderToApi(order);
};

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, curr) => acc + Number(curr.price) * curr.drugQuantity,
        0
      )
    );
  }, [cart]);

  const handleOrder = () => {
    console.log(drugList[1]);
  };
  let docId;
  let drugList=cart;

  return (
    <div className="home">
     
      <div className="drugContainer">
      <Navbar className="my-2" color="secondary" >
                <NavbarBrand>Your Cart</NavbarBrand>
            </Navbar>
        <ListGroup>
          {cart.map((drugs) => (
            <ListGroup.Item key={drugs.drugId}>
              <Row>
                <Col md={2}></Col>
                <Col md={2}>
                  <span>{drugs.drugName}</span>
                </Col>
                <Col md={2}>₹ {drugs.price}</Col>

                {/* 	<Col md={3}>
                  <Input 
                    
                    placeholder="Quantity"
                    type="number"
                    value={drugs.drugQuantity}
                    onChange={(e)=>
                    dispatch({
                      type:"CHANGE_CART_QTY",
                      payload:{
                        drugId: drugs.DrugId,
                        Quantity: e.target.value,
                      }
                    })}></Input>
                  </Col>    */}
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={drugs.drugQuantity}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          drugId: drugs.DrugId,
                          drugQuantity: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(drugs.drugQuantity).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: drugs,
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
      <br></br>
      <div>
        <span className="title " >Subtotal ({cart.length}) items</span><br></br><br></br>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹{total}</span><br></br> <br></br>
        <Button
          type="button"
          disabled={cart.length === 0}
          onClick={placeOrderHandler}
        >
          Place order
        </Button>
      </div>
    </div>
  );
};

export default Cart;
