import React from 'react'

import { StyleSheet } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'

import Folder from '@/assets/icons/folder.svg'
import Text from '@/components/Text'
import View from '@/components/View'

const Home = () => {
  // return (
  //   <View className="flex-1 items-center justify-center bg-white">
  //     <View className="w-[100px] h-[100px] bg-red-500 border-b-[0.5px] border-purple-500" />
  //     <RNTextInput className="h-[64px] w-[200px] px-[8px] bg-purple-500" />
  //     <TextInput
  //       key="company"
  //       input={{ id: 'company', placeholder: 'Company', value: '', enabled: false }}
  //       handleChange={() => null}
  //     />
  //   </View>
  // )
  return (
    <LinearGradient
      start={{ x: 1, y: -0.5 }}
      end={{ x: 0, y: 1 }}
      colors={['#4477F3', '#FFFFFF']}
      style={styles.gradient}>
      <View className="flex-1 justify-center items-center">
        <Folder width={164} height={138} />
        <View className="flex flex-row flex-wrap items-center justify-center px-12 pt-5">
          <Text className="text-center">
            Your contact details are empty! you can Import or{' '}
            <Link href="/profile" className="text-blue-500 font-semibold">
              Add it manually
            </Link>
          </Text>
        </View>
      </View>
    </LinearGradient>
  )
}

export default Home

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
})
