import React from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import OrderAdmin from "./Order";
function ViewAllOrders({ orders, updateViewOrder }) {
    return (
        <div>
            <Navbar className="my-2" color="secondary" dark>
                <NavbarBrand>All Orders</NavbarBrand>
            </Navbar>
            <Container>
                {orders.length > 0
                    ? orders.map((o) => {
                          console.log("view order in map ");
                          return (
                              <OrderAdmin
                                  key={o.orderId}
                                  order={o}
                                  updateViewOrder={updateViewOrder}
                              />
                          );
                      })
                    : "No order"}
            </Container>
        </div>
    );
}

export default ViewAllOrders;