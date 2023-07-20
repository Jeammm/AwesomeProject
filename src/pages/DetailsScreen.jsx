import { Text, View, StyleSheet, Button } from "react-native";
import { useEffect, useState } from "react";

export default function DetailsScreen({ navigation, route }) {
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParams: {JSON.stringify(otherParam)}</Text>
      <Button title="Detai again" onPress={() => navigation.push("Details")} />
      <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Set Params"
        onPress={() => navigation.setParams({ itemId: 100 })}
      />
      <Button
        title="Update title"
        onPress={() => navigation.setOptions({ title: "Updated" })}
      />
    </View>
  );
}