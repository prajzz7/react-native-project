import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Clipboard, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SCREEN_NAMES from '../../utils/ScreenNames';

const MFASetupScreen = ({navigation}) => {
  const [secretKey] = useState('JBSWY3DPEHPK3PXP'); // Hardcoded for now

  const saveSecretKey = async () => {
    await AsyncStorage.setItem('MFA_SECRET', secretKey);
    Alert.alert('MFA Setup', 'Secret key saved. Please verify with a TOTP.');
    navigation.navigate(SCREEN_NAMES.VERIFY_MFA); // Navigate to verification screen
  };

  const copyToClipboard = () => {
    Clipboard.setString(secretKey);
    Alert.alert('Copied!', 'Secret key copied to clipboard.');
  };

  return (
    <View style={{padding: 20, alignItems: 'center'}}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>Set up MFA</Text>
      <Text style={{marginVertical: 10}}>
        Enter this key in Google Authenticator:
      </Text>
      <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>
        {secretKey}
      </Text>

      <TouchableOpacity
        onPress={copyToClipboard}
        style={{backgroundColor: 'blue', padding: 10, borderRadius: 5}}>
        <Text style={{color: 'white'}}>Copy Key</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={saveSecretKey}
        style={{
          backgroundColor: 'green',
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
        }}>
        <Text style={{color: 'white'}}>I have added the key</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MFASetupScreen;
