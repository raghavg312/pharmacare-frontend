import React, { useEffect } from "react";
import { useState } from "react";
import Drug from "./DoctorDrug";
import { Badge, Navbar, Dropdown, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import baseUrl from "../api's/base_url";
import { CartState } from "./Context";
import "../Style.css";

function ViewDoctorDrugs() {
    const {
        state: { cart },
        dispatch,
        drugDispatch,
      } = CartState();

    const [drugs, setDrugs] = useState({});
    const getOrdersFromApi = () => {
        axios.get(baseUrl + "/drug").then(
            (response) => {
                setDrugs(response.data);
                console.log(response.data);
            },
            (error) => {
                console.log("error");
                setDrugs({});
            }
        );
    };

    useEffect(() => {
        document.title = "Drugs";
        getOrdersFromApi();
    }, []);

    return (
        <div>
            <h1>Drugs List</h1>
            <Navbar>
            <div className="search mx-3">
            </div>
            <div className="mx-3">
                
                <Dropdown alignRight>
                    <Dropdown.Toggle variant="alpha">
                        <FaShoppingCart color="black" fontSize="25px" />
                        <Badge>{cart.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ minWidth: 370 }}>
                       {cart.length > 0 ? (
                        <>
                          {
                            cart.map((drugs) => (
                              <span className="cartitem" key={drugs.drugId}>
                                <div className="cartItemDetail">
                                    <span className="mx-2">{drugs.drugName}</span>
                                    <span className="mx-2">₹ {drugs.price}</span>
                               
                                <AiFillDelete
                                    fontSize="20px"
                                    className="deleteIcon mx-2"
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                    dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: drugs,
                                     })
                                     }
                                />
                                 </div>
                              </span>
                          ))}
                            <Link to="/doctor/cart">
                               <Button style={{ width: "95%", margin: "0 10px" }}>
                                 Go To Cart
                               </Button>
                            </Link>
                        </>
                        ) : (
                            <span style={{ padding: 10 }}>Cart is Empty!</span>
                          )}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            </Navbar>
            

            <div className="drug">
            {drugs.length > 0
                ?  
                     drugs.map((d) => <Drug key={d.drugId} drug={d} />)
                : "no drugs available"} 
                </div>
        </div>
    );
}
export default ViewDoctorDrugs;