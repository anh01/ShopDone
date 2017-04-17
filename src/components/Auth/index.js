import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image,
    TouchableOpacity, Dimensions
} from 'react-native';
import logo from '../../media/appIcon/ic_logo.png';
import backIcon from '../../media/appIcon/back_white.png';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = { signIn: true };
    }

    gotoSignIn() {
        this.setState({ ...this.state, signIn: true });
    }

    render() {
        const {
            wrapper, main, header, controller, textLogo, controllerLeft, controllerRight
        } = styles;
        const { navigator } = this.props;
        const { signIn } = this.state;
        const styleSignIn = signIn ? { color: '#39C48C', fontWeight: '600' } : { color: '#DADADA' };
        const styleSignUp = !signIn ? { color: '#39C48C', fontWeight: '600' } : { color: '#DADADA' };
        const mainJSX = signIn ? <SignIn navigator={navigator} /> : <SignUp navigator={navigator} gotoSignIn={this.gotoSignIn.bind(this)} />;
        return (
            <View style={wrapper}>
                <View style={header}>
                    <TouchableOpacity onPress={() => this.props.navigator.pop()}>
                        <Image source={backIcon} style={{ height: 30, width: 30 }} />
                    </TouchableOpacity>
                    <Text style={textLogo}>Wearing a Dress</Text>
                    <Image source={logo} style={{ height: 30, width: 30 }} />
                </View>
                <View style={main}>
                    {mainJSX}
                    <View style={controller}>
                        <TouchableOpacity style={controllerLeft} onPress={() => this.setState({ ...this.state, signIn: true })}>
                            <Text style={[{ fontFamily: 'Avenir' }, styleSignIn]}>SIGN IN</Text>
                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#39C48C', flex: 0.02 }}></View>
                        <TouchableOpacity style={controllerRight} onPress={() => this.setState({ ...this.state, signIn: false })}>
                            <Text style={[{ fontFamily: 'Avenir' }, styleSignUp]}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#39C48C',
        padding: 10
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    main: {
        flex: 9,
        marginHorizontal: 30,
        alignItems: 'center'
    },
    controller: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#fff',
        height: 45,
        marginBottom: 20
    },
    signInStyle: {
        flex: 3,
        marginTop: 50
    },
    textLogo: {
        color: '#FFFFFF',
        fontSize: 30,
        fontFamily: 'Avenir',
        marginRight: 10
    },
    controllerLeft: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        margin: 10,
        marginRight: 0,
        justifyContent: 'center',
        flex: 1
    },
    controllerRight: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        margin: 10,
        marginLeft: 0,
        justifyContent: 'center',
        flex: 1
    },
    textInput: {
        width: width - 80,
        height: 45,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Avenir',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20
    },
    signInTexStyle: {
        color: '#FFF', fontFamily: 'Avenir', fontWeight: '600', paddingHorizontal: 20
    },
    signInContainer: {
        borderColor: '#fff',
        borderRadius: 20,
        borderWidth: 1,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    }
});
