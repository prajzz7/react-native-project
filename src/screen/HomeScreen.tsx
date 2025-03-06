import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import IMAGES from '../utils/ImagePath';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import categories from '../utils/Categories';
import Categories from '../components/home/Categories';

export default function HomeScreen({navigation}) {
  console.log('nav', navigation);

  return (
    <View>
      <View style={styles.header}>
        <Text
          style={{fontSize: 30, fontWeight: 600, color: 'black'}}
          onPress={() => navigation.goBack()}>
          Let's Discover
        </Text>
        <Image source={IMAGES.USER} alt="profile-icon" style={styles.profile} />
      </View>
      <View style={{marginTop: 20, marginHorizontal: 15}}>
        <View
          style={{
            backgroundColor: '#dedede',
            width: '100%',
            paddingHorizontal: 16,
            paddingVertical: 10,
            borderRadius: 32,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 25, height: 25, marginRight: 10}}
            source={IMAGES.SEARCH}
          />
          <TextInput
            style={{
              height: 45,
              flex: 1,
              fontSize: 18,
              paddingLeft: 8,
            }}
            placeholder="Search Destination"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginTop: 30,
          }}>
          <Text style={{fontSize: 16, fontWeight: 600, color: '#000'}}>
            Categories
          </Text>
          <Text style={{fontSize: 16, color: '#FD4E59', fontWeight: 500}}>
            See all
          </Text>
        </View>
      </View>
      <Categories />
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    height: 45,
    width: 45,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 20,
  },
});
