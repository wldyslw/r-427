import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    Carousel,
    PageHeader,
    Media,
    Tooltip
} from 'react-bootstrap'
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

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mX: 0, mY: 0, tooltipVisible: false, tooltipText: 'text'};
        this.mouseMove = this.mouseMove.bind(this);
    }

    mouseMove(e) {
        this.setState({
            mX: e.pageX,
            mY: e.pageY
        });
    }

    render() { 
        const map = {
            name: "my-map",
            areas: [
                { shape: "rect", coords: [31,75,73,127], description: 'Тумблер включения питания' },
                { shape: "rect", coords: [72,126,116,152], description: 'Порт для подключения электропитания' },
                { shape: "rect", coords: [126,105,148,152], description: 'Индикаторы световой сигнализации' },
                { shape: "rect", coords: [146,49,184,85], description: 'Кнопка вызова корреспондента' },
                { shape: "rect", coords: [151,96,178,152], description: 'Порт служебной связи для подключения микротелеф. гарнитуры' },
                { shape: "rect", coords: [200,100,258,121], description: 'Псследовательный порт управления RS-232' },
                { shape: "rect", coords: [192,123,262,152], description: 'Порт внешней сигнализации' },
                { shape: "rect", coords: [264,101,323,152], description: 'Порты Ethernet 10/100/1000 Base-T' },
                { shape: "rect", coords: [325,101,384,152], description: 'Порты Е1' },
                { shape: "rect", coords: [385,122,418,152], description: 'Порт для подключения резервного ППУ' },
                { shape: "rect", coords: [419,142,435,152], description: 'Переключатель режимов резервирования' },
                { shape: "rect", coords: [436,130,479,145], description: 'Порт измерения напряжения входного сигнала' },
                { shape: "rect", coords: [429,102,487,125], description: 'Резервный порт управления' },
                { shape: "rect", coords: [603,115,629,142], description: 'Винт подключения заземления' },
                { shape: "rect", coords: [653,108,701,156], description: 'Порт СВЧ для подключения кабеля снижения' }
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
                    <Carousel.Item>
                        <img alt="800x600" src="img/g1.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="800x600" src="img/g2.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="800x800" src="img/g3.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="800x800" src="img/g4.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="800x800" src="img/g5.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="800x800" src="img/g6.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="800x800" src="img/g7.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="800x800" src="img/g8.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="800x800" src="img/g9.jpg" />
                    </Carousel.Item>
                </Carousel>
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
