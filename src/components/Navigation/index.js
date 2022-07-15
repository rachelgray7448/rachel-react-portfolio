import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, NavDropdown, Nav } from "react-bootstrap";

function Navigation({ currentPage, handlePageChange }) {
    return (
        <Navbar className="navbar" expand="lg">
            <Container className="navbar-internal">
                <Navbar.Brand className="super-internal" href="#home">
                    Rachel Gray
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    className="super-internal"
                    id="basic-navbar-nav"
                >
                    <Nav className="me-auto">
                        <Nav.Link
                            className="super-internal"
                            onClick={() => handlePageChange("About")}
                        >
                            About
                        </Nav.Link>
                        <NavDropdown
                            className="super-internal"
                            title="Projects"
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item
                                target="blank"
                                href="https://limitless-journey-42984.herokuapp.com/"
                            >
                                The B Word
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                target="blank"
                                href="https://rachelgray7448.github.io/run-buddy/"
                            >
                                Run Buddy
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                target="blank"
                                href="https://rachelgray7448.github.io/taskinator/"
                            >
                                Taskinator
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                target="blank"
                                href="https://rachelgray7448.github.io/food-festival/"
                            >
                                Food Festival
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                target="blank"
                                href="https://rachelgray7448.github.io/swanson-quote-quiz/"
                            >
                                Swanson Quote Quiz
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                target="blank"
                                href="https://rachelgray7448.github.io/weather-dashboard/"
                            >
                                Weather Dashboard
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                target="blank"
                                href="https://delusionaldinos.herokuapp.com/"
                            >
                                The DDAA
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={() => handlePageChange("Project")}
                            >
                                View All
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link
                            className="super-internal"
                            onClick={() => handlePageChange("Resume")}
                        >
                            Experience
                        </Nav.Link>
                        <Nav.Link
                            className="super-internal"
                            onClick={() => handlePageChange("Contact")}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
