import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TextInput, Switch, Text } from "react-native";
import { useUpdateFields, useListRegions } from "../hooks";
import { PENDING, INPROGRESS } from "../../../utilities/helpers";
import Button from "../../../components/Button";
import formStyles from "./styles";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Form = ({ handleSubmit, status, customerID }) => {
  const styles = formStyles();
  const { navigate } = useNavigation();
  const { fields, setFormField } = useUpdateFields(customerID);
  const { first_name, last_name, active, region } = fields;
  const regions = useListRegions();
  const toggleSwitch = () => setFormField("active", !active);

  const onSubmit = () => {
    handleSubmit();
    navigate("MainPage");
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View>
          <Text style={styles.title}>Last Name</Text>
          <TextInput
            key={"first_name"}
            placeholder={first_name || "First Name"}
            value={first_name || ""}
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 4,
              padding: 15,
            }}
            onChangeText={(v) => setFormField("first_name", v)}
          />
        </View>

        <View style={{ height: 15, width: "100%" }}></View>

        <View>
          <Text style={styles.title}>Last Name</Text>
          <TextInput
            key={"last_name"}
            placeholder={last_name || "Last Name"}
            value={last_name || ""}
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 4,
              padding: 15,
            }}
            onChangeText={(v) => setFormField("last_name", v)}
          />
        </View>
        <View style={{ height: 15, width: "100%" }}></View>

        <View>
          <Text style={styles.title}>Active?</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={active ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            style={styles.switchToggle}
            onValueChange={toggleSwitch}
            value={active}
          />
        </View>
        <View style={{ height: 15, width: "100%" }}></View>

        <View style={styles.dropdownsRow}>
          <SelectDropdown
            data={regions}
            defaultValue={region || ""}
            defaultButtonText={region || "Select Region"}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              setFormField("region", selectedItem.name);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem.name;
            }}
            rowTextForSelection={(item, index) => {
              return item.name;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={(isOpened) => {
              return (
                <FontAwesome
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={"#444"}
                  size={18}
                />
              );
            }}
            dropdownIconPosition={"left"}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
        </View>
        <View style={{ height: 15, width: "100%" }}></View>

        <Button
          onPress={onSubmit}
          text="Submit"
          disabled={
            (status !== PENDING && status !== INPROGRESS) ||
            first_name === null ||
            last_name === null ||
            region === null
          }
        />
      </View>
    </View>
  );
};

export default Form;
