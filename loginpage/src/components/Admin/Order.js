import React, { useState } from "react";
import DrugAdmin from "./Drug";

import {
    Button,
    Badge,
    Table,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from "reactstrap";
import axios from "axios";
import baseUrl from "../api's/base_url";

function OrderAdmin({ order, updateViewOrder }) {
    let index = 0;
    const [open, setOpen] = useState();
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    const verifyOrder = () => {
        axios.get(baseUrl + "/order/verify/" + order.orderId).then(
            (response) => {
                console.log("verified order");
                updateViewOrder();
            },
            (error) => {
                console.log("unable to verify");
            }
        );
    };

    const pickUpOrder = () => {
        axios.get(baseUrl + "/order/pickUp/" + order.orderId).then(
            (response) => {
                console.log("order placed in pick up");
                updateViewOrder();
            },
            (error) => {
                console.log("unable to update pick up ");
            }
        );
    };

    const handleVerifyOrder = () => {
        console.log("handle verify ");
        verifyOrder();
    };

    const handlePickUp = () => {
        console.log("handle pick up ");
        pickUpOrder();
    };
    return (
        <div>
            <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId="1">
                        <strong>Order Id : </strong>
                        {order.orderId}
                        <span className="mx-2">
                            <strong> Doctor Id :</strong> {order.doctorId}
                        </span>
                        {order.verified ? (
                            <Badge className="mx-2" color="success" pill>
                                verified
                            </Badge>
                        ) : (
                            ""
                        )}
                        {order.pickedUp ? (
                            <Badge className="mx-2" color="success" pill>
                                Picked
                            </Badge>
                        ) : (
                            ""
                        )}
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                        {order.drugList.length > 0 ? (
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>S.N.</th>
                                        <th>Drug Id</th>
                                        <th>Drug Name</th>
                                        <th>Expiry Date</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.drugList.map((d) => (
                                        <DrugAdmin
                                            key={d.drugId}
                                            drug={d}
                                            flag={true}
                                            index={++index}
                                        />
                                    ))}
                                    <tr>
                                        <td> </td>
                                        <td> </td>
                                        <td> </td>
                                        <td>
                                            {!order.verified ? (
                                                <Button
                                                    size="sm"
                                                    className="mx-1"
                                                    color="primary"
                                                    onClick={handleVerifyOrder}
                                                >
                                                    Verify
                                                </Button>
                                            ) : (
                                                ""
                                            )}

                                            {order.verified ? (
                                                order.pickedUp ? (
                                                    ""
                                                ) : (
                                                    <Button
                                                        size="sm"
                                                        className="mx-1"
                                                        color="primary"
                                                        onClick={handlePickUp}
                                                    >
                                                        pick Up
                                                    </Button>
                                                )
                                            ) : (
                                                <Button
                                                    size="sm"
                                                    className="mx-1"
                                                    color="primary"
                                                    disabled
                                                >
                                                    pick Up
                                                </Button>
                                            )}
                                        </td>

                                        <td>
                                            <strong>Total Price :</strong>
                                        </td>

                                        <td> {order.totalPrice}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        ) : (
                            "empty drug"
                        )}
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default OrderAdmin;