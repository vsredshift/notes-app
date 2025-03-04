import { ID } from "react-native-appwrite";
import { account } from "./appwrite";

const authService = {
  // Register a user
  async register(email, password) {
    try {
      return await account.create(ID.unique(), email, password);
    } catch (error) {
      return error.message || "Registration failed. Try again.";
    }
  },

  // Login user
  async login(email, password) {
    try {
      const response = await account.createEmailPasswordSession(email, password);
      return response;
    } catch (error) {
      return error.message || "Login failed. Please check your credentials.";
    }
  },

  // Get logged in user
  async getUser() {
    try {
      return await account.get();
    } catch (error) {
      return null;
    }
  },

  // Logout user
  async logout() {
    try {
      await account.deleteSession("current");
    } catch (error) {
      return error.message || "Logout failed. Please try again.";
    }
  },
};

export default authService;
