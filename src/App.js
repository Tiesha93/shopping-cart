import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./App.css";
import Home from "./Pages/Home";
import Cameras from "./Pages/Cameras";
import Lenses from "./Pages/Lenses";
import CheckOut from "./Pages/CheckOut";
import { GrCart } from "react-icons/gr";
import { useContext } from "react";
import CartContext from "./context/cart/CartContext";

function App() {
  const { cartItems, showCloseCart } = useContext(CartContext);

  return (
    <BrowserRouter basename="/shopping-cart">
      <div className="App">
        <>
          <Navbar
            expand="lg bg-light fixed-top bg-dark"
            style={{ opacity: 0.8 }}
          >
            <Container>
              <Navbar.Brand className="fw-bold" as={Link} to="/">
                Shopping Cart
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <NavDropdown title="Shop" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/Cameras">
                      Cameras
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Lenses">
                      Lenses
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/CheckOut">
                    <GrCart onClick={showCloseCart} />
                    <span
                      className="item__count position-absolute translate-middle rounded-circle bg-danger text-center mt-2"
                      style={{
                        width: "14px",
                        height: "14px",
                        color: "white",
                        fontSize: "10px",
                      }}
                    >
                      {cartItems?.length > 0 && (
                        <span>
                          {cartItems.reduce(
                            (total, { quantity }) => total + quantity,
                            0
                          )}
                        </span>
                      )}
                    </span>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cameras" element={<Cameras />} />
          <Route path="/Lenses" element={<Lenses />} />
          <Route path="/CheckOut" element={<CheckOut />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
