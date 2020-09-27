import React from "react";
import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import {Redirect} from "react-router-dom";

class Header extends React.Component {
    render() {
            return (
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container >
                        <Navbar.Brand href="/">
                            Brand Name
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto" >
                            </Nav>
                            <Form  >
                                {localStorage.getItem("user")
                                    ?<Button  onClick={this.props.logOut} md={8}>Logout</Button>
                                    :<Button  onClick = {()=>this.props.history.push("/login")}>Login</Button>}
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )
        }
    }

export default Header
