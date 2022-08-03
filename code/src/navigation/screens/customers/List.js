import React from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";
import CustomerList from "../../../features/customer/List";

const ListScreen = () => (
  <SafeAreaView>
    <ScrollView>
      <CustomerList />
    </ScrollView>
  </SafeAreaView>
);

export default ListScreen;
