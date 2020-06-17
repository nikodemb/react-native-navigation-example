import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IDashboardScreenProps {}

interface IDashboardScreenState {}

export default class DashboardScreen extends React.Component<
  IDashboardScreenProps,
  IDashboardScreenState
> {
  constructor(props: Readonly<IDashboardScreenProps>) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>DashboardScreen</Text>
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
