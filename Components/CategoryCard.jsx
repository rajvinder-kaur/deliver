import { View, Text ,Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function CategoryCard({url,title}) {
  return (
    <TouchableOpacity className="relative mr-2">
        <Image
          source={{
            uri: url,
          }}
          className="h-20 w-20 rounded"
        />
        <Text className="absolute bottom-1 left-1  font-bold">{title}</Text>
    </TouchableOpacity>
  )
}