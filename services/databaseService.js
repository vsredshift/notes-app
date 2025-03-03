import { database } from "./appwrite";

const databaseService = {
  // List Documents
  async listDocuments(db, collection) {
    try {
      const response = await database.listDocuments(db, collection);
      return response.documents || [];
    } catch (error) {
      console.error("Error fetching documents ", error.message);
      return { error: error.message };
    }
  },

  // Create New Document
  async createDocument(db, collection, id = null, data) {
    try {
      return await database.createDocument(
        db,
        collection,
        id || undefined,
        data
      );
    } catch (error) {
      console.error("Error creating document ", error.message);
      return { error: error.message };
    }
  },

  // Update Document
  async updateDocument(db, collection, id, data) {
    try {
      return await database.updateDocument(db, collection, id, data);
    } catch (error) {
      console.error("Error updating document ", error.message);
      return { error: error.message };
    }
  },

  // Delete Document
  async deleteDocument(db, collection, id) {
    try {
      await database.deleteDocument(db, collection, id);
      return { success: true };
    } catch (error) {
      console.error("Error deleting document ", error.message);
      return { error: error.message };
    }
  },
};

export default databaseService;
