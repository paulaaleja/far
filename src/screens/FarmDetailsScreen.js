import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { useSelector } from 'react-redux'

const FarmDetailsScreen = () => {

  const farm = useSelector((state) => state.farms.selected) 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Farm Category</Text>
    </View>
  )
}

export default FarmDetailsScreen



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDBF50",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Tillana",
  },
})