import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { filteredFarm, selectFarm } from "../store/actions/farm.action";

import { FARMS } from "../data/farm";
import FarmItem from "../components/FarmItem";
import { FlatList } from "react-native";

const CategoryFarmScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const categoryFarms = useSelector((state) => state.farms.filteredFarm);
  const category = useSelector((state) => state.categories.selected);

  useEffect(() => {
    dispatch(filteredFarm(category.id));
  }, []);
  
  const handleSelectedCategory = (item) => {
    dispatch(selectFarm(item.id));
    navigation.navigate("Details", {
      name: item.name,
    });
  };
 

  const renderFarmItem = ({ item }) => (
    <FarmItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={categoryFarms}
      keyExtractor={(item) => item.id}
      renderItem={renderFarmItem}
    />
  );
};

export default connect()(CategoryFarmScreen);