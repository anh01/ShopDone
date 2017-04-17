import React, { Component } from 'react';
import { View, StyleSheet, Navigator } from 'react-native';
import ProductDetail from '../ProductDetail';
import HomePage from './HomePage';
import ListProduct from '../ListProduct';

class Home extends Component {
    renderScene(route, navigator) {
        const { addProduct } = this.props;
        if (route.name === 'PRODUCT_DETAIL') return <ProductDetail navigator={navigator} product={route.product} addProduct={addProduct} />;
        if (route.name === 'LIST_PRODUCT') return <ListProduct navigator={navigator} category={route.category} addProduct={addProduct} />;
        return <HomePage navigator={navigator} />;
    }
    render() {
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute={{ name: 'HOME_PAGE' }}
                    renderScene={this.renderScene.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#E2E1DF'
    }
});

export default Home;
