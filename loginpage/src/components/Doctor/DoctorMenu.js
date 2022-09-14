import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

const DoctorMenu = () => {
    return (
        <div> 
         <ListGroup>
           <Link
             className="list-group-item list-group-item-action"
             to="/doctor/view-drugs">
             View Drugs
           </Link>
           <Link
             className="list-group-item list-group-item-action"
             to="/doctor/cart">
             Cart
           </Link>
           </ListGroup>
           </div>
    );

};

export default DoctorMenu;