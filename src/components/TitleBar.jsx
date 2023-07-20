import { View, Image, Button } from "react-native";

export default function LogoTitle({ navigation }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <Button title="Info" color="green" onPress={() => alert("AYO!")} />
      <Image
        style={{ width: 50, height: 50 }}
        src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
        source="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
      />
    </View>
  );
}
