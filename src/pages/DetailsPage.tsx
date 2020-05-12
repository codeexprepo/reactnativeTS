import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class DetailsPage extends React.Component {
  state = {};

  render() {
    return (
      <View style={Styles.homeContainer}>
        <Text>Details Page</Text>
        <Text>This is React native typescript</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  homeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
