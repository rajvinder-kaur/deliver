import { View, Text, TextInput, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Search from '../../subcomponents/Search'

export default function Header() {
    return (
        <View className="pt-10 ml-[14px] mr-[14px] ">
            <Text className=" ">Hey Lara !</Text>
            <Text className="text-h3">How can i help u today?</Text>
            <Search />
            <Text className=" mt-[8px] ">Recommendations</Text>
            <View>
                <Image
                    source={require('../../assets/banner.png')}
                    className="h-[22vh] w-[93vw] rounded-lg mt-[8px]"
                />
            </View>
            
        </View>
    )
}