import React, { useEffect } from "react";
import { useState } from "react";
import Supplier from "./Supplier";
import axios from "axios";
import baseUrl from "../api's/base_url";
import { Table, Navbar, NavbarBrand } from "reactstrap";

function ViewSupplier() {
    let index = 0;
    const [supplier, setSupplier] = useState({});

    const getSupplierFromApi = () => {
        axios.get(baseUrl + "/supplier").then(
            (response) => {
                setSupplier(response.data);
            },
            (error) => {
                console.log("error");
                setSupplier({});
            }
        );
    };

    useEffect(() => {
        document.title = "Supplier";
        getSupplierFromApi();
    }, []);

    const updateSupplierView = (id) => {
        setSupplier(supplier.filter((s) => s.supplierId !== id));
    };

    return (
        <div>
            <Navbar className="my-2" color="secondary" dark>
                <NavbarBrand href="/">
                    Suppliers in the Pharmacy
                </NavbarBrand>
            </Navbar>
            {supplier.length > 0 ? (
                <Table responsive>
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Supplier Id</th>
                            <th>Supplier Name</th>
                            <th>Expiry Date</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th> </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {supplier.map((s) => {
                            return (
                                <Supplier
                                    key={s.supplierId}
                                    Supplier={s}
                                    deletionView={updateSupplierView}
                                    index={++index}
                                />
                            );
                        })}
                    </tbody>
                </Table>
            ) : (
                "no suppliers available"
            )}
        </div>
    );
}
export default ViewSupplier;
