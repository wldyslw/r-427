import React from 'react'
import {
    Grid,
    Row
} from 'react-bootstrap'
import Main from './Main'

class Content extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Main />
                </Row>
            </Grid>
        );
    }
}

export default Content;
