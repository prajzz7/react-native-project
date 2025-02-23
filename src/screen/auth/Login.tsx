import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import React from 'react';
// import {Button} from '@react-navigation/elements';
import {Formik} from 'formik';
import * as Yup from 'yup';
import SCREEN_NAMES from '../../utils/ScreenNames';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is reuqired').label('Username'),
  password: Yup.string()
    // .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    // .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .min(8, ({min}) => `Password must be at least ${min} characterss`)
    .required('Password is required')
    .label('Password'),
});

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      {/* <Text onPress={() => navigation.navigate('Splash')}>Please Login</Text> */}
      {/* <Button onPressOut={() => navigation.navigate('Splash')}>Sign In</Button> */}
      <Formik
        initialValues={{username: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log('values', values);
          navigation.navigate(SCREEN_NAMES.HOME);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <TextInput
              placeholder="Username"
              value={values.username}
              onChangeText={handleChange('username')}
            />
            {console.log('errors', errors)}
            <Text style={styles.errorText}>{errors?.username}</Text>
            <TextInput
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Text style={styles.errorText}>{errors?.password}</Text>
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dedede',
    height: '100%',
  },
  errorText: {
    color: 'red',
  },
});
