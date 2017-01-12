import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    Container,
    Button,
    Text,
    View
} from 'native-base';

import { connect } from 'react-redux';
import { Increment, Decrement } from './actions/counter';
import { getCounter } from './selectors/counter';

import theme from './themes/base-theme';

interface Props {
    counter: any;
    increase: any;
    decrease: any;
}

interface State {

}

const styles = StyleSheet.create({

})



class App extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Container theme={theme} >
                <View style={{flex: 1, alignSelf: 'stretch', justifyContent: 'center', padding: 20}}>
                    <Text>{this.props.counter}</Text>
                    <Button onPress={this.props.increase} >Increase</Button>
                    <Button onPress={this.props.decrease} >Decrease</Button>
                </View>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increase: () => dispatch(Increment()),
        decrease: () => dispatch(Decrement())
    }
}
const mapStateToProps = state => ({
    counter: getCounter(state)
})


export default connect(mapStateToProps, mapDispatchToProps)(App) 