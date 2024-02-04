/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCQFpLpE4dNhBxb3QmVc9OdtjahISIoI1M',
  authDomain: 'fotiodb.firebaseapp.com',
  projectId: 'fotiodb',
  storageBucket: 'fotiodb.appspot.com',
  messagingSenderId: '289830992911',
  appId: '1:289830992911:web:f48fc805def89b88d6b77a',
  measurementId: 'G-MZ63VC3P74',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/home';
import DetailsScreen from './pages/detailsScreen';
import Signup from './pages/signup';
import Login from './pages/login';
import Profile from './pages/profile';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Linkelcam"
          options={{
            headerShadowVisible: false,
          }}
          component={Home}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
