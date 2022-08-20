import "./App.css";
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
import ViewAllOrder from "./components/Admin/ViewAllOrder";
import Sales from "./components/Admin/Sales";

function App() {
  return (
    <div className="App">
      <Router>
        <Navb />
        <br />
        <div className="Form">
          <Routes>
            <Route path="/createUser" element={<Register />} exact></Route>
            <Route path="/" element={<Login />} exact></Route>
          </Routes>
        </div>
        <br />
        <Row>
          <Col md={3}>
            <Routes>
              <Route path="/admin/*" exact element={<AdminMenu />} />
            </Routes>
          </Col>
          <Col md={9}>
            <Routes>
              <Route path="/admin/view-drugs" element={<ViewDrugs />} exact />
              <Route path="/admin/add-drugs" element={<AddDrugs />} exact />
              <Route
                path="/admin/update-drug/:id"
                element={<UpdateDrugs />}
                exact
              />

              <Route
                path="/admin/view-supplier"
                element={<ViewSupplier />}
                exact
              />
              <Route
                path="/admin/add-supplier"
                element={<AddSupplier />}
                exact
              />
              <Route
                path="/admin/update-supplier/:id"
                element={<UpdateSupplier />}
                exact
              />

              <Route path="/admin/view-orders" element={<ViewOrders />} exact />
            
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
              <Route path="/admin/Sales" element={<Sales />} exact />
            </Routes>
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default App;
