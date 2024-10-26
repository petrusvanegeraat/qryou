import React, { ReactNode } from 'react'

import { View as RNView } from 'react-native'

type Props = {
  children?: ReactNode
  className?: string
}

const View = (props: Props) => {
  const { children } = props
  return <RNView {...props}>{children}</RNView>
}

export default View
