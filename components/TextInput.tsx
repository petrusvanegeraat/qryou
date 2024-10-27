import React, { memo } from 'react'

import { StyleSheet, TextInput } from 'react-native'

import { Field } from '@/types'

import Switch from './Switch'
import View from './View'

type Props = {
  input: Field
  handleFieldChange?: (input: Field) => void
  showToggle?: boolean
}

const TextField = (props: Props) => {
  const { input, handleFieldChange, showToggle = false } = props

  const { enabled, placeholder, value } = input

  const onChangeText = (text: string) => {
    if (!handleFieldChange) return
    handleFieldChange({
      ...input,
      value: text,
    })
  }

  const onToggle = () => {
    if (!handleFieldChange) return
    handleFieldChange({
      ...input,
      enabled: !enabled,
    })
  }

  return (
    <View style={styles.textInputContainer}>
      <TextInput
        editable={showToggle}
        style={styles.textInput}
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
        multiline={false}
        onChangeText={onChangeText}
      />
      {showToggle && <Switch enabled={enabled} onToggle={onToggle} />}
    </View>
  )
}

export default memo(TextField)

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    backgroundColor: '#FFFFFF',
    borderColor: '#C6C6C8',
    paddingHorizontal: 12,
  },
  textInput: {
    height: 66,
    flex: 1,
  },
})
