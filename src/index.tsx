import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store/configure-store';
import App from './app';

interface State {
    isLoading: any
    store: any
}

interface Props {

}

class Root extends Component<Props, State> {
        
        constructor() {
            super();
            this.state = {
                isLoading: false,
                store: store()
            }
        }

        render() {
            return (
                <Provider store={this.state.store} >
                    <App />
                </Provider>
            )
        }
    }

export default Root;