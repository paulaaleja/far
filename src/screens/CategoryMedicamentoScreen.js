import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

const CategoryBreadScreen = ({ navigation }) => {
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias de Medicamentos</Text>
      <Button
        title="Ver Detalles"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default CategoryBreadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDBF50",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Roboto",
  },
});
