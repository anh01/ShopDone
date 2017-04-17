import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Alert
} from 'react-native';
import CartItem from './CartItem';
import global from '../../../../global';
import makeOrder from '../../../../../api/makeOrder';

export default class CardDetail extends Component {
    gotoCheckout() {
        const { navigator } = this.props;
        navigator.push({ name: 'CHECKOUT' });
    }

    async sendOrder() {
        const { data, controller } = this.props;
        const arrayItems = data.map(e => ({ id: e.product.id, quantity: e.quantity }));
        console.log(arrayItems);
        try {
            await makeOrder(arrayItems);
            global.goToHome();
            controller.removeAll();
        } catch (e) {
            console.log(`LOI:${e}`);
        }
    }

    showAlert() {
        Alert.alert(
            'Confirm',
            'Do you want to send this order?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'OK',
                    onPress: this.sendOrder.bind(this)
                },
            ],
            { cancelable: false }
        );
    }
    render() {
        //This navigator come from ./Shop/Cart/index.js
        //navigator.push({ name: 'PRODUCT_DETAIL' })
        //navigator.push({ name: 'CHECKOUT' })
        const { wrapper, main, checkoutButton, checkoutTitle } = styles;
        const { navigator, data, controller } = this.props;
        const getListCartItem = () => data.map(item => <CartItem navigator={navigator} key={item.product.name} item={item} controller={controller} />);// eslint-disable-line
        const totalArray = data.map(item => item.product.price * item.quantity);
        const total = totalArray.reduce((a, b) => a + b, 0);
        return (
            <View style={wrapper}>
                <ScrollView style={main}>
                    {getListCartItem()}
                </ScrollView>
                <TouchableOpacity style={checkoutButton} onPress={this.showAlert.bind(this)}>
                    <Text style={checkoutTitle}>TOTAL {total}$ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    }
});
