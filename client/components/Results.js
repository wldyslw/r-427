import React from 'react'
import { connect } from 'react-redux'
import {
    Table,
    PageHeader,
    Modal,
    ButtonToolbar,
    Button,
    FormControl,
    FormGroup
} from 'react-bootstrap'
import secToMin from 'sec-to-min'
import { loadResults, clearResults } from '../actions'
import { questions } from '../questions'

const answerAllies = { TRUE: 'Верно', FALSE: 'Неверно', NONE: 'Нет ответа' }

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pass: '', validation: null, modalOpen: false, clearOpen: false, selectedUser: this.props.currentUser.result[0] }
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleClear = this.toggleClear.bind(this);
        this.checkPass = this.checkPass.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.validationState = this.validationState.bind(this);
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

    toggleClear() {
        this.setState({
            clearOpen: !this.state.clearOpen
        })
    }

    validationState() {
        return this.state.validation
    }

    handlePass(e) {
        this.setState({
            pass: e.target.value
        });
    }

    checkPass() {
        if(this.state.pass !== 'r427') this.setState({validation: 'error'})
        else {
            this.props.clearResults();
            this.props.loadResults();
            this.toggleClear();
            this.setState({validation: null})
        }
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
                            <th>Имя</th>
                            <th>Группа</th>
                            <th>Вариант</th>
                            <th>Затраченное время</th>
                            <th>Отметка</th>
                            <th>Дата выполнения</th>
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
                                    <td>{e.date ? `${new Date(e.date).getDate()}.${new Date(e.date).getMonth()}.${new Date(e.date).getFullYear()}` : ''}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <ButtonToolbar>
                    <Button 
                    bsStyle='primary' 
                    onClick={this.toggleClear}>
                        Очистить результаты
                    </Button>
                </ButtonToolbar>
                <Modal show={this.state.clearOpen} onHide={this.toggleClear}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Очистка результатов</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup validationState={this.validationState()} controlId="name">
                            <FormControl
                            type="password"
                            name='pass'
                            placeholder="Введите пароль для очистки"
                            onChange={this.handlePass}
                            />
                            
                            <FormControl.Feedback />
                        </FormGroup>
                        <ButtonToolbar>
                            <Button 
                            bsStyle='primary' 
                            onClick={this.checkPass}>
                                Очистить результаты
                            </Button>
                        </ButtonToolbar>
                    </Modal.Body>
                </Modal>
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
        },
        clearResults() {
            dispatch(clearResults())
        }
    })
)(Results);
