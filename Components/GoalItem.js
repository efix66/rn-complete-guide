import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },
  listItemText: {
    color: "blue",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
