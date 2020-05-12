import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Overlay} from 'react-native-elements';

interface IProps {
  message: string;
  toggleVisible: () => void;
  outputResolver: (output: any) => void;
}

const ErrorModal = (props: IProps) => {
  return (
    <Overlay
      isVisible={true}
      containerStyle={Styles.modalContainer}
      height="auto">
      <View>
        <Text style={Styles.title}>Error: </Text>
        <Text>{props.message}</Text>
        <View style={Styles.buttonContainer}>
          <Button
            title="Close"
            type="outline"
            raised
            onPress={() => {
              props.outputResolver(null);
              props.toggleVisible();
            }}
          />
        </View>
      </View>
    </Overlay>
  );
};

const Styles = StyleSheet.create({
  modalContainer: {
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonContainer: {
    margin: 10,
  },
});

export default ErrorModal;
