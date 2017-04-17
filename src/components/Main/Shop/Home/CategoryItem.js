import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, Dimensions } from 'react-native';

class CategoryItem extends Component {
    goToListProduct(category) {
        //This navigator is start ad ./Home/index.js
        const { navigator } = this.props;
        navigator.push({ name: 'LIST_PRODUCT', category });
    }
    render() {
        const { imageStyle, textStyle } = styles;
        const { image, name } = this.props.category;
        return (
            <TouchableOpacity onPress={() => this.goToListProduct(this.props.category)}>
                <Image style={imageStyle} source={{ uri: `http://app.nhodalat.com/image/types/${image}` }}>
                    <Text style={textStyle}>{name}</Text>
                </Image>
            </TouchableOpacity>
        );
    }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    imageStyle: {
        width: width - 40,
        height: (width - 40) / 2,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    title: {
        marginVertical: 15,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 20,
        opacity: 0.5,
        fontFamily: 'Avenir'
    }
});

export default CategoryItem;
