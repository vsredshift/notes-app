import { StyleSheet } from "react-native";
import { theme } from "../theme";

export const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: theme.colors.textColorMedium,
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: theme.colors.secondary,
    fontSize: 18,
    fontWeight: "bold",
  },
  switchText: {
    marginTop: 10,
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: "900"
  },
  error: {
    color: theme.colors.danger,
    marginBottom: 10,
    fontSize: 16,
  },
});
