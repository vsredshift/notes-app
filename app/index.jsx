import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { theme } from "./theme";
import notepadImage from "../assets/images/notepad-icon.png";

const HomeScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={notepadImage} style={styles.image} />
      <Text style={styles.title}>Welcome to Notes App</Text>
      <Text style={styles.subtitle}>Capture your ideas anytime, any place</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/notes")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: theme.container,
  image: {
    width: 160,
    height: 160,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#9FD2DD",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#886F3C",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
