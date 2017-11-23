import React from 'react'
import {
    Grid,
    Row
} from 'react-bootstrap'
import { connect } from 'react-redux'
import Main from './Main'

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.switchContent = this.switchContent.bind(this);
    }

    switchContent(currentPage) {
        switch(currentPage) {
            //case 'MAIN': return <Main />
            case 'DOCS': return 'DOCS';
            case 'TESTS': return 'TESTS';
            case 'ABOUT': return 'ABOUT';
            default: return <Main />
        }
    }

    render() {
        return (
            <Grid>
                <Row>
                    {this.switchContent(this.props.currentPage)}
                </Row>
            </Grid>
        );
    }
}

export default connect(
    state => ({
        currentPage: state.currentPage
    })
)(Content);
