import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo'
import Antdesign from '@expo/vector-icons/AntDesign'

export default function SearchBar() {
  return (
    <View className="flex-row items-center space-x-2 pr-4 pl-4 pb-2 " >
      <View className="flex-row space-x-2 flex-1 bg-gray-100 p-3 items-center" >
        <Antdesign name='search1' size={20} color="gray" />
        <TextInput
          placeholder='Restaurants and Cuisines'
          keyboardType='default'
        />
      </View>
      <Entypo name='sound-mix' color="green" size={20} />
    </View>
  )
}