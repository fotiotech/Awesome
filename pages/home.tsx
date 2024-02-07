/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {FetchData} from './getData/FetchData';
import {FetchOpenai} from './getData/FetchData';
import Video from 'react-native-video';

import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';



export default function Home({navigation}) {
  const [result, setResult] = useState('');

  // console.log(result);

  // FetchData('series', 'tt0903747', setResult);
  // FetchOpenai('You are a helpful assistant.', setResult);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.Elemen}>Header</Text>
          <Text style={styles.Elemen}>Header</Text>
          <Text style={styles.Elemen}>Header</Text>
        </View>
        {/* <View style={styles.imageContainer}>
          <ImageBackground
            source={require('./image/lamborghini-murcielago-vt-2001/textures/-_Lamborghini_Murcielago_VT_2001_in_Showro.png')}
            resizeMode="cover"
            style={styles.image}
          />
          <TouchableOpacity
            title="Go to profile"
            onPress={() => navigation.navigate('Details')}
          />
          <Text style={styles.Elemen}>{result}</Text>
        </View> */}
      </ScrollView>
      <FlatList
        data={result}
        renderItem={({item}) => (
          <ScrollView>
            {/* <Image
              source={{
                uri: item?.seasonNumber,
              }}
              style={styles.vid}
            /> */}
            {/* <Text>somthing to show {item?.choices[0]}</Text> */}
          </ScrollView>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 900,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 48,
    padding: 3,
    backgroundColor: 'white',
  },
  imageWrapper: {
    height: 100,
  },
  imageContainer: {
    width: '100%',
    height: 300,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 10,
  },
  Elemen: {
    color: 'white',
    fontSize: 15,
    margin: 2,
    paddingHorizontal: 30,
    paddingVertical: 8,
    backgroundColor: 'black',
    borderRadius: 20,
  },
  vid: {
    width: 300,
    height: 300,
  },
});
