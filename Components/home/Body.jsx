import { View, Text, ScrollView,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Card from '../../subcomponents/Card'

export default function Body() {
const [tab,setTab] = useState(0)

    return (
        <View className="ml-[14px] mr-[14px]">
            <View className="flex flex-row justify-between mt-[8px]" >
            <TouchableOpacity onPress={console.log('clicked')}>
                    <View>
                    <Text >Clinics near you</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                    <Text >Grooming Stores</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView className="mt-[14px]">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </ScrollView>
        </View>
    )
}