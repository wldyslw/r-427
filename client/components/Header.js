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
import { docsCategoryNames } from '../constants'
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
                        <NavDropdown active={this.props.currentPage.pageName == 'DOCS'} eventKey={1} title="Теория" id="basic-nav-dropdown">
                            {docsCategoryNames.map((e,i) => {
                                return <MenuItem key={i} onClick={() => this.props.navigate('DOCS', i)} eventKey={1 + (i + 1) / 10}>{e}</MenuItem>
                            })}
                            <MenuItem target='_blank' href='r1.pdf'>Руководство по экспулатации</MenuItem>
                            <MenuItem target='_blank' href='r2.pdf'>Руководство оператора РРС</MenuItem>
                        </NavDropdown>
                        <NavDropdown active={this.props.currentPage.pageName == 'FAQ'} eventKey={3} title="Практика" id="basic-nav-dropdown">
                            <MenuItem onClick={() => this.props.navigate('FAQ')} eventKey={2.1}>Порядок работы</MenuItem>
                            <MenuItem eventKey={2.2}>Скачать программу</MenuItem>
                        </NavDropdown>
                        <NavDropdown active={this.props.currentPage.pageName == 'TESTS'} eventKey={3} title="Контроль знаний" id="basic-nav-dropdown">
                            <MenuItem onClick={() => this.props.navigate('TESTS', 0)} eventKey={3.1}>Тест по теории</MenuItem>
                            <MenuItem onClick={() => this.props.navigate('TESTS', 1)} eventKey={3.2}>Тест по настройке оборудования</MenuItem>
                            {/* <MenuItem onClick={() => this.props.navigate('TESTS', 2)} eventKey={3.3}>Комплексный тест</MenuItem> */}
                            <MenuItem onClick={() => this.props.navigate('RESULTS')} eventKey={3.4}>Архив результатов</MenuItem>
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
