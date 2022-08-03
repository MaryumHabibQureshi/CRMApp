import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/Button";

const Row = ({ item }) => {
  const { navigate } = useNavigation();

  return (
    <Button
      onPress={() => navigate("Customers", { regionID: item.id })}
      text={item.name}
      disabled={false}
    />
  );
};

export default Row;
