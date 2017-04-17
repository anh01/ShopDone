import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ProductHome from './ProductHome';

export default class ListProductHome extends Component {
    render() {
        const { wrapper, header, title, mainListProduct } = styles;
        const { navigator, data } = this.props; //This navigator came from Shop/Home/index
        return (
            <View style={wrapper}>
                <View style={header}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={mainListProduct}>
                    {data.map(e => <ProductHome key={e.id} product={e} navigator={navigator} />)}
                </View>
            </View>

        );
    }
}
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    mainListProduct: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    wrapper: {
        width: width - 20,
        margin: 10,
        padding: 15,
        paddingTop: 0,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#292929',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3
    },
    image: {
        width: width - 40,
        height: height / 4
    },
    title: {
        marginTop: 15,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    }
});

