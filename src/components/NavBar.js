import { Container, Nav, Navbar } from  "react-bootstrap"
import './NavBar.css';
import CartWidget from "./CartWidget";
import logo from '../assets/132030120-logotipo-de-icono-de-mascota-de-amor-rastro-de-perro-con-corazón-aislado-sobre-fondo-blanco-.webp'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    PetShop
                    <img src ={logo} />
                </Navbar.Brand> 
                <Nav>
                    <Nav.Link href="home" className="home">Home</Nav.Link>
                    <Nav.Link href="home">Alimentos</Nav.Link>
                    <Nav.Link href="home">Juguetes</Nav.Link>
                    <Nav.Link href="home">Ropa</Nav.Link>
                    </Nav>  
                    <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar;