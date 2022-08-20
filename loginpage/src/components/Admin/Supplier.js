import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Button
} from "reactstrap";
import baseUrl from "../api's/base_url";

const Supplier=({ supplier, flag, deletionView,index })=>{

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
             <td>{Supplier.supplierId}</td>
            <td>{Supplier.supplierName}</td>
            <td>{Supplier.supplierEmail}</td>
            <td> {Supplier.supplierContact}</td>
             <td>{console.log(Supplier.supplier)}</td> 
            {!flag ? (
                <>
                    <td>
                        <Link to={"/admin/update-supplier/" + Supplier.supplierId}>
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
