import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import AsyncStorage from '@react-native-community/async-storage';

interface ILoginScreenProps {
  navigation: NavigationStackProp;
}

interface ILoginScreenState {
  email: string;
  password: string;
  errorMessage: string | null;
}

export default class LoginScreen extends React.Component<
  ILoginScreenProps,
  ILoginScreenState
> {
  constructor(props: Readonly<ILoginScreenProps>) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null,
    };
  }

  handleRegisterButton = () => {
    this.props.navigation.navigate('Register');
  };

  handleLoginButton = async () => {
    await AsyncStorage.setItem('@User', this.state.email);
    this.props.navigation.navigate('Loading');
  };

  render() {
    LayoutAnimation.easeInEaseOut();

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <Image source={require('../assets/logo.png')} style={styles.logo} />

          <View style={styles.errorMessage}>
            {this.state.errorMessage && (
              <Text style={styles.error}>{this.state.errorMessage}</Text>
            )}
          </View>

          <View style={styles.form}>
            <View>
              <Text style={styles.inputTitle}>Email</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                keyboardType={'email-address'}
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
              />
            </View>

            <View style={styles.passwordInputMargin}>
              <Text style={styles.inputTitle}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                autoCapitalize="none"
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={this.handleLoginButton}
            style={styles.loginButton}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.handleRegisterButton}
            style={styles.bottomButton}>
            <Text style={styles.buttonText}>
              New in MyApp?{' '}
              <Text style={styles.buttonLink}>Create new account</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomButton}>
            <Text style={styles.buttonText}>
              Cannot log in?{' '}
              <Text style={styles.buttonLink}>Remember password</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#222323',
  },
  logo: {
    marginTop: 100,
    alignSelf: 'center',
  },
  form: {
    marginHorizontal: 30,
  },
  inputTitle: {
    color: '#a8abb5',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#FFF',
  },
  passwordInputMargin: {
    marginTop: 32,
  },
  loginButton: {
    marginHorizontal: 30,
    marginTop: 30,
    backgroundColor: '#2abfed',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '500',
  },
  buttonLink: {
    fontWeight: '500',
    color: '#2abfed',
  },
  bottomButton: {
    alignSelf: 'center',
    marginTop: 32,
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  error: {
    color: '#E9446A',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
});
