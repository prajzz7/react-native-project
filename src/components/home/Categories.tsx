import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import categories from '../../utils/Categories';

export default function Categories() {
  return (
    <ScrollView
      style={{marginTop: 16, display: 'flex'}}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingLeft: 15}}>
      {categories?.map(category => {
        return (
          <TouchableOpacity style={{marginRight: 16}}>
            <Image
              source={{uri: category?.image}}
              style={{
                width: 120,
                height: 90,
                borderRadius: 16,
                // marginRight: 16,
              }}
            />
            <Text
              style={{
                fontSize: 16,
                textAlign: 'center',
                fontWeight: 700,
                marginTop: 5,
              }}>
              {category?.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
