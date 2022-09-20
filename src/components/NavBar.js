import { Container, Nav, Navbar } from  "react-bootstrap"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    PetShop
                </Navbar.Brand> 
                <Nav>
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="home">Alimentos</Nav.Link>
                    <Nav.Link href="home">Alimentos</Nav.Link>
                    <Nav.Link href="home">Alimentos</Nav.Link>
                    
                    </Nav>  
                    <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar;