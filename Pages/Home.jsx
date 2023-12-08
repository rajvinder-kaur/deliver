import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
// import Header from '../Components/Header';
// import SearchBar from '../Components/SearchBar';
// import Body from '../Components/Body';
import Header from '../Components/home/Header';
import Body from '../Components/home/Body';

export default function Home() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <View className="bg-white flex-1">
      {/* <Header/>
          <SearchBar/>
         <Body/> */}
      <Header />
      <Body/>
    </View>
  )
}

