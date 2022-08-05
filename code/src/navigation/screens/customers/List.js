import React from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";
import CustomerList from "../../../features/customer/List";

const ListScreen = () => (
  <SafeAreaView>
    <CustomerList />
  </SafeAreaView>
);

export default ListScreen;
