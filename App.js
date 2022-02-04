import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";

import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

export default function App() {
  const [courseGoals, setCoureseGoals] = useState([]);

  //Display Goal  entered in a Text component
  const addGoalHandler = (goalTitle) => {
    setCoureseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };

  //Delete an intem course test

  const removeGoalHandler = (goalId) => {
    setCoureseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
