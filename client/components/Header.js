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
                        <NavItem active={this.props.currentPage == 'DOCS'} eventKey={1} onClick={() => this.props.navigate('DOCS')}>Теория</NavItem>
                        <NavItem active={this.props.currentPage == 'PRACTISE'} eventKey={2}>Практика</NavItem>
                        <NavItem active={this.props.currentPage == 'TESTS'} eventKey={2} onClick={() => this.props.navigate('TESTS')}>Контроль знаний</NavItem>
                        <NavItem active={this.props.currentPage == 'ABOUT'} eventKey={2} onClick={() => this.props.navigate('ABOUT')}>О программе</NavItem>
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
        navigate(pageName) {
            dispatch(navigate(pageName))
            // console.log('Navigated to ', pageName)
        }
    })
)(Header);
