import React from "react";
import { Container, NavbarBrand, Navbar } from "reactstrap";
import OrderAdmin from "./Order";
function ViewVerifiedOrder({ orders, updateViewOrder }) {
    let verifiedOrder = 0;
    return (
        <div>
            <Navbar className="my-2" color="secondary" dark>
                <NavbarBrand>Verified Orders</NavbarBrand>
            </Navbar>
            <Container>
                {console.log("view all  orders")}
                {console.log(orders.length)}
                {orders.length > 0
                    ? orders.map((o) => {
                          console.log("view order in map ");
                          //   console.log(o);
                          return o.verified && !o.pickedUp ? (
                              <OrderAdmin
                                  key={o.orderId}
                                  order={o}
                                  updateViewOrder={updateViewOrder}
                                  d={verifiedOrder++}
                              />
                          ) : (
                              ""
                          );
                      })
                    : "No order"}
                {verifiedOrder === 0 ? (
                    <p>There is no order which is only verified</p>
                ) : (
                    ""
                )}
            </Container>
        </div>
    );
}

export default ViewVerifiedOrder;