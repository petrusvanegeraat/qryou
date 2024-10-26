import React, { memo } from 'react'

import { TextInput } from 'react-native'

import { Field } from '@/types'

import Switch from './Switch'
import View from './View'

type Props = {
  input: Field
  handleChange: (input: Field) => void
}

const TextField = (props: Props) => {
  const { input, handleChange } = props

  const { enabled, placeholder, value } = input

  const onChangeText = (text: string) => {
    handleChange({
      ...input,
      value: text,
    })
  }

  const onToggle = () => {
    handleChange({
      ...input,
      enabled: !enabled,
    })
  }

  // some NativeWind v4 classes are unreliable still, temporarely fixing them by using good-ol' style
  return (
    <View
      style={{ borderColor: '#C6C6C8' }}
      className="flex flex-row items-center border-b-[0.5px] bg-white">
      <TextInput
        style={{
          paddingHorizontal: 12,
        }}
        autoCorrect={false}
        className="flex flex-1 h-[64px]"
        placeholder={placeholder}
        value={value}
        multiline={false}
        onChangeText={onChangeText}
      />
      <Switch enabled={enabled} onToggle={onToggle} />
    </View>
  )
}

export default memo(TextField)
