import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, AsyncStorage } from 'react-native';
import profile from '../../../media/temp/profile.png';
import global from '../../global';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { user: null };
        global.setUser = this.setUserState.bind(this);
        global.getUser = this.getUser.bind(this);
    }

    getUser() {
        return this.state.user;
    }

    setUserState(user) {
        this.setState({ ...this.state, user });
    }

    signOut() {
        global.setUser(null);
        AsyncStorage.removeItem('@token');
    }

    gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTH' });
    }

    gotoOrder() {
        const { navigator } = this.props;
        navigator.push({ name: 'ORDER' });
    }

    gotoChangeInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'USER_INFO' });
    }

    render() {
        const { buttonStyle, textStyle } = styles;
        const { user } = this.state;
        const signedInJSX = (
            <View style={styles.menuContainer}>
                <View style={{ padding: 20 }}>
                    <Image source={profile} style={{ width: 100, height: 100, borderRadius: 50 }} />
                </View>
                <View style={{ marginBottom: 130 }}>
                    <Text style={[textStyle, { color: '#fff' }]}>{ user ? user.name : null }</Text>
                </View>
                <TouchableOpacity style={buttonStyle} onPress={this.gotoOrder.bind(this)}>
                    <Text style={textStyle}>Order History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={buttonStyle} onPress={this.gotoChangeInfo.bind(this)}>
                    <Text style={textStyle}>Change Info</Text>
                </TouchableOpacity>
                <TouchableOpacity style={buttonStyle} onPress={this.signOut.bind(this)}>
                    <Text style={textStyle}>Sign out</Text>
                </TouchableOpacity>
            </View>
        );
        const unsignedInJSX = (
            <View style={styles.menuContainer}>
                <View style={{ padding: 20 }}>
                    <Image source={profile} style={{ width: 100, height: 100, borderRadius: 50 }} />
                </View>
                <TouchableOpacity style={[buttonStyle, { alignSelf: 'stretch', marginHorizontal: 10, alignItems: 'center' }]} onPress={this.gotoAuthentication.bind(this)}>
                    <Text style={textStyle}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        );
        const show = this.state.user ? signedInJSX : unsignedInJSX;
        return show;
    }
}

const styles = StyleSheet.create({
    menuContainer: {
        backgroundColor: '#2ABB9C',
        flex: 1,
        alignItems: 'center',
        borderRightWidth: 3,
        borderColor: '#FFF'
    },
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        margin: 5
    },
    textStyle: {
        fontFamily: 'Avenir',
        fontSize: 15,
        color: '#2ABB9C'
    }
});

export default Menu;
