import { View, Text ,ScrollView , Image} from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categories() {

    arr ='https://i.pinimg.com/736x/ae/07/1b/ae071b8fadd7cd3353ffb13b139959c9.jpg';

  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal : 15,
        paddingTop: 10,
     }}
    horizontal  
    showHorizontalScrollIndicator={false}
     
    >
      <CategoryCard url={arr} title="testing"/>
      <CategoryCard url={arr} title="testing"/>
      <CategoryCard url={arr} title="testing"/>
      <CategoryCard url={arr} title="testing"/>
      <CategoryCard url={arr} title="testing"/>
      <CategoryCard url={arr} title="testing"/>
      <CategoryCard url={arr} title="testing"/>
      <CategoryCard url={arr} title="testing"/>
      <CategoryCard url={arr} title="testing"/>
      <CategoryCard url={arr} title="testing"/>
    </ScrollView>
  )
}