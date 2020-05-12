import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import IntroductionPage from './pages/IntroductionPage';
import {DependenecyInjectionProvider} from './services/DependencyInjection';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Introduction: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => (
  <DependenecyInjectionProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Details" component={DetailsPage} />
        <Stack.Screen name="Introduction" component={IntroductionPage} />
      </Stack.Navigator>
    </NavigationContainer>
  </DependenecyInjectionProvider>
);

export default App;
