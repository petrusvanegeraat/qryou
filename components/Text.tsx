import React, { ReactNode } from 'react'

import { Text as RNText } from 'react-native'

type Props = {
  children?: ReactNode
  className?: string
}

const Text = (props: Props) => {
  const { children } = props
  return <RNText {...props}>{children}</RNText>
}

export default Text
