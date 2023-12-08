import { View, Text,TextInput } from 'react-native'
import React from 'react'
import Antdesign from '@expo/vector-icons/AntDesign'


export default function Search() {
    return (
        <View className="flex flex-row justify-between p-2 mt-[8px] bg-[#F5F5F5] rounded-lg">
                <TextInput className=""
                    placeholder='Search Items'
                    keyboardType='default'
                />
                <Antdesign name='search1' size={20} color="gray" className="align-self-end"/>
            </View>
    )
}