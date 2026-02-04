import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Try editing me! 🎉</Text>
      <Image source = {{uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }} 
    />
    </View>
    
  );
};

export default YourApp;