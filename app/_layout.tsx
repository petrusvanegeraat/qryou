import 'react-native-reanimated'

import { useEffect } from 'react'

import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { StyleSheet } from 'react-native'

import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'

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
      <GestureHandlerRootView style={styles.container}>
        <Stack>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(home)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
