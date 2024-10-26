import React from 'react'

import { Pressable } from 'react-native'

import { router } from 'expo-router'

import Text from '@/components/Text'
import View from '@/components/View'

const SignIn = () => {
  return (
    <View>
      <Text>Sign in page</Text>
      <Pressable onPress={() => router.navigate('/(home)')}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  )
}

export default SignIn
