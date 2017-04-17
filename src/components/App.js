import React, { Component } from 'react';
import { 
    View, StyleSheet, Navigator, StatusBar 
} from 'react-native';
import Main from './Main';
import Authentication from './Auth';
import OrderHistory from './UserArea/OrderHistory';
import UserInfo from './UserArea/UserInfo';

StatusBar.setHidden(true);

const renderScene = (route, navigator) => {
    if (route.name === 'MAIN') return <Main navigator={navigator} />;
    if (route.name === 'ORDER') return <OrderHistory navigator={navigator} />;
    if (route.name === 'USER_INFO') return <UserInfo navigator={navigator} />;
    return <Authentication navigator={navigator} />;
};

const arrUserArea = ['ORDER', 'USER_INFO', 'SHIPPING_INFO'];

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Navigator 
                    initialRoute={{ name: 'MAIN' }}
                    renderScene={renderScene}
                    configureScene={(route) => {
                        if (arrUserArea.indexOf(route.name) !== -1) return Navigator.SceneConfigs.FloatFromLeft;
                        return Navigator.SceneConfigs.FloatFromRight;
                    }}
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
        backgroundColor: 'transparent'
    }
});
