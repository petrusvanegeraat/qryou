import React from 'react'

import { Switch as RNSwitch, StyleSheet } from 'react-native'

import View from './View'

type Props = {
  enabled: boolean
  onToggle: () => void
}

const Switch = (props: Props) => {
  const { enabled, onToggle } = props

  return (
    <View style={styles.switchContainer}>
      <RNSwitch
        trackColor={{ false: '#E9E9EB', true: '#32D74B' }}
        thumbColor="#FFFFFF"
        ios_backgroundColor="#E9E9EB"
        onValueChange={onToggle}
        value={enabled}
      />
    </View>
  )
}

export default Switch

const styles = StyleSheet.create({
  switchContainer: {
    paddingHorizontal: 8,
  },
})
