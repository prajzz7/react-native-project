import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authenticator} from 'otplib';

const VerifyMFA = ({navigation}) => {
  const [otp, setOtp] = useState('');
  const [secretKey, setSecretKey] = useState('');

  useEffect(() => {
    // Retrieve the saved secret key
    const getSecretKey = async () => {
      const key = await AsyncStorage.getItem('MFA_SECRET');
      if (key) setSecretKey(key);
    };
    getSecretKey();
  }, []);

  const verifyOtp = () => {
    if (!secretKey) {
      Alert.alert('Error', 'Secret key not found.');
      return;
    }

    const isValid = authenticator.verify({token: otp, secret: secretKey});
    if (isValid) {
      Alert.alert('Success', 'MFA setup complete!');
      navigation.navigate('HomeScreen'); // Redirect user after successful verification
    } else {
      Alert.alert('Error', 'Invalid OTP. Try again.');
    }
  };

  return (
    <View style={{padding: 20}}>
      <Text>Enter the 6-digit code from Google Authenticator:</Text>
      <TextInput
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
        maxLength={6}
        style={{borderWidth: 1, padding: 10, marginVertical: 10}}
      />
      <Button title="Verify" onPress={verifyOtp} />
    </View>
  );
};

export default VerifyMFA;
