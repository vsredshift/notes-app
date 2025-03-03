import { View, Text } from "react-native";
import { styles } from "../notes/styles";

const NoteItem = ({ note }) => {
  return (
    <View style={styles.noteItem}>
      <Text style={styles.noteText}>{note.text}</Text>
    </View>
  );
};

export default NoteItem;
