import React from 'react'
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    Jumbotron,
    Row,
    Media,
    Grid
} from 'react-bootstrap'
import '../assets/bsuir.png';
import '../assets/mf.png';
import '../assets/logo.png'

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className='pre-header'>
                    <Grid>
                        <Row>                      
                            <Media>
                                <Media.Left>
                                    <img width={128} height={64} style={{display:'inline'}} src="/img/logo.png" alt="Image" />
                                </Media.Left>
                                <Media.Body>
                                <p>Учреждение образования <br/>
                                «Белорусский государственный университет информатики и радиоэлектроники» <br/>
                                Военный факультет</p>  
                                </Media.Body>
                            </Media>
                        </Row>
                    </Grid>
                </div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href='#'>Радиорелейная станция Р-427</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">Теория</NavItem>
                        <NavItem eventKey={2} href="#">Практика</NavItem>
                        <NavItem eventKey={2} href="#">Контроль знаний</NavItem>
                        <NavItem eventKey={2} href="#">О программе</NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Header;
