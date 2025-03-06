import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
// import {Button} from '@react-navigation/elements';
import {Formik} from 'formik';
import * as Yup from 'yup';
import SCREEN_NAMES from '../../utils/ScreenNames';
import IMAGES from '../../utils/ImagePath';

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
    // <View style={styles.container}>
    //   {/* <Text onPress={() => navigation.navigate('Splash')}>Please Login</Text> */}
    //   {/* <Button onPressOut={() => navigation.navigate('Splash')}>Sign In</Button> */}
    //   <Formik
    //     initialValues={{username: '', password: ''}}
    //     validationSchema={validationSchema}
    //     onSubmit={values => {
    //       console.log('values', values);
    //       navigation.navigate(SCREEN_NAMES.HOME);
    //     }}>
    //     {({
    //       handleChange,
    //       handleBlur,
    //       handleSubmit,
    //       values,
    //       errors,
    //       touched,
    //     }) => (
    //       <View>
    //         <TextInput
    //           placeholder="Username"
    //           value={values.username}
    //           onChangeText={handleChange('username')}
    //         />
    //         {console.log('errors', errors)}
    //         <Text style={styles.errorText}>{errors?.username}</Text>
    //         <TextInput
    //           placeholder="Password"
    //           value={values.password}
    //           onChangeText={handleChange('password')}
    //         />
    //         <Text style={styles.errorText}>{errors?.password}</Text>
    //         <Button onPress={handleSubmit} title="Submit" />
    //       </View>
    //     )}
    //   </Formik>
    // </View>
    <SafeAreaView style={styles.container}>
      {/* Top half with white background */}
      <View style={styles.topHalf}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Image source={IMAGES.BACK_ARROW} style={styles.backIcon} />
          </TouchableOpacity>
          {/* <Text style={styles.title}>Login</Text> */}
        </View>
        <View style={styles.vectorContainer}>
          <Image source={IMAGES.LOGIN_VECTOR} style={styles.vectorImage} />
        </View>
      </View>

      <Formik
        initialValues={{username: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log('values', values);
          // navigation.navigate(SCREEN_NAMES.HOME);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formContainer}>
            <TextInput
              style={[
                styles.input,
                errors?.username ? styles.inputError : null,
              ]}
              placeholder="Username"
              value={values.username}
              onChangeText={handleChange('username')}
              keyboardType="email-address"
            />
            <Text style={styles.errorText}>{errors?.username}</Text>
            <TextInput
              style={[
                styles.input,
                errors?.username ? styles.inputError : null,
              ]}
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry
            />
            {errors?.password && (
              <Text style={styles.errorText}>{errors?.password}</Text>
            )}
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: 'right',
                  color: '#fff',
                  marginBottom: 20,
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmit} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <Text
              style={{
                textAlign: 'center',
                fontSize: 24,
                fontWeight: 500,
                marginTop: 20,
                color: '#fff',
              }}>
              Or
            </Text>

            <View style={styles.socialLoginContainer}>
              <View style={{width: 40, height: 40}}>
                <Image source={IMAGES.GOOGLE_ICON} style={styles.socialIcon} />
              </View>
              <View style={{width: 40, height: 40}}>
                <Image source={IMAGES.TWITTER_ICON} style={styles.socialIcon} />
              </View>
            </View>
            <View style={styles.footer}>
              <Text style={styles.footerText}>Don't have an account?</Text>
              <TouchableOpacity>
                <Text style={[styles.footerText, styles.signUpText]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHalf: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    borderTopLeftRadius: 15,
    borderBottomEndRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FD4E59',
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
  vectorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 0,
  },
  vectorImage: {
    width: 300,
    height: 300,
  },
  formContainer: {
    flex: 1.5,
    backgroundColor: '#2C3E50',
    paddingHorizontal: 20,
    paddingTop: 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 5,
    paddingHorizontal: 15,
    backgroundColor: '#dedede',
  },
  inputError: {
    backgroundColor: '',
    borderWidth: 2,
    borderColor: '#FD4E59',
  },
  errorText: {
    color: '#FD4E59',
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#FD4E59',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 30,
    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
    marginVertical: 5,
  },
  signUpText: {
    marginLeft: 5,
    fontWeight: 500,
    color: '#FD4E59',
  },
  socialLoginContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
  },
  socialIcon: {
    height: 40,
    width: 40,
    // marginRight: 10,
  },
});
