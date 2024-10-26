import React, { ReactNode } from 'react'

import { Text as RNText, TextStyle } from 'react-native'

type Props = {
  children?: ReactNode
  className?: string
  style?: TextStyle
}

const Text = (props: Props) => {
  const { children, className } = props

  const style = `font-regular leading-[2] ${className}`

  return (
    <RNText className={style} {...props}>
      {children}
    </RNText>
  )
}

export default Text
