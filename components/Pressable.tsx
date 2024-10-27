import React, { ReactNode } from 'react'

import { Pressable as RNPressable, StyleSheet, ViewStyle } from 'react-native'

import Text from './Text'

type Props = {
  children?: ReactNode
  label?: string
  style?: ViewStyle
  onPress?: () => void
  enabled: boolean
}

const Pressable = (props: Props) => {
  const { label = '', enabled } = props

  const pressableStyle = { ...styles.pressable, backgroundColor: enabled ? '#007AFF' : '#CCCCCC' }

  const textStyle = { ...styles.pressableText, color: enabled ? 'white' : '#888' }

  return (
    <RNPressable disabled={!enabled} style={pressableStyle} {...props}>
      <Text style={textStyle}>{label}</Text>
    </RNPressable>
  )
}

export default Pressable

const styles = StyleSheet.create({
  pressable: {
    paddingHorizontal: 12,
    marginHorizontal: 12,
    marginTop: 12,
    height: 56,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressableText: {
    fontFamily: 'SFSemibold',
    fontSize: 17,
  },
})
