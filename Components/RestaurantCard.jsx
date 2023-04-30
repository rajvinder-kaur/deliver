import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from '@expo/vector-icons/AntDesign'
import EvilIcons from '@expo/vector-icons/EvilIcons'

export default function RestaurantCard({ imgURL, title, rating, genre, address, short_description, dishes, long, lat }) {
  return (
    <TouchableOpacity className="p-1">
      <Image
        source={{
          uri: imgURL,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="pl-3 ">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="pt-1 pb-1 flex-row items-center space-x-1" >
          <AntDesign name="star" opacity={0.5} color="green" size={15}>
            <Text>{rating}</Text> </AntDesign>
          <Text>. {title}</Text>
        </View >
        <View className="flex items-center flex-row">
          <EvilIcons name='location' size={22}></EvilIcons>
          <Text>{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}