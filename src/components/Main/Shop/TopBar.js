import React, { Component } from 'react';
import {
    View, StyleSheet, TouchableOpacity,
    Image, Dimensions, TextInput,
    Text
} from 'react-native';
import global from '../../global';
import searchProduct from '../../../api/searchProduct';

const { width } = Dimensions.get('window');
const logo = require('../../../media/appIcon/ic_logo.png');
const menuIcon = require('../../../media/appIcon/ic_menu.png');

export default class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    getProductBySearch() {
        const { text } = this.state;
        searchProduct(text)
        .then(res => {
            this.props.setArrSearch(res);
            global.goToSearch();
        })
        .catch(err => console.log(err))
        .then(() => this.setState({ ...this.state, text: '' }));
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.rowOne}>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={this.props.open}>
                        <Image
                            source={menuIcon}
                            style={styles.menuIcon}
                        />
                    </TouchableOpacity>
                    <View style={styles.textContainer}>
                        <Text style={styles.textLogo}>Wearing a Dress</Text>
                    </View>
                    <Image
                        source={logo}
                        style={styles.logo}
                    />
                </View>
                <View style={{ alignItems: 'stretch', justifyContent: 'center' }}>
                    <TextInput
                        underlineColorAndroid="transparent"
                        style={styles.input}
                        placeholder='What do you want to buy?'
                        onFocus={() => {
                            global.goToSearch();
                        }}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                        onSubmitEditing={this.getProductBySearch.bind(this)}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#2ABB9C',
        paddingHorizontal: 10,
        paddingTop: 10
    },
    rowOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5,
        paddingHorizontal: 10
    },
    input: {
        height: 30,
        width: width - 40,
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        paddingLeft: 20,
        fontFamily: 'Avenir',
    },
    menuIcon: {
        width: 25,
        height: 25
    },
    logo: {
        width: 30,
        height: 30,
    },
    textContainer: {
        justifyContent: 'center',
        paddingLeft: 10
    },
    textLogo: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'Avenir'
    }
});
