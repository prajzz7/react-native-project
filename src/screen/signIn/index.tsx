import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import React from 'react';
// import {Button} from '@react-navigation/elements';
import {Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is reuqired').label('Username'),
  password: Yup.string()
    // .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    // .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .label('Password'),
});

export default function SignIn({navigation}) {
  console.log('navigation', navigation.navigate);

  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('Splash')}>SignIn</Text>
      {/* <Button onPressOut={() => navigation.navigate('Splash')}>Sign In</Button> */}
      <Formik
        initialValues={{username: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log('values', values);
          navigation.navigate('Splash');
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
