import { View, Text, Image, Touchable } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Card() {
    return (
        <TouchableOpacity>
            <View className="shadow-md bg-slate-100 pb-[12px] rounded-lg mb-[12px]"  >
            <Image
                source={ require('../assets/cat.png')}
                className="w-[100%] h-[25vh] rounded"
            />
            <Text className="text-h3 ml-[12px] mt-[12px]">Pet Care Clinic</Text>
            <View className="m-[4px] ml-[12px] flex flex-row ">
                <AntDesign name='star' color='orange' />
                <AntDesign name='star' color='orange' />
                <AntDesign name='star' color='orange' />
            </View>
            <View className="flex flex-row ml-[12px] ">
                <Text className="mr-4">850 m</Text>
                <Text>10:00 - 16:30</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}