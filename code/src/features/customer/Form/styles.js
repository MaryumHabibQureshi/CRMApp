const styles = () => {
  return {
    container: {
      margin: "5%",
      flexGrow: 1,
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: "10%",
    },
    form: {
      height: "100vh",
      width: "100%",
    },
    dropdownsRow: {
      flexDirection: "row",
      width: "100%",
      paddingHorizontal: "2%",
    },

    dropdown1BtnStyle: {
      flex: 1,
      height: "auto",
      backgroundColor: "#FFF",
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#444",
    },
    dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
    dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
    dropdown1RowStyle: {
      backgroundColor: "#EFEFEF",
      borderBottomColor: "#C5C5C5",
    },
    dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
  };
};

export default styles;
