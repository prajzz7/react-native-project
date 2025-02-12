import {View, Text} from 'react-native';
import React from 'react';
import {Button} from '@react-navigation/elements';

export default function SignIn({navigation}) {
  console.log('navigation', navigation.navigate);

  return (
    <View>
      <Text onPress={() => navigation.navigate('Splash')}>SignIn</Text>
      {/* <Button onPressOut={() => navigation.navigate('Splash')}>Sign In</Button> */}
    </View>
  );
}
