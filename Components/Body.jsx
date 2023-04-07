import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import Categories from './Categories'
import FeaturedCategory from './FeaturedCategory'



export default function Body() {
  return (
    <ScrollView className="bg-gray-100">
      <Categories/>
      <FeaturedCategory title="Featured" 
      id="1"
      description="Paid placements from our partners"
      Category="featured"
      />
      <FeaturedCategory title="Tasty Discounts" 
      id="2"
      description="Everyone's been enjoying these juicy discounts"
      Category="discounts"
      />
      <FeaturedCategory title="Offer near you" 
      id="3"
      description="Why not support your local restaurant tonight!"
      Category="featured"
      />
      <FeaturedCategory title="Featured" 
      id="4"
      description="Paid placements from our partners"
      Category="featured"
      />
    </ScrollView>
  )
}