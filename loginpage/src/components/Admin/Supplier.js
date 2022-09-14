import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Button
} from "reactstrap";
import baseUrl from "../api's/base_url";

const Supplier=({ supplier, flag, deletionView,index })=>{
    console.log(supplier);

  const deleteSupplierHandler = () => {
    axios.delete(baseUrl + "/supplier/" + supplier.supplierId).then(
        (response) => {
            console.log(response);
            console.log(deletionView);
           deletionView(supplier.supplierId);
        },
        (error) => {
            console.log(error);
        }
    );
};

  return (
       <tr>
        <th scope="row">{index}</th> 
             <td>{supplier.supplierId}</td>
            <td>{supplier.supplierName}</td>
            <td>{supplier.supplierEmail}</td>
            <td> {supplier.supplierContact}</td>
            {!flag ? (
                <>
                    <td>
                        <Link to={"/admin/update-supplier/" + supplier.supplierId}>
                            <Button color="primary" className="mx-1">
                                update
                            </Button>
                        </Link>
                        <Button color="danger" onClick={deleteSupplierHandler}>
                            delete
                        </Button>
                    </td>
                </>
            ) : (
                <td></td>
            )}
        </tr>
    );
};

export default Supplier;
