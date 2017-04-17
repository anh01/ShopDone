import React, { Component } from 'react';
import { View, StyleSheet, Navigator } from 'react-native';
import ProductDetail from '../ProductDetail';
import SearchPage from './SearchPage';

class Search extends Component {
    renderScene(route, navigator) {
        const { addProduct, arrSearch } = this.props;
        if (route.name === 'PRODUCT_DETAIL') return <ProductDetail navigator={navigator} product={route.product} addProduct={addProduct} />;
        return <SearchPage navigator={navigator} arrSearch={arrSearch} />;
    }
    render() {
        return (
            <View style={styles.container}>
                <Navigator 
                    initialRoute={{ name: 'SEARCH_PAGE' }}
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
        backgroundColor: '#39C728'
    }
});

export default Search;
