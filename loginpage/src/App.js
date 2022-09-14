import "./App.css";
import React, { useState } from "react";

import Navb from "./components/Navb";
import Login from "./components/Main/Login";
import Register from "./components/Main/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "reactstrap";

import AdminMenu from "./components/Admin/AdminMenu";
import ViewDrugs from "./components/Admin/ViewDrugs";
import AddDrugs from "./components/Admin/AddDrug";
import UpdateDrugs from "./components/Admin/UpdateDrug";

import ViewSupplier from "./components/Admin/ViewSupplier";
import AddSupplier from "./components/Admin/AddSupplier";
import UpdateSupplier from "./components/Admin/UpdateSupplier";

import ViewOrders from "./components/Admin/ViewOrder";
import Sales from "./components/Admin/Sales";
import DoctorMenu from "./components/Doctor/DoctorMenu";
import ViewDoctorDrugs from "./components/Doctor/ViewDoctorDrugs";
import Cart from "./components/Doctor/Cart";

function App() {
  const [isLogin, setIsLogin] = useState();
  const setLogin = (flag) => {
      setIsLogin(flag);
  };

  const [user, setUser] = useState();
  const setUserDetails = (data) => {
      setUser(data);
  };

  return (
      <div className="App">
          <Router>
              <Navb isLogin={isLogin} setData={setLogin} />
              <Row>
                  <Routes>
                     
                  </Routes>
                  <Routes>
                      <Route
                          path="/login"
                          exact
                          element={
                              <Login
                                  setData={setLogin}
                                  setUserDetails={setUserDetails}
                              />
                          }
                      />
                  </Routes>
                  <Routes>
                      <Route path="/register" exact element={<Register />} />
                  </Routes>
                  <Col md={1}></Col>

                  <Col md={2}>
                      <Routes>
                          <Route
                              path="/doctor/*"
                              exact
                              element={<DoctorMenu />}
                          />
                          <Route
                              path="/admin/*"
                              exact
                              element={<AdminMenu />}
                          />
                      </Routes>
                  </Col>
                  <Col md={9}>
                      <Routes>
                          <Route
                              path="/doctor/view-drugs"
                              exact
                              element={<ViewDoctorDrugs />}
                          />
                          <Route
                              path="/doctor/cart"
                              exact
                              element={<Cart user={user} />}
                          />
                      </Routes>

                      <Routes>
                          <Route
                              path="/admin/view-drugs"
                              exact
                              element={<ViewDrugs />}
                          />
                          <Route
                              path="/admin/add-drugs"
                              exact
                              element={<AddDrugs />}
                          />

                          <Route
                              path="/admin/update-drug/:id"
                              exact
                              element={<UpdateDrugs />}
                          />
                          <Route
                              path="/admin/view-orders"
                              exact
                              element={<ViewOrders />}
                          />

                          <Route
                              path="/admin/view-orders-new"
                              exact
                              element={<ViewOrders flag={"new"} />}
                          />

                          <Route
                              path="/admin/view-orders-verified"
                              exact
                              element={<ViewOrders flag={"verified"} />}
                          />

                          <Route
                              path="/admin/view-orders-pickedup"
                              exact
                              element={<ViewOrders flag={"pickedup"} />}
                          />
                          <Route
                              path="/admin/view-supplier"
                              exact
                              element={<ViewSupplier />}
                          />

                          <Route
                              path="/admin/add-supplier"
                              exact
                              element={<AddSupplier />}
                          />
                          <Route
                              path="/admin/update-supplier/:id"
                              exact
                              element={<UpdateSupplier />}
                          />
                          <Route path="/admin/Sales" 
                          exact 
                          element={<Sales/>}></Route>
                      </Routes>
                  </Col>
              </Row>
          </Router>
      </div>
  );
}

export default App;
