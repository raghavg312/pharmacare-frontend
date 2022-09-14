import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import baseUrl from "../api's/base_url";
import ViewAllOrders from "./ViewAllOrder";
import ViewNewOrder from "./ViewNewOrder";
import ViewPickedUpOrder from "./ViewPickedUpOrder";
import ViewVerifiedOrder from "./ViewVerifiedOrder";

function ViewOrdersAdmin({ flag }) {
    const [orders, setOrders] = useState({});

    const getOrdersFromApi = () => {
        axios.get(baseUrl + "/order").then(
            (response) => {
                console.log(response.data);
                setOrders(response.data);
            },
            (error) => {
                console.log("error");
                setOrders({});
            }
        );
    };

    useEffect(() => {
        document.title = "PharmaCare";
        getOrdersFromApi();
    }, []);

    const updateViewOrder = () => {
        getOrdersFromApi();
    };
    const view = () => {
        switch (flag) {
            case "verified":
                return (
                    <ViewVerifiedOrder
                        orders={orders}
                        updateViewOrder={updateViewOrder}
                    />
                );
            case "new":
                return (
                    <ViewNewOrder
                        orders={orders}
                        updateViewOrder={updateViewOrder}
                    />
                );

            case "pickedup":
                return (
                    <ViewPickedUpOrder
                        orders={orders}
                        updateViewOrder={updateViewOrder}
                    />
                );
            default:
                return (
                    <ViewAllOrders
                        orders={orders}
                        updateViewOrder={updateViewOrder}
                    />
                );
        }
    };
    return <div>{view()}</div>;
}
export default ViewOrdersAdmin;