import React from 'react'

import Folder from '@/assets/icons/folder.svg'
import Text from '@/components/Text'
import View from '@/components/View'

const Home = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Folder width={164} height={138} />
      <Text>Your contact details are empty! you can Import or Add it manually</Text>
    </View>
  )
}

export default Home
