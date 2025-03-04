import databaseService from "./databaseService";
import { ID, Query } from "react-native-appwrite";

// APPWRITE db and collection ids
const db = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const collection = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID;

const noteService = {
  // Fetch notes
  async getNotes(userId) {
    if (!userId) {
      console.log("Error: Missing user_id in getNotes");
      return {
        data: [],
        error: "User ID is missing",
      };
    }

    try {
      const response = await databaseService.listDocuments(db, collection, [
        Query.equal("user_id", userId),
      ]);
      return response;
    } catch (error) {
      console.log("Error getting notes: ", error.message);
      return { data: [], error: error.message };
    }
  },

  // Create Note
  async addNote(user_id, text) {
    if (!text) {
      return { error: "Text cannot be empty" };
    }

    const data = {
      text,
      createdAt: new Date().toISOString(),
      user_id,
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
