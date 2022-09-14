import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

function Navb({ isLogin, setData }) {
    const navigate = useNavigate();
    const setLogin = () => {
        setData(false);
        navigate("/login");
    };
    return (
        <>
            <Navbar color="secondary" light expand container="lg" className="bar">
                <NavbarBrand>PHARMACARE</NavbarBrand>
                {isLogin ? (
                    <Nav>
                        <NavItem className="mx-2">
                            <Button onClick={setLogin} color="dark">
                                <Link
                                    className="list-group-item list-group-item-action"
                                    to="/login"
                                >
                                    Logout
                                </Link>
                            </Button>
                        </NavItem>
                    </Nav>
                ) : (
                    <Nav>
                        <NavItem className="mx-2">
                            <Button color="dark">
                                <Link
                                    className="list-group-item list-group-item-action"
                                    to="/login"
                                >
                                    Login
                                </Link>
                            </Button>{" "}
                        </NavItem>
                        <NavItem>
                            <Button color="dark">
                                <Link
                                    className="list-group-item list-group-item-action"
                                    to="/register"
                                >
                                    Register
                                </Link>
                            </Button>
                        </NavItem>
                    </Nav>
                )}
            </Navbar>
        </>
    );
}

export default Navb;