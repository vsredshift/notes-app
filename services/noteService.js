import databaseService from "./databaseService";
import { ID } from "react-native-appwrite";

// APPWRITE db and collection ids
const db = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const collection = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID;

const noteService = {
  // Fetch notes
  async getNotes() {
    const response = await databaseService.listDocuments(db, collection);
    if (response.error) {
      return { error: error.message };
    }

    return { data: response };
  },

  // Create Note
  async addNote(text) {
    if (!text) {
      return { error: "Text cannot be empty" };
    }

    const data = {
      text,
      createdAt: new Date().toISOString(),
    };

    const response = await databaseService.createDocument(
      db,
      collection,
      ID.unique(),
      data
    );

    if (response?.error) {
      return { error: response.error };
    }

    return { data: response };
  },

  // Update Note
  async updateNote(id, text) {
    const response = await databaseService.updateDocument(db, collection, id, {
      text,
    });

    if (response?.error) {
      return { error: error.message };
    }

    return { data: response };
  },

  // Delete Note
  async deleteNote(id) {
    const response = await databaseService.deleteDocument(db, collection, id);

    if (response?.error) {
      return { error: error.message };
    }

    return { success: true };
  },
};

export default noteService;
