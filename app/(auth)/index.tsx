import React from 'react'

import { Pressable } from 'react-native'

import { router } from 'expo-router'

import Text from '@/components/Text'
import View from '@/components/View'

const WelcomeScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Welcome screen</Text>
      <Pressable onPress={() => router.navigate('/sign-in')}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  )
}

export default WelcomeScreen
