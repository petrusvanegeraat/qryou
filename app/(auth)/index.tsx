import React from 'react'

import { Pressable, StyleSheet } from 'react-native'

import { router } from 'expo-router'

import Text from '@/components/Text'
import View from '@/components/View'

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome screen</Text>
      <Pressable onPress={() => router.navigate('/sign-in')}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
