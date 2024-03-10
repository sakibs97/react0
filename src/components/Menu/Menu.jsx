import "./menu.css"
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from "../../assets/BWFC.png"

const Menu = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#product">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto menu-bg" >
                        <NavDropdown title="Product" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Product One</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Product Two</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Template" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Template One</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Template Two</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Template Three</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets" className="logon">Sign In</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes" className="logon">
                            Start Free
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu