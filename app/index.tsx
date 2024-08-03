import { StyleSheet, Text, View } from "react-native";
import { Home } from "../components/Home/Home";
import { GoogleAuth } from "../components/Login/GoogleAuth";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World Test</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <GoogleAuth />
        <Home />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
