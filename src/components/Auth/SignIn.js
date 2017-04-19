import React, { Component } from 'react';
import { 
    View, Text, TextInput, 
    TouchableOpacity, Dimensions, StyleSheet, Alert 
} from 'react-native';
import signIn from '../../api/signIn';
import saveToken from '../../api/saveToken';
import global from '../global';

const { width } = Dimensions.get('window');

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
    }
    async onSignIn() {
        const { email, password } = this.state;
        const { navigator } = this.props;
        try {
            const { token, user } = await signIn(email, password);
            saveToken(token);
            global.setUser(user);
            navigator.pop();
            this.showSuccessAlert();
        } catch (e) {
            console.log('LOI: ', e);
            this.showFailAlert('Your sign in infomation is not valid');
        }
    }

    showSuccessAlert() {
        const { navigator } = this.props;
        Alert.alert(
            'Sign in successfully',
            'congratulation!',
            [
                { text: 'OK', onPress: () => navigator.pop() },
            ],
            { cancelable: false }
        );
    }

    showFailAlert(notification) {
        Alert.alert(
            'Sign in failed',
            notification,
            [
                { text: 'OK', onPress: () => console.log('Ask me later pressed') }
            ],
            { cancelable: false }
        );
    }

    render() {
        return (
            <View style={styles.signInStyle}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your email"
                    onChangeText={email => this.setState({ ...this.state, email })}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your Password"
                    onChangeText={password => this.setState({ ...this.state, password })}
                    secureTextEntry
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.signInContainer} onPress={this.onSignIn.bind(this)}>
                    <Text style={styles.signInTextStyle}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        width: width - 80,
        height: 45,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Avenir',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20,
        underlineColor: 'transparent'
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

export default SignIn;
