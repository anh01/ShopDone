import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SearchPageItem from './SearchPageItem';

//navigator.push({ name: 'PRODUCT_DETAIL' })

class SearchPage extends Component {
    render() {
        const { navigator } = this.props;
        return (
            <ScrollView style={styles.wrapper}>
                {this.props.arrSearch.map(e => <SearchPageItem navigator={navigator} product={e} key={e.id} />)}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#F6F6F6',
        flex: 1
    }
});

export default SearchPage;
