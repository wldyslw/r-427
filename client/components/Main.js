import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    Carousel,
    PageHeader,
    Media,
    Tooltip,
    Modal
} from 'react-bootstrap'
import { navigate } from '../actions'
import ImageMapper from '../ImageMapper'
import '../assets/example.jpg'
import '../assets/ppu.jpg';
import '../assets/g1.jpg';
import '../assets/g2.jpg';
import '../assets/g3.jpg';
import '../assets/g4.jpg';
import '../assets/g5.jpg';
import '../assets/g6.jpg';
import '../assets/g7.jpg';
import '../assets/g8.jpg';
import '../assets/g9.jpg';
import '../assets/g10.jpg';
import '../assets/g11.jpg';
import '../assets/g12.jpg';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mX: 0, mY: 0, tooltipVisible: false, tooltipText: 'text', modalOpen: false, activeIndex: 0};
        this.mouseMove = this.mouseMove.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    mouseMove(e) {
        this.setState({
            mX: e.pageX,
            mY: e.pageY
        });
    }

    toggleModal(i) {
        this.setState({
            modalOpen: !this.state.modalOpen,
            activeIndex: i
        });
    }

    render() { 
        const map = {
            name: "my-map",
            areas: [
                { shape: "rect", coords: [29,86,63,118], description: 'Тумблер включения питания', anchor: 10 },
                { shape: "rect", coords: [68,119,112,144], description: 'Порт для подключения электропитания', anchor: 8 },
                { shape: "rect", coords: [125,101,143,144], description: 'Индикаторы световой сигнализации', anchor: 14 },
                { shape: "rect", coords: [145,43,175,80], description: 'Кнопка вызова корреспондента', anchor: 11 },
                { shape: "rect", coords: [149,92,171,144], description: 'Порт служебной связи для подключения микротелеф. гарнитуры', anchor: 6 },
                { shape: "rect", coords: [193,91,256,115], description: 'Псследовательный порт управления RS-232', anchor: 3 },
                { shape: "rect", coords: [187,118,259,144], description: 'Порт внешней сигнализации', anchor: 4 },
                { shape: "rect", coords: [262,93,322,144], description: 'Порты Ethernet 10/100/1000 Base-T', anchor: 1 },
                { shape: "rect", coords: [326,93,385,144], description: 'Порты Е1', anchor: 2 },
                { shape: "rect", coords: [389,117,421,142], description: 'Порт для подключения резервного ППУ', anchor: 5 },
                { shape: "rect", coords: [422,133,440,144], description: 'Переключатель режимов резервирования', anchor: 12 },
                { shape: "rect", coords: [440,120,489,135], description: 'Порт измерения напряжения входного сигнала', anchor: 7 },
                { shape: "rect", coords: [433,90,494,115], description: 'Резервный порт управления' },
                { shape: "rect", coords: [611,101,641,132], description: 'Винт подключения заземления', anchor: 13 },
                { shape: "rect", coords: [668,98,714,144], description: 'Порт СВЧ для подключения кабеля снижения', anchor: 9 }
            ]
        }
        return (
            <div>
                <PageHeader>Основная информация</PageHeader>
                <Media>
                    <Media.Left>
                        <div onMouseMove={this.mouseMove} >
                            <ImageMapper                                 
                                src='img/ppu.jpg' width={750} map={map} 
                                onMouseEnter={(e) => this.setState({ tooltipVisible: true, tooltipText: e.description })}
                                onMouseLeave={() => this.setState({ tooltipVisible: false })}
                                onClick={(e) => this.props.navigate('DOCS', 4, e.anchor)}
                            />
                            <Tooltip 
                                className='img-mapper-tooltip' 
                                style={{ display: this.state.tooltipVisible ? 'block' : 'none', top: this.state.mY, left: this.state.mX + 20 }} 
                                placement="right" className="in" id="tooltip-right"
                            >
                                {this.state.tooltipText}
                            </Tooltip>
                        </div>
                        {/* <img width={750} alt='PPU' src='/img/ppu.jpg' /> */}
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>РАДИОРЕЛЕЙНАЯ СТАНЦИЯ</Media.Heading>
                        предназначена для организации радиорелейных 
                        линий (сетей) связи, обеспечения привязки полевых узлов связи к 
                        узлам связи стационарной и опорной сети связи Вооруженных Сил, 
                        а также к сети электросвязи общего пользования.
                    </Media.Body>
                </Media>
                <PageHeader>Галерея</PageHeader>
                <Carousel>
                    {new Array(12).fill(0).map((e,i) => {
                        return (
                            <Carousel.Item key={i} onClick={() =>this.toggleModal(i)}>
                                <img alt="800x600" src={`img/g${i + 1}.jpg`} />
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
                <Modal bsSize='lg' show={this.state.modalOpen} onHide={this.toggleModal}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Просмотр изображения</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className='modal-img' src={`img/g${this.state.activeIndex + 1}.jpg`} />
                    </Modal.Body>
                </Modal>
            </div>
        ); 
    }
}

export default connect(
    state => state,
    dispatch => ({
        navigate(pageName, subPageName, anchor) {
            dispatch(navigate(pageName, subPageName, anchor))
        }
    })
)(Main);
