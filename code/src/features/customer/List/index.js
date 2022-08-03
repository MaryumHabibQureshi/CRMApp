import React from "react";
import { View, Text, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Row from "./row";
import Title from "../../../components/Title";
import Button from "../../../components/Button";
import { useListRegions, useListCustomers } from "../hooks";

const List = () => {
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const { regionID } = params;
  const regions = useListRegions();
  const region = regions.find((r) => r.id === regionID);
  const customers = useListCustomers(regionID);
  console.log("list");
  console.log(customers);

  return (
    <View>
      <Title text={`Customers of ${region.name} Region`} />

      {customers && customers.length > 0 ? (
        <FlatList
          data={customers || []}
          renderItem={(props) => <Row {...props} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <>
          <Text>{"No customers yet!"}</Text>
          <Button
            text="Add Customer"
            onPress={() => {
              navigate("Add Customer");
            }}
            disabled={false}
          />
        </>
      )}
    </View>
  );
};

export default List;
