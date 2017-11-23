import React from 'react';
import Header from './Header';
import Content from './Content';
import { Provider } from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={this.props.store}>
                <div>
                    <Header />
                    <Content />
                </div>
            </Provider>
        );
    }
}

export default App;
