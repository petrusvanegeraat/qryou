import React from 'react'

import { StyleSheet } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'

import Folder from '@/assets/icons/folder.svg'
import Text from '@/components/Text'
import View from '@/components/View'

const Home = () => {
  return (
    <LinearGradient
      start={{ x: 1, y: -0.5 }}
      end={{ x: 0, y: 1 }}
      colors={['#4477F3', '#FFFFFF']}
      style={styles.gradient}>
      <View style={styles.container}>
        <Folder width={164} height={138} />
        <View style={styles.emptyList}>
          <Text style={styles.emptyListText}>
            Your contact details are empty! you can import or{' '}
            <Link href="/profile" style={styles.linkText}>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyList: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  emptyListText: {
    fontFamily: 'SFRegular',
    textAlign: 'center',
    maxWidth: 220,
  },
  linkText: {
    fontFamily: 'SFSemibold',
    color: '#007AFF',
  },
  gradient: {
    flex: 1,
  },
})
