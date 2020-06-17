import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationStackProp} from 'react-navigation-stack';

interface ISettingsScreenProps {
  navigation: NavigationStackProp;
}

interface ISettingsScreenState {}

export default class SettingsScreen extends React.Component<
  ISettingsScreenProps,
  ISettingsScreenState
> {
  constructor(props: Readonly<ISettingsScreenProps>) {
    super(props);
    this.state = {};
  }

  logOutHandler = async () => {
    await AsyncStorage.setItem('@User', '');
    this.props.navigation.navigate('Loading');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>SettingsScreen</Text>
        <Button onPress={this.logOutHandler} title={'Log out'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
