import { View, Text,Image } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons"
import Antdesign from "@expo/vector-icons/AntDesign"


export default function Header() {
  return (
    <View className="flex-row pb-3 pt-7 space-x-2 pr-3 pl-3 bg-white"  >
        <Image
         source={{
          uri :'https://i.pinimg.com/736x/ae/07/1b/ae071b8fadd7cd3353ffb13b139959c9.jpg'
         }}
         className="h-10 w-10 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs" >Deliver Now!</Text>
          <Text className="font-bold text-xl" >Current Location<Ionicons name="md-chevron-down" size={20}/></Text>
        </View>
        <Antdesign name="user" size={30} color="green"/>
       </View>
  )
}