import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const MedicamentoDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medicamento Categoria</Text>
      <Text style={styles.title}>Cronicos</Text>
      <Text style={styles.title}>Venta Libre</Text>
      <Text style={styles.title}>Multivitaminicos</Text>
      <Text style={styles.title}>Productos de Perfumeria</Text>
    </View>
  )
}

export default MedicamentoDetailsScreen

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