import React, {useState} from 'react';
import {StyleSheet, Button, View, TextInput, Text} from 'react-native';

const Signup = ({navigation}) => {
  return (
    <View style={styles.login}>
      <Text style={styles.login1}>Sign Up{'\n'}</Text>
      <Text style={styles.textspace}>Name :</Text>
      <TextInput placeholder="name" style={styles.input} />
      <Text style={styles.textspace}>Email :</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <Text style={styles.textspace}>Password :</Text>
      <TextInput placeholder="Password" style={styles.input} />
      <Button title="Send" style={styles.submit} />
      <Text style={styles.haveaccount}>Already have an account? </Text>
      <Text title="Log in" onPress={() => navigation.navigate('Login')}>
        Log In
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: '#24221f',
    padding: 20,
  },
  submit: {
    marginVertical: 50,
  },
  haveaccount: {
    marginTop: 10,
    color: 'white',
  },
  input: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#467ffa',
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
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

export default Signup;
