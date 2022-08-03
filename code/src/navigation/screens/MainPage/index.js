import { useNavigation } from "@react-navigation/native";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import MainPageStyles from "./styles";

export default function MainPage() {
  const styles = StyleSheet.create(MainPageStyles());
  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Title text="Welcome to the CRM App" />

          <Button
            onPress={() => navigate("Add Customer")}
            text="Add a Customer"
            disabled={false}
          />

          <Button
            onPress={() => navigate("Customers")}
            text="View Customers"
            disabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
