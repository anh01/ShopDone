import React, { Component } from 'react';
import { 
    View, Text, TextInput, TouchableOpacity, Dimensions, StyleSheet, Alert } from 'react-native';
import signUp from '../../api/signUp';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: ''
        };
    }

    async onSignUp() {
        const { name, email, password, rePassword } = this.state;
        if (password === rePassword) {
            const response = await signUp(email, password, name);
            if (response === 'THANH_CONG') {
                this.showSuccessAlert();
            } else {
                this.showFailAlert('Your email has been used!');
            }
        } else {
            this.showFailAlert('Check your password again!');
        }
    }

    showSuccessAlert() {
        const { gotoSignIn } = this.props;
        Alert.alert(
            'Sign up successfully',
            'congratulation!',
            [
                { text: 'Sign in now', onPress: () => gotoSignIn() },
            ],
            { cancelable: false }
        );
    }

    showFailAlert(notification) {
        Alert.alert(
            'Sign up fail',
            notification,
            [
                { text: 'OK', onPress: () => console.log('Ask me later pressed') }
            ],
            { cancelable: false }
        );
    }

    render() {
        const {
            signInContainer, signInTextStyle, textInput, signInStyle
        } = styles;
        return (
            <View style={signInStyle}>
                <TextInput
                    style={textInput}
                    placeholder="Enter your name"
                    autoCapitalize="none"
                    onChangeText={name => this.setState({ ...this.state, name })}
                />
                <TextInput
                    style={textInput}
                    placeholder="Enter your email"
                    autoCapitalize="none"
                    onChangeText={email => this.setState({ ...this.state, email })}
                />
                <TextInput
                    style={textInput}
                    placeholder="Enter your Password"
                    onChangeText={password => this.setState({ ...this.state, password })}
                    secureTextEntry
                />
                <TextInput
                    style={textInput}
                    placeholder="Re-enter your Password"
                    onChangeText={rePassword => this.setState({ ...this.state, rePassword })}
                    secureTextEntry
                />
                <TouchableOpacity style={signInContainer} onPress={this.onSignUp.bind(this)}>
                    <Text style={signInTextStyle}>SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    textInput: {
        width: width - 80,
        height: 45,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Avenir',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20
    },
    signInTextStyle: {
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
    },
    signInStyle: {
        flex: 3,
        marginTop: 50
    }
});

export default SignUp;
