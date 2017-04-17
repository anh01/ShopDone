import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native';

const url = 'http://app.nhodalat.com/image/';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class SearchPageItem extends Component {
    gotoDetail(product) {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL', product });
    }
    render() {
        const {
            productStyle, mainRight, txtMaterial, txtColor,
            txtName, txtPrice, productImage, 
            txtShowDetail, showDetailContainer
        } = styles;
        const { name, price, material, color, images } = this.props.product;
        return (
            <View style={productStyle}>
                <Image source={{ uri: `${url}${images[0]}` }} style={productImage} />
                <View style={mainRight}>
                    <Text style={txtName}>{toTitleCase(name)}</Text>
                    <Text style={txtPrice}>{price}$</Text>
                    <Text style={txtMaterial}>Material {material}</Text>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={txtColor}>Color {color}</Text>
                        <View style={{ height: 15, width: 15, backgroundColor: color.toLowerCase(), borderRadius: 15, marginLeft: 10 }} />
                    </View>
                    <TouchableOpacity style={showDetailContainer} onPress={() => this.gotoDetail(this.props.product)}>
                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;
const styles = StyleSheet.create({
    productStyle: {
        flexDirection: 'row',
        margin: 10,
        marginTop: 0,
        padding: 10,
        backgroundColor: '#FFF',
        borderTopWidth: 1,
        borderColor: '#F1F1F1'
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
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtColor: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
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
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: 100
    }
});

export default SearchPageItem;
