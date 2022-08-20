import React, { useState } from "react";
import {
    Input,
    Form,
    FormGroup,
    Container,
    Card,
    Button,
    Navbar,
    NavbarBrand,
} from "reactstrap";
import axios from "axios";
import baseUrl from "../api's/base_url";
function AddDrug() {

    const [Drug, setDrug] = useState({});
    
    const handleAddDrugForm = (event) => {
        console.log("handle form drug");
        console.log(Drug);
        AddDrugToApi(Drug);
        event.preventDefault();
    };

    const AddDrugToApi = (drugDetails) => {
        console.log("handle form drugDetails");
        console.log(drugDetails);
        axios.post(baseUrl + "/drug", drugDetails).then(
            (response) => {
                console.log("drug save successfully");
                alert("Drug added successfully.")
            },
            (error) => {
                console.log("drug did not save");
            }
        );
    };

    return (
        <div className="AddDrug my-2">
            <Navbar className="my-2" color="secondary" dark>
                <NavbarBrand>Fill all the Details to add drug</NavbarBrand>
            </Navbar>
            <Container>
                <Card className="p-4" color="secondary">
                    <Form onSubmit={handleAddDrugForm}>
                        <FormGroup>
                            <label>Drug Name</label>
                            <Input
                                type="text"
                                placeholder="Enter Drug Name"
                                id="DName"
                                name="drugName"
                                onChange={(e) => {
                                    setDrug({
                                        ...Drug,
                                        drugName: e.target.value,
                                    });
                                }}
                            ></Input>
                            <label>Expiry Date</label>
                            <Input
                                type="date"
                                placeholder="Enter Expiry Date"
                                id="ExpDate"
                                name="expiryDate"
                                onChange={(e) => {
                                    setDrug({
                                        ...Drug,
                                        expiryDate: e.target.value,
                                    });
                                }}
                            ></Input>
                            <label>Quantity</label>
                            <Input
                                type="Number"
                                placeholder="Enter Quantity"
                                id="Qty"
                                name="drugQuantity"
                                onChange={(e) => {
                                    setDrug({
                                        ...Drug,
                                        drugQuantity: e.target.value,
                                    });
                                }}
                            ></Input>
                            <label>Price</label>
                            <Input
                                type="Number"
                                placeholder="Enter Drug Price"
                                id="price"
                                name="price"
                                onChange={(e) => {
                                    setDrug({
                                        ...Drug,
                                        price: e.target.value,
                                    });
                                }}
                            ></Input>
                            <Button color="dark" type="submit">
                                Add
                            </Button>
                        </FormGroup>
                    </Form>
                </Card>
            </Container>
        </div>
    );
}

export default AddDrug;