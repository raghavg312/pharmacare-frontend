import React,{useState} from "react";
import { Input,Form,FormGroup,Container,Card,Button } from "reactstrap";
import axios from "axios";
import baseUrl from "../api's/base_url";
function AddSupplier(){

  const [Supplier,setSupplier] = useState({});

  const handleForm = (e) => {
    console.log(Supplier);
    AddSupplier(Supplier);
    e.preventDefault();
  };

  const AddSupplier = (data) => {
  console.log(data)
    axios.post(`${baseUrl}/supplier`,data).then(
      (response) => {
        console.log(response.data );
        console.log("response");
        alert("added Supplier");
      },
      (error) => {
        console.log(error);
        console.log("error");
        alert("Supplier Not added. Check inputs");
      }
    );
  };

  return (
    <div className="AddSupplier my-2">
     <h1>ADD SUPPLIER</h1>
      <Container>
        <Card className="p-4" color="secondary">
          <Form onSubmit={handleForm}>
            <FormGroup>
              <label>Name</label>
              <Input
                type="text"
                placeholder="Enter Supplier Name"
                id="SupplierName"
                name="SupplierName"
                onChange={(e) => {
                      setSupplier({ ...Supplier, supplierName: e.target.value });
                    }}
              ></Input>
                  <label>Email</label>
                  <Input
                    type="email"
                    placeholder="Enter supplier Email Id"
                    id="SupplierEmail"
                    name="SupplierEmail"
                    onChange={(e) => {
                      setSupplier({ ...Supplier, supplierEmail: e.target.value });
                    }}
                  ></Input>
              <label>Contact</label>
              <Input
                type="number"
                placeholder="Enter supplier Contact Number"
                id="SupplierContact"
                name="SupplierContact"
                onChange={(e) => {
                      setSupplier({ ...Supplier, supplierContact: e.target.value });
                    }}
              ></Input>
              <Button color="dark" type="submit">
                Add
              </Button>
            </FormGroup>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default AddSupplier;
