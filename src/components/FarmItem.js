import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const FarmItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <View style={styles.farmItem}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.details}>{item.price}</Text>
          <Text style={styles.details}>{item.weight}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FarmItem;

const styles = StyleSheet.create({
  farmItem: {
    padding: 20,
    margin: 10,
    borderRadius: 3,
    backgroundColor: "#ccc",
  },
  title: {
    fontSize: 20,
    fontFamily: "Tillana",
  },
  details: {
    fontSize: 18,
  },
});
