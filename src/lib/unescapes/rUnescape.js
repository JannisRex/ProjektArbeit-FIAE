import React from 'react'
import { Text } from 'react-native'

const rUnescape = (str: string): string => {
  let newString = str
  try {
    newString = str.split(`\\r`).map((txt: string, key: number) => <Text key={key}>{ txt }{ '\r' }</Text>)
  } catch (e) { /* when there is no \r */ }
  return newString
}

export default rUnescape
