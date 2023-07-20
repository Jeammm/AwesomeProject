import { Text, View, StyleSheet, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function Feed({ navigation }) {
  return (
    <View style={{ backgroundColor: "red", height: "50%", flex: 0.5 }}>
      <Text>Feed</Text>
      <Button title="Post" onPress={() => navigation.navigate("CreatePost")} />
      <Button title="Message" onPress={() => navigation.navigate("Messages")} />
    </View>
  );
}

function Messages() {
  return (
    <View>
      <Text>Messages</Text>
    </View>
  );
}

export default function TabsScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 100, 1)",
  },
});
