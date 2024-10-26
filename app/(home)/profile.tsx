import React, { useCallback, useState } from 'react'

import TextInput from '@/components/TextInput'
import View from '@/components/View'
import { Field, Fields } from '@/types'

const Profile = () => {
  const [fields, setFields] = useState<Fields>({
    firstName: { id: 'firstName', placeholder: 'First Name', value: '', enabled: false },
    lastName: { id: 'lastName', placeholder: 'Last Name', value: '', enabled: false },
    company: { id: 'company', placeholder: 'Company', value: '', enabled: false },
  })

  const handleChange = useCallback((input: Field) => {
    setFields((prev: Fields) => ({
      ...prev,
      [`${input.id}`]: input,
    }))
  }, [])

  return (
    <View className="flex-1 items-stretch">
      <View className="h-[200px] bg-[#F2F2F7] flex items-center justify-center">
        <View className="rounded-full bg-[#E3E3E8] w-[108px] h-[108px]" />
      </View>
      {Object.values(fields).map((input: Field) => (
        <TextInput key={input.id} input={input} handleChange={handleChange} />
      ))}
    </View>
  )
}

export default Profile
