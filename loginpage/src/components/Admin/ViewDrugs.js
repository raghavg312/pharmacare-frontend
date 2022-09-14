import React, { useEffect } from "react";
import { useState } from "react";
import DrugAdmin from "./Drug";
import axios from "axios";
import baseUrl from "../api's/base_url";
import { Table, Navbar, NavbarBrand } from "reactstrap";

function ViewDrugsAdmin() {
    let index = 0;
    const [drugs, setDrugs] = useState({});

    const getDrugsFromApi = () => {
        axios.get(baseUrl + "/drug").then(
            (response) => {
                setDrugs(response.data);
            },
            (error) => {
                console.log("error");
                setDrugs({});
            }
        );
    };

    useEffect(() => {
        document.title = "PharmaCare";
        getDrugsFromApi();
    }, []);

    const updateDrugView = (id) => {
        setDrugs(drugs.filter((d) => d.drugId !== id));
    };

    return (
        <div>
            <Navbar className="my-2" color="secondary" dark>
                <NavbarBrand href="/">
                    Availabe drugs in the Pharmacy
                </NavbarBrand>
            </Navbar>
            {drugs.length > 0 ? (
                <Table responsive>
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Drug Id</th>
                            <th>Drug Name</th>
                            <th>Expiry Date</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th> </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {drugs.map((d) => {
                            return (
                                <DrugAdmin
                                    key={d.drugId}
                                    drug={d}
                                    deletionView={updateDrugView}
                                    index={++index}
                                />
                            );
                        })}
                    </tbody>
                </Table>
            ) : (
                "no drugs available"
            )}
        </div>
    );
}
export default ViewDrugsAdmin;