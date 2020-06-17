import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import AsyncStorage from '@react-native-community/async-storage';

interface ILoadingScreenProps {
  navigation: NavigationStackProp;
}

interface ILoadingScreenState {}

export default class LoadingScreen extends React.Component<
  ILoadingScreenProps,
  ILoadingScreenState
> {
  constructor(props: Readonly<ILoadingScreenProps>) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const user = await AsyncStorage.getItem('@User');
    if (user) {
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('Auth');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Ładowanie...</Text>
        <ActivityIndicator size="large" />
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
