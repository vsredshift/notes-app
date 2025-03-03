import { StyleSheet } from "react-native";
import { theme } from "../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    noteItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#f5f5f5",
        padding: 15,
        borderRadius: 5,
        marginVertical: 5,
    },
    noteText: {
        fontSize: 18,
    },
    addButton: {
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: theme.colors.primary,
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
    },
    addButtonText: {
        color: theme.colors.secondary,
        fontSize: 18,
        fontWeight: "bold",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        width: "80%",
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        marginBottom: 15,
    },
    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cancelButton: {
        backgroundColor: theme.colors.danger,
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 10,
        alignItems: "center",
    },
    cancelButtonText: {
        fontSize: 16,
        color: "#fff",
    },
    saveButton: {
        backgroundColor: theme.colors.primary,
        padding: 10,
        borderRadius: 5,
        flex: 1,
        alignItems: "center",
    },
    saveButtonText: {
        color: theme.colors.secondary,
        fontSize: 16,
        fontWeight: "bold"
    },
});
