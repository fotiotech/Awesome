import React, {useState} from 'react';
import {StyleSheet, Button, View, TextInput, Text} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={styles.login}>
      <Text style={styles.login1}>Log in{'\n'}</Text>
      <Text style={styles.textspace}>Email :</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <Text style={styles.textspace}>Password :</Text>
      <TextInput placeholder="Password" style={styles.input} />
      <Button
        title="Send"
        onPress={() => navigation.replace('Linkelcam')}
        style={styles.submit}
      />
      <Text style={styles.noaccount}>Don't have an account? </Text>
      <Text title="Sign up" onPress={() => navigation.navigate('Signup')}>
        Sign up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: '#24221f',
    padding: 20,
    color: 'white',
  },
  submit: {
    marginVertical: 20,
  },
  noaccount: {
    marginTop: 10,
    color: 'white',
  },
  input: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#467ffa',
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
    color: '#fff',
  },
  textspace: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 18,
    color: 'white',
  },
  login1: {
    fontSize: 20,
    color: 'white',
  },
});

export default Login;
