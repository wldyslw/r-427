import React from 'react'
import {
    Carousel
} from 'react-bootstrap'
import '../assets/example.jpg'

class Main extends React.Component {
    render() { 
        return (
            <Carousel>
                <Carousel.Item>
                    <img width={800} height={600} alt="800x600" src="/img/example.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={800} height={600} alt="800x600" src="/img/example.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={800} height={600} alt="800x800" src="/img/example.jpg" />
                </Carousel.Item>
            </Carousel>
        ); 
    }
}

export default Main;
