import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const IntroductionPage = (props: any) => (
  <View style={Styles.pageContainer}>
    <Text style={[Styles.bold, Styles.underline]}>Introduction</Text>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Text>
  </View>
);

const Styles = StyleSheet.create({
  pageContainer: {
    alignItems: 'center',
    flex: 1,
  },
  bold: {fontWeight: 'bold', fontSize: 20},
  underline: {textDecorationLine: 'underline'},
  alignLeft: {alignSelf: 'flex-start'},
});

export default IntroductionPage;
