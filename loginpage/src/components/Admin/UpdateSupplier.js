import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Input, Form, FormGroup, Container, Card, Button } from "reactstrap";
import baseUrl from "../api's/base_url";

const UpdateSupplier = (props) => {

    const [Supplier, setSupplier] = useState({});
    
    let id = useParams().id;
    
    const getSupplierByIdFromApi = () => {
        axios.get(baseUrl + "/supplier/" +id).then(
            (response) => {
                console.log(response.data);
                setSupplier(response.data);
                console.log("set Supplier");
                console.log(Supplier);
            },
            (error) => {
                console.log("error in supplier by id");
                console.log(error);
            }
        );
    };

    useEffect(() => {
        document.title = "Update-Supplier";
        getSupplierByIdFromApi();
    }, []);

    const updateSupplieOnApi = () => {
        axios.put(baseUrl + "/supplier/" + id, Supplier).then(
            (response) => {
                console.log(response.data);
                setSupplier(response.data);
            },
            (error) => {
                console.log("error in supplier by id");
                console.log(error);
            }
        );
    };

    const updateHandler = () => {
        updateSupplieOnApi();
    };
    return (
        <div>
            <h1>View Supplier</h1>
            <Container>
                <Card className="p-4" color="secondary">
                    <Form onSubmit={updateHandler}>
                        <FormGroup>
                            <label>Name</label>
                            <Input
                                type="text"
                                defaultValue={Supplier.supplierName}
                                id="SupName"
                                name="supplierName"
                                onChange={(e) => {
                      setSupplier({ ...Supplier, supplierName: e.target.value });
                    }}
                            ></Input>
                            <label>Email</label>
                            <Input
                                type="email"
                                defaultValue={Supplier.supplierEmail}
                                id="SupEmail"
                                name="supplierEmail"
                                onChange={(e) => {
                      setSupplier({ ...Supplier, supplierEmail: e.target.value });
                    }}
                            ></Input>
                            <label>Contact</label>
                            <Input
                                type="text"
                                defaultValue={Supplier.supplierContact}
                                id="SupContact"
                                name="supplierContact"
                                onChange={(e) => {
                      setSupplier({ ...Supplier, supplierContact: e.target.value });
                    }}
                            ></Input>
                             <Button color="dark" type="submit" className="mx-2">
                                Save Update
                            </Button>
                            <Link to="/admin/view-supplier">
                                <Button color="dark" type="submit">
                                    Cancel
                                </Button>
                            </Link>
                        </FormGroup>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default UpdateSupplier;