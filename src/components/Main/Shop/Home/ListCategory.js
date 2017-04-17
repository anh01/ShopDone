import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import CategoryItem from './CategoryItem';

const { width } = Dimensions.get('window');

export default class ListCategory extends Component {
  render() {
    const { wrapper, title, body } = styles;
    const { navigator, data } = this.props;
    return (
      <View style={wrapper}>
          <Text style={title}>LIST OF CATEGORY</Text>
        <View style={body}>
          <Swiper
            height={width / 2.5}
            width={width - 40}
          >
            {data.map(e => <CategoryItem key={e.id} category={e} navigator={navigator} />)}
          </Swiper>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: width - 20,
    margin: 10,
    marginTop: 0,
    padding: 10,
    paddingTop: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    shadowColor: '#292929',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3
  },
  body: {
    alignItems: 'center'
  },
  image: {
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
