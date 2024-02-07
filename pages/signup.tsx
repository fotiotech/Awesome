import React, {useState} from 'react';
import {firebase} from '@react-native-firebase/auth';
import {firebaseConfig} from './api/Api';
import {StyleSheet, Button, View, TextInput, Text} from 'react-native';

firebase.initializeApp(firebaseConfig);

const Signup = ({navigation}) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function SignupHandler() {
    var auth = firebase.auth();

    var newData = {
      name: name,
      email: email,
      password: password,
    };

    var ref = auth.ref('users/signup');

    ref.push(newData, error => {
      if (error) {
        console.log('data could not be saved.' + error);
      } else {
        console.log('data saved successfully.');
      }
    });
  }

  return (
    <View style={styles.login}>
      <Text style={styles.login1}>Sign Up</Text>
      <Text style={styles.textspace}>Name :</Text>
      <TextInput
        onChange={e => setName(e.target.value)}
        placeholder="name"
        style={styles.input}
      />
      <Text style={styles.textspace}>Email :</Text>
      <TextInput
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        style={styles.input}
      />
      <Text style={styles.textspace}>Password :</Text>
      <TextInput
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        style={styles.input}
      />
      <Button
        title="Send"
        onPress={
          () => SignupHandler
          // navigation.navigate('Login');
        }
        style={styles.submit}
      />
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
