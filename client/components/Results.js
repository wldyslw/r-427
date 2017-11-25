import React from 'react'
import { connect } from 'react-redux'
import {
    Table,
    PageHeader
} from 'react-bootstrap'
import secToMin from 'sec-to-min'
import { loadResults } from '../actions'

class Results extends React.Component {
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

    componentWillMount() {
        this.props.loadResults();
    }

    render() { 
        return (
            <div>
                <PageHeader>Архив результатов</PageHeader>
                <Table responsive striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Фамилия</th>
                            <th>Группа</th>
                            <th>Вариант</th>
                            <th>Время</th>
                            <th>Отметка</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.currentUser.result.map((e,i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.group}</td>
                                    <td>{e.variant + 1}</td>
                                    <td>{secToMin(e.elapsedTime.toFixed())}</td>
                                    <td>{Math.round(e.result.filter(el => el == 'TRUE').length / e.result.length * 10)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        ); 
    }
}

export default connect(
    state => state,
    dispatch => ({
        loadResults() {
            dispatch(loadResults())
        }
    })
)(Results);
