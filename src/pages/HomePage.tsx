import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card, Image} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {HttpService} from 'src/services/HttpService';

import {RootStackParamList} from '../App';
import {
  IModalContext,
  withModalProvider,
} from '../components/modal/ModalProvider';
import {
  DependencyContext,
  DependencyType,
  withDependencyInjection,
} from '../services/DependencyInjection';

interface IProps extends DependencyContext, IModalContext {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

type IState = {};

const Dependencies: DependencyType[] = [];

class HomePage extends React.Component<IProps, IState> {
  state: IState = {};
  httpService: HttpService;

  constructor(props: IProps) {
    super(props);
    this.httpService = this.props.httpService;
  }

  render() {
    return (
      <View style={Styles.homeContainer}>
        <Image
          source={require('../assets/images/webpage-banner.png')}
          style={Styles.banner}
          resizeMode={'contain'}
        />
        <ScrollView>
          <View style={Styles.sectionContainer}>
            <Text style={[Styles.bold, Styles.underline]}>
              Sample code for react native typescript
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Introduction');
              }}>
              <Card
                title="Introduction"
                titleStyle={[Styles.bold, Styles.alignLeft]}
                containerStyle={Styles.cardContainer}>
                <Text>
                  Your goal is ... Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Text>
              </Card>
            </TouchableOpacity>

            <Card
              title="How to use?"
              titleStyle={[Styles.bold, Styles.alignLeft]}
              containerStyle={Styles.cardContainer}>
              <Text>
                Press R,R to refresh ... Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Text>
            </Card>
            <TouchableOpacity
              style={Styles.detailsButton}
              onPress={() => this.props.navigation.navigate('Details')}>
              <Text
                style={Styles.detailText}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                Go Details
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const dimensions = Dimensions.get('window');

const Styles = StyleSheet.create({
  homeContainer: {
    alignItems: 'center',
    flex: 1,
  },
  banner: {
    width: dimensions.width,
    height: dimensions.width * (534 / 1338),
  },
  cardContainer: {
    width: dimensions.width * 0.85,
  },
  sectionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsButton: {
    backgroundColor: '#1F2231',
    width: dimensions.width * 0.9,
    height: dimensions.height * 0.07,
    borderRadius: 10,
    margin: 20,
  },
  detailText: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    margin: '2.5%',
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  underline: {textDecorationLine: 'underline'},
  alignLeft: {alignSelf: 'flex-start'},
});

export default withModalProvider(
  withDependencyInjection(HomePage, Dependencies),
);
