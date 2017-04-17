import React, { Component } from 'react';
import { 
    ScrollView, StyleSheet, ActivityIndicator, View 
} from 'react-native';
import Card from './Card';
import ListCategory from './ListCategory';
import ListProductHome from './ListProductHome';
import initData from '../../../../api/initData';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            downloading: true, 
            listCategory: [], 
            listProduct: [] 
        };
    }

    componentDidMount() {
        initData()
        .then(res => {
            this.setState({ 
                ...this.state, 
                downloading: false, 
                listCategory: res.type, 
                listProduct: res.product 
            });
        });
    }

    render() {
        const { homepage } = styles;
        const { navigator } = this.props;
        const loading = <ActivityIndicator style={{ paddingTop: 300 }} />;
        const main = (
            <View>
                <Card navigator={navigator} />
                <ListCategory navigator={navigator} data={this.state.listCategory} />
                <ListProductHome navigator={navigator} data={this.state.listProduct} />
            </View>
        );
        return (
            <ScrollView style={homepage}>
                { this.state.downloading ? loading : main }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    homepage: {
        backgroundColor: '#E3E2E0',
        flex: 1
    }
});

/*
<View style={styles.homepage}>
    <Text>Home page</Text>
    <TouchableOpacity onPress={() => navigator.push({ name: 'PRODUCT_DETAIL' })}>
        <Text>See product detail</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigator.push({ name: 'LIST_PRODUCT' })}>
        <Text>See List products</Text>
    </TouchableOpacity>
</View>
*/
