import React from "react";
import {
    Card,
    CardBody,
    CardText,
    Container,
    CardSubtitle,
    Button,
} from "reactstrap";
import {CartState} from "./Context";
import "../Style.css";

const Drug = ({ drug }) => {
    
    const { state:{cart}, dispatch, } = CartState();
    return (
        <div>
                <Card >
                    <CardBody>
                        <CardSubtitle>
                            Drug name : {drug.drugName}{" "}
                        </CardSubtitle>
                        <CardText>Drug id : {drug.drugId}</CardText>
                        <CardText>Expiry date : {drug.expiryDate}</CardText>
                        <CardText>Quantity : {drug.drugQuantity}</CardText>
                        <CardText>Price : {drug.price} </CardText>
                    </CardBody>
                    <CardBody>{
                        cart.some((d)=> d.drugId===drug.drugId)?(
                            <Button variant="danger" onClick={() =>
                                dispatch({
                                  type: "REMOVE_FROM_CART",
                                  payload: drug,
                                })
                              }>Remove from cart</Button>
                        ) : (
                        <Button disabled={drug.drugQuantity===0} onClick={()=>{
                            dispatch({
                                type:'ADD_TO_CART',
                                payload:drug
                            });
                        }}>
                            {drug.drugQuantity===0? "Out of stock":"Add to cart"}</Button>)
                    }
                        
                    </CardBody>
                </Card>
        </div>
    );
};

export default Drug;