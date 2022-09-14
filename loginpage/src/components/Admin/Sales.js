import axios from "axios";
import React, { useEffect } from "react";
import baseUrl from "../api's/base_url";
import { useState } from "react";
import { Button, Card, CardBody,Container,Form,Input } from "reactstrap";

const Sales = () => {

    const [TSale, setTSale] = useState(0.0);
    const [DocSale, setDocSale] = useState(0.0);
    const [DSale, setDSale] = useState(0.0);

    const TotalSale = () => {
        axios.get(baseUrl + "/sales/total").then(
            (response) => {
                setTSale(response.data);
            },
            (error) => {
                console.log("error");
            }
        );
    };

    const DoctorSaleById = () => {
        axios.get(baseUrl + "/sales/"+DocSale.a).then(
            (response) => {
                setDSale(response.data);
            },
            (error) => {
                console.log("error");
                alert("No Doctor found with this Id");
            }

        );
    };

    useEffect(() => {
        document.title = "PharmaCare";
        TotalSale();
    }, []);

    return (
        <div>
        <Container>
            <h1>View Sales</h1>
            <Card>
                <CardBody><h1 color="dark">TotalSale : Rs.{TSale}</h1></CardBody>
            
            <Form>
              <Input
                type="text"
                placeholder="Enter Doctor Id"
                id="Doctor Id"
                name="DoctorId"
                onChange={(e) => {
                      setDocSale({...Sales, a:e.target.value});
                    }}
              ></Input>
              {console.log(DocSale.a)}
              <Button onClick={DoctorSaleById}>View Sale by Doctor Id</Button>
              </Form>
             <CardBody >TotalSale by the doctor is Rs.{DSale}</CardBody>
              </Card>
              </Container>
        </div>
    )

}

export default Sales;