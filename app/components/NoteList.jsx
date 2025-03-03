import { FlatList } from "react-native";
import NoteItem from "./NoteItem";

const NoteList = ({ notes }) => {
  return (
    <FlatList
      data={notes}
      keyExtractor={(note) => note.id}
      renderItem={({ item }) => <NoteItem note={item} />}
    />
  );
};

export default NoteList;
