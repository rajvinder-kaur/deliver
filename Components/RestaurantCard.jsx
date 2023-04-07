import { View, Text,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function RestaurantCard({imgURL,title,rating,genre,adress,short_description,dishes,long,lat}) {
  return (
    <TouchableOpacity>
        <Image
         source={{
            uri:imgURL,
         }}
         className="h-36 w-64 rounded-sm"
        />
        <View>
            <Text className="font-bold text-lg pt-2">{title}</Text>
        </View>
    </TouchableOpacity>
  )
}