import React, { ReactNode } from 'react'

import { View as RNView, ViewStyle } from 'react-native'

type Props = {
  children?: ReactNode
  className?: string
  style?: ViewStyle
}

const View = (props: Props) => {
  const { children, className } = props

  const style = `font-regular leading-[2] ${className}`

  return (
    <RNView className={style} {...props}>
      {children}
    </RNView>
  )
}

export default View
