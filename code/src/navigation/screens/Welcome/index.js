import { useNavigation } from "@react-navigation/native";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import welcomeStyles from "./styles";

export default function Welcome() {
  const styles = StyleSheet.create(welcomeStyles());
  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Title text="Welcome to the CRM App" />

          <Button
            onPress={() => navigate("MainPage")}
            text="Continue"
            disabled={false}
          />

          <Button text="Clear Data" disabled={false} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
