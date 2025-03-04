import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "@/app/notes/styles";
import { useRef, useState } from "react";

const NoteItem = ({ note, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);
  const inputRef = useRef(null);

  const handleSave = () => {
    if (editedText.trim() === "") return;
    onEdit(note.$id, editedText);
    setIsEditing(false);
  }

  return (
    <View style={styles.noteItem}>
      {isEditing ? (
        <TextInput
          ref={inputRef}
          style={styles.input}
          value={editedText}
          onChangeText={setEditedText}
          autoFocus
          onSubmitEditing={handleSave}
          returnKeyType="done"
        />
      ) : (
        <Text style={styles.noteText}>{note.text}</Text>
      )}
      <View style={styles.actions}>
        {isEditing ? (
          <TouchableOpacity onPress={() => {
            handleSave();
          inputRef.current?.blur()}}>
            <Text style={styles.edit}>💾</Text>
          </TouchableOpacity>
        ) : (
          
          <TouchableOpacity onPress={() => setIsEditing(true)}>
            <Text style={styles.edit}>✏️</Text>
          </TouchableOpacity>
        )}
          <TouchableOpacity onPress={() => onDelete(note.$id)}>
            <Text style={styles.delete}>❌</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default NoteItem;
