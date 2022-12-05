import { FARMS } from "../data/farm";
import FarmItem from "../components/FarmItem";
import { FlatList } from "react-native";
import React from "react";

const CategoryFarmScreen = ({ navigation, route }) => {
  const farms = FARMS.filter(
    (farm) => farm.category === route.params.categoryID
  );

  const handleSelectedCategory = (item) => {
    navigation.navigate("Details", {
      productID: item.id,
      name: item.name,
    });
  };

  const renderFarmItem = ({ item }) => (
    <FarmItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={farms}
      keyExtractor={(item) => item.id}
      renderItem={renderFarmItem}
    />
  );
};

export default CategoryFarmScreen;
