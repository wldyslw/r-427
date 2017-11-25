import React from 'react'
import { connect } from 'react-redux'
import {
    Table,
    PageHeader,
    Modal
} from 'react-bootstrap'
import secToMin from 'sec-to-min'
import { loadResults } from '../actions'
import { questions } from '../questions'

const answerAllies = { TRUE: 'Верно', FALSE: 'Неверно', NONE: 'Нет ответа' }

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalOpen: false, selectedUser: this.props.currentUser.result[0] }
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentWillMount() {
        this.props.loadResults();
    }

    toggleModal(selectedUser) {
        if(selectedUser == undefined) selectedUser = this.state.selectedUser;
        this.setState({
            modalOpen: !this.state.modalOpen,
            selectedUser
        })
    }

    renderModal() {
        return (
            <Modal show={this.state.modalOpen} onHide={() => this.toggleModal(this.state.selectedUser)}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Подробно</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table responsive striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Вопрос</th>
                                <th>Ответ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.selectedUser.result.map((answer, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{questions[this.state.selectedUser.testID || 0][this.state.selectedUser.variant][i].q}</td>
                                        <td>{answerAllies[answer]}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>
        );
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
                                <tr key={i} onClick={() => this.toggleModal(e)}>
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
                {this.state.selectedUser ? this.renderModal() : ''}
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
