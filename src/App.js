import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './App.css';
import Home from './Pages/Home';
import Cameras from './Pages/Cameras';
import Lenses from './Pages/Lenses';
import CheckOut from './Pages/CheckOut';
import { GrCart } from "react-icons/gr";
import { useContext } from "react";
import CartContext from "./context/cart/CartContext";




function App() {
  const { cartItems, showCloseCart } = useContext(CartContext);
  return (
    <BrowserRouter>
    <div className="App">
      <>
         <header></header>
         <Navbar expand="lg bg-light fixed-top bg-dark" style={{opacity:0.8}}>
           <Container>
             <Navbar.Brand className="fw-bold" href="/">Shopping Cart</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ms-auto">
                 <Nav.Link as={Link} to="/">Home</Nav.Link>
                   <NavDropdown title="Shop" id="basic-nav-dropdown">
                     <NavDropdown.Item as={Link} to="/Cameras">Cameras</NavDropdown.Item>
                     <NavDropdown.Item as={Link} to="/Lenses">Lenses</NavDropdown.Item>
                   </NavDropdown>
                 <Nav.Link as={Link} to="/CheckOut"><GrCart onClick={showCloseCart} /></Nav.Link>
                 <div className="item__count position-relative bottom-0 end-0 rounded-circle bg-danger" style={{width:"14px", height:"14px"}}>
                       {cartItems?.length > 0 && (
                       <span>{cartItems.length}</span>
                       )}
                 </div>
               </Nav>
             </Navbar.Collapse>
           </Container>
         </Navbar>
      </>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Cameras" element={<Cameras/>} />
        <Route path="/Lenses" element={<Lenses/>} />
        <Route path="/CheckOut" element={<CheckOut/>} />
      </Routes>
     {/*  <div className="footer fixed-bottom bg-transparent">
      <p>Copyright © Tiesha</p>
            <a href='https://github.com/Tiesha93' target='blank'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg></a>
      </div> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
