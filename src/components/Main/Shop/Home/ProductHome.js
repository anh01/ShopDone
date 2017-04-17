import React, { Component } from 'react';
import { 
    TouchableOpacity, Image, Text, View, StyleSheet, Dimensions 
} from 'react-native';

class ProductHome extends Component {
    goToProductDetail(product) {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL', product });
    }
    render() {
        const { product, productImage, productFooter, productName, productPrice } = styles;
        const { images, name, price } = this.props.product;
        return (
            <TouchableOpacity style={product} onPress={() => this.goToProductDetail(this.props.product)}>
                <Image style={productImage} source={{ uri: `http://app.nhodalat.com/image/${images[0]}` }} />
                <View style={productFooter}>
                    <Text style={productName}>{name.toUpperCase()}</Text>
                    <Text style={productPrice}>{price}$</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = (width / 2) - 35;
const imageHeight = (imageWidth * 452) / 361;
const productWidth = (width / 2) - 30;
const productHeight = imageHeight * 1.5;

const styles = StyleSheet.create({
    product: {
        alignItems: 'center',
        width: productWidth,
        height: productHeight,
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 4,
        borderColor: '#DFDFDC',
        shadowColor: '#D9D9D9',
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 3
        }
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        borderRadius: 2,
        borderColor: '#F6F6F6',
        borderWidth: 1
    },
    productFooter: {
        marginTop: 20
    },
    productName: {
        color: '#989898',
        paddingBottom: 5
    },
    productPrice: {
        color: '#C92A62',
        fontWeight: '500'
    }
});

export default ProductHome;
