import React from 'react'
import {
    Nav,
    NavItem
} from 'react-bootstrap'
import * as docs from '../docs'
import '../assets/example.jpg'

const categoryNames = ['Технические характеристики', 'Применяемые кабели', 'Варианты применения', 'Состав изделия', 'Устройство', 'Требования безопасности']

class Docs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeKey: this.props.subPageName || 0 }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        });
    }

    showDocs(ID) {
        return [docs.tp, docs.cables, docs.application, '', docs.structure, docs.safety][ID] || 'succ';
    }

    render() { 
        return (
            <div>
                <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                    {categoryNames.map((e,i) => {
                        return <NavItem href='#' title={e} key={i} eventKey={i}>{e}</NavItem>
                    })}
                </Nav>
                {this.showDocs(this.state.activeKey)}
            </div>
        ); 
    }
}

export default Docs;
