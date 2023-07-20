import { Text, View, StyleSheet, Button } from "react-native";
import { useEffect, useState } from "react";

export default function HomeScreen({ navigation, route }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (route.params?.post) {
    }
  }, [route.params?.post]);

  useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      ),
    });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Text>Count: {count}</Text>
      <Button
        title="Go to detail"
        onPress={() =>
          navigation.navigate("Details", { itemId: 86, otherParam: "yay" })
        }
      />
      <Button
        title="create post"
        onPress={() => navigation.navigate("CreatePost")}
      />
      <Button
        title="Tabs"
        onPress={() => navigation.navigate("Tabs")}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );
}