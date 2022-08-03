import React from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";
import New from "../../../features/customer/New";

const CreateScreen = () => (
  <SafeAreaView>
    <ScrollView>
      <New />
    </ScrollView>
  </SafeAreaView>
);

export default CreateScreen;
