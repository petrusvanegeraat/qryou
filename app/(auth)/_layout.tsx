import React, { useEffect } from 'react'

import { router, Stack } from 'expo-router'

const AuthLayout = () => {
  useEffect(() => {
    setTimeout(() => {
      router.push('/(home)')
    }, 0)
  }, [])

  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="sign-in" />
    </Stack>
  )
}

export default AuthLayout
