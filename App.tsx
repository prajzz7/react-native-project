/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screen/auth/Login.tsx';
import SCREEN_NAMES from './src/utils/ScreenNames.tsx';
import SplashScreen from './src/screen/splash/index.tsx';
import TabNavigator from './src/navigators/TabNavigator.tsx';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const {Navigator, Screen} = createNativeStackNavigator();

function RootStack() {
  return (
    <Navigator
      initialRouteName={SCREEN_NAMES.LOGIN}
      screenOptions={{
        // headerStyle: {backgroundColor: 'tomato'},
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Screen name={SCREEN_NAMES.LOGIN} component={Login} />
      <Screen
        name="Splash"
        component={SplashScreen}
        // options={{headerShown: false}}
      />
      <Screen name={SCREEN_NAMES.HOME} component={TabNavigator} />
    </Navigator>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      {/* <View style={{backgroundColor: 'red'}}>
        <Text>Welcome</Text>
      </View> */}
      <NavigationContainer>
        {/* <SplashScreen />
         */}
        <RootStack />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
// <SafeAreaView style={backgroundStyle}>
//   <StatusBar
//     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//     backgroundColor={backgroundStyle.backgroundColor}
//   />
//   <ScrollView
//     contentInsetAdjustmentBehavior="automatic"
//     style={backgroundStyle}>
//     <Header />
//     <View
//       style={{
//         backgroundColor: isDarkMode ? Colors.black : Colors.white,
//       }}>
//       <Section title="Step One">
//         Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//         screen and then come back to see your edits.
//       </Section>
//       <Section title="See Your Changes">
//         <ReloadInstructions />
//       </Section>
//       <Section title="Debug">
//         <DebugInstructions />
//       </Section>
//       <Section title="Learn More">
//         Read the docs to discover what to do next:
//       </Section>
//       <LearnMoreLinks />
//     </View>
//   </ScrollView>
//   <View></View>
// </SafeAreaView>
