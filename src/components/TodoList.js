import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
//import Icon from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function TodoList(props) {
  //console.log(props.todo, "logging props");
  return (
    <View style={styles.listTile}>
      <Icon
        name={props.todo.isChecked ? "check-circle" : "radio-button-unchecked"}
        style={styles.leading}
        size={20}
        color="#666666"
        onPress={() => props.checkTodo(props.todo.key)}
      />
      <Text style={styles.title}>{props.todo.name}</Text>
      <Icon
        name="delete"
        style={styles.trailing}
        size={20}
        color="#666666"
        onPress={() => props.deleteTodo(props.todo.key)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listTile: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#666666",
  },
  leading: {},
  title: {
    flex: 1,
    marginStart: 8,
    marginEnd: 8,
    fontSize: 18,
  },
  trailing: {},
});
