import React from 'react'
import {
    Nav,
    NavItem
} from 'react-bootstrap'
import '../assets/example.jpg'

class Docs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeKey: -1 }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        });
    }

    render() { 
        const categoryNames = ['Технические характеристики', 'Применяемые кабели', 'Варианты применения', 'Состав изделия', 'Устройство', 'Требования безопасности']
        return (
            <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                {categoryNames.map((e,i) => {
                    return <NavItem href='#' title={e} key={i} eventKey={i}>{e}</NavItem>
                })}
            </Nav>
        ); 
    }
}

export default Docs;
