import React from "react";
import { Container, NavbarBrand, Navbar } from "reactstrap";
import OrderAdmin from "./Order";
function ViewNewOrder({ orders, updateViewOrder }) {
    let newOrder = 0;
    return (
        <div>
            <Navbar className="my-2" color="secondary" dark>
                <NavbarBrand>New Orders</NavbarBrand>
            </Navbar>
            <Container>
                {orders.length > 0
                    ? orders.map((o) => {
                          return !o.verified ? (
                              <OrderAdmin
                                  key={o.orderId}
                                  order={o}
                                  updateViewOrder={updateViewOrder}
                                  d={newOrder++}
                              />
                          ) : (
                              ""
                          );
                      })
                    : "No order"}
                {newOrder === 0 ? <p>There is no new order available</p> : ""}
            </Container>
        </div>
    );
}

export default ViewNewOrder;