import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const Greeting = (props) => {
//   return (
//     <View style={styles.center}>
//       <Text style={styles.text}>Hello {props.name}!</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   center: {
//     // flex: 1,
//     // justifyContent: "space-between",
//     // flexDirection: "row",
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
//   text: {
//     color: "rgba(255, 255, 100, 1)",
//   }
// });

const HelloWorldApp = () => {
  return (
    <View>
      <Greeting name="Rexxar" />
      <Greeting name="Jaina" />
      <Greeting name="Valeera" />
    </View>
  );
};
export default HelloWorldApp;
