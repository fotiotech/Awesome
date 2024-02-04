import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const Headericon = () => {
  return (
    <TouchableOpacity>
      <Image source={require('./image/sun.png')} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

export default Headericon;
