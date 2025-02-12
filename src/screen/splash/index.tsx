import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
// import bgImage from '../../assets/ganpati.png'; // Correct import
import {useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';

export default function SplashScreen({navigation}) {
  // const navigation = useNavigation();

  // setTimeout(() => {
  //   navigation.navigate('SignIn');
  // }, 1000);
  return (
    // <ImageBackground source={bgImage} resizeMode="cover" style={{flex: 1}}>
    <View>
      <Text
        style={{padding: 15, fontSize: 25}}
        onPress={() => navigation.navigate('SignIn')}>
        E-commerce App
      </Text>
      {/* <Button onPressOut={}>Sign In</Button> */}
    </View>
    //{' '}
    // </ImageBackground>
  );
}
