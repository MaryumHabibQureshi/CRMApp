import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import Row from "./row";
import Title from "../../../components/Title";
import RegionListStyles from "./styles";

const RegionList = () => {
  const styles = StyleSheet.create(RegionListStyles());
  const regions = useSelector((state) => state.customer.regions.list);
  console.log(regions);

  return (
    <View style={styles.container}>
      <Title text="Regions List" />
      <FlatList
        data={regions}
        renderItem={(props) => <Row {...props} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default RegionList;
