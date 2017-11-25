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
import {connect} from 'react-redux'
import { navigate } from '../actions'
import '../assets/bsuir.png';
import '../assets/mf.png';
import '../assets/logo.png'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='pre-header'>
                    <Grid>
                        <Row>                      
                            <Media>
                                <Media.Left>
                                    <img width={128} height={64} style={{display:'inline'}} src="img/logo.png" alt="Image" />
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
                            <a href='#' onClick={() => this.props.navigate('MAIN')}>Радиорелейная станция Р-427</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem active={this.props.currentPage.pageName == 'DOCS'} eventKey={1} onClick={() => this.props.navigate('DOCS')}>Теория</NavItem>
                        <NavItem active={this.props.currentPage.pageName == 'PRACTISE'} eventKey={2}>Практика</NavItem>
                        <NavDropdown active={this.props.currentPage.pageName == 'TESTS'} eventKey={3} title="Тестирование" id="basic-nav-dropdown">
                            <MenuItem onClick={() => this.props.navigate('TESTS', 0)} eventKey={3.1}>Тест по теории</MenuItem>
                            <MenuItem onClick={() => this.props.navigate('TESTS', 1)} eventKey={3.2}>Тест по настройке оборудования</MenuItem>
                            <MenuItem onClick={() => this.props.navigate('TESTS', 2)} eventKey={3.3}>Комплексный тест</MenuItem>
                        </NavDropdown>
                        <NavItem active={this.props.currentPage.pageName == 'ABOUT'} eventKey={4} onClick={() => this.props.navigate('ABOUT')}>О программе</NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default connect(
    state => ({
        currentPage: state.currentPage
    }),
    dispatch => ({
        navigate(pageName, subPageName, anchor) {
            dispatch(navigate(pageName, subPageName, anchor))
            // console.log('Navigated to ', pageName)
        }
    })
)(Header);
