import React from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import OrderAdmin from "./Order";
function ViewPickedUpOrder({ orders, updateViewOrder }) {
    return (
        <div>
            <Navbar className="my-2" color="secondary" dark>
                <NavbarBrand>Picked Up Orders</NavbarBrand>
            </Navbar>

            <Container>
                {orders.length > 0
                    ? orders.map((o) => {

                          return o.pickedUp ? (
                              <OrderAdmin
                                  key={o.orderId}
                                  order={o}
                                  updateViewOrder={updateViewOrder}
                              />
                          ) : (
                              ""
                          );
                      })
                    : "No order"}
            </Container>
        </div>
    );
}

export default ViewPickedUpOrder;