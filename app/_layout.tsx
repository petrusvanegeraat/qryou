import { useEffect } from 'react'

import { DefaultTheme, ThemeProvider } from '@react-navigation/native'

import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

import '../global.css'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    SFLight: require('../assets/fonts/SF-Pro-Display-Light.otf'),
    SFRegular: require('../assets/fonts/SF-Pro-Display-Regular.otf'),
    SFMedium: require('../assets/fonts/SF-Pro-Display-Medium.otf'),
    SFSemibold: require('../assets/fonts/SF-Pro-Display-Semibold.otf'),
    SFBold: require('../assets/fonts/SF-Pro-Display-Bold.otf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) return null

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  )
}
