import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import Shop from './Shop';

class Main extends Component {
    closeControlPanel = () => {
        this.drawer.close();
    }

    openControlPanel = () => {
        this.drawer.open();
    }

    render() {
        const menu = (
            <Menu 
                close={this.closeControlPanel.bind(this)} 
                navigator={this.props.navigator}
            />
        );
        return (
            <Drawer
                    ref={ref => { this.drawer = ref; }}
                    content={menu}
                    openDrawerOffset={0.4}
                    tapToClose
            >
                <Shop open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}

export default Main;
