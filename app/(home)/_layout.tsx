import React from 'react'

import { Stack } from 'expo-router'

const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="profile"
        options={{
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: 'Profile',
        }}
      />
    </Stack>
  )
}

export default HomeLayout
