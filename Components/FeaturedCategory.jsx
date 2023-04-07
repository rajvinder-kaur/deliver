import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'
import RestaurantCard from './RestaurantCard'

export default function FeaturedCategory({title,description,category,id}) {
  return (
   <View className="flex-1">
     <View className="flex-row mt-4 items-center justify-between px-4" >
      <Text className="font-bold text-lg">{title}</Text>
      <AntDesign name='arrowright' size={20} color="green"/>
    </View>
    <Text className="text-xs text-gray-500 px-4" >{description}</Text>

    <ScrollView 
    horizontal
    contentContainerStyle={{
      paddingHorizontal:15,
    }}
    showHorizontalScrollIndicator={false}
    className="pt-4"
    >
    <RestaurantCard id={id}
     imgURL="https://images5.alphacoders.com/876/876612.jpg" title="Yo Sushi!" rating={4.5} genre="japanese" address="123 Main St" short_description="This is a test description of this dish" dishes={[]}
     long={234}
     lat={231}
    />
    </ScrollView>
   </View>
  )
}