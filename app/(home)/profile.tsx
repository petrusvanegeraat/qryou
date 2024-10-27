import React, { useCallback, useMemo, useRef, useState } from 'react'

import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet'
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types'

import { StyleSheet } from 'react-native'

import { router } from 'expo-router'

import Pressable from '@/components/Pressable'
import TextInput from '@/components/TextInput'
import View from '@/components/View'
import { Field, Fields } from '@/types'

const Profile = () => {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const [fields, setFields] = useState<Fields>({
    firstName: { id: 'firstName', placeholder: 'First Name', value: '', enabled: false },
    lastName: { id: 'lastName', placeholder: 'Last Name', value: '', enabled: false },
    company: { id: 'company', placeholder: 'Company', value: '', enabled: false },
  })

  const [sheetIndex, setSheetIndex] = useState<number>(-1)

  const snapPoints = useMemo(() => [1, '75%'], [])

  const handleFieldChange = useCallback((input: Field) => {
    setFields((prev: Fields) => ({
      ...prev,
      [`${input.id}`]: input,
    }))
  }, [])

  const preview = useCallback(() => {
    setSheetIndex(1)
  }, [])

  const generate = useCallback(() => {
    router.push('/(home)')
  }, [])

  const handleSheetChanges = useCallback((index: number) => {
    setSheetIndex(index)
  }, [])

  const renderBackdrop = useCallback(
    (props: BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />
    ),
    [],
  )

  const enabled = useMemo(() => {
    return Object.values(fields).some(
      (field: Field) => field.enabled === true && field.value.length > 0,
    )
  }, [fields])

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.image} />
      </View>
      {Object.values(fields).map((input: Field) => (
        <TextInput
          key={input.id}
          input={input}
          handleFieldChange={handleFieldChange}
          showToggle={true}
        />
      ))}
      <Pressable onPress={preview} label="Next" enabled={enabled} />
      <BottomSheet
        enablePanDownToClose={true}
        ref={bottomSheetRef}
        index={sheetIndex}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enableDynamicSizing={false}
        onChange={handleSheetChanges}>
        <BottomSheetView style={styles.bottomSheetView}>
          {Object.values(fields)
            .filter((i: Field) => i.enabled === true)
            .map((input: Field) => (
              <TextInput key={input.id} input={input} />
            ))}
          <Pressable onPress={generate} label="Create" enabled={true} />
        </BottomSheetView>
      </BottomSheet>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  imageContainer: {
    height: 200,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: '50%',
    backgroundColor: '#E3E3E8',
    width: 108,
    height: 108,
  },
  bottomSheetView: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
})
