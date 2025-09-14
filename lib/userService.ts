import { db } from '@/configs/firebaseConfig';
import { 
  collection, 
  query, 
  where, 
  getDocs, 
  addDoc, 
  doc, 
  getDoc,
  updateDoc,
  setDoc 
} from 'firebase/firestore';

export interface User {
  id?: string;
  name: string;
  email: string;
  credits: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const USERS_COLLECTION = 'users';

export class UserService {
  // Find user by email
  static async findUserByEmail(email: string): Promise<User | null> {
    try {
      const usersRef = collection(db, USERS_COLLECTION);
      const q = query(usersRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        return null;
      }
      
      const userDoc = querySnapshot.docs[0];
      return {
        id: userDoc.id,
        ...userDoc.data()
      } as User;
    } catch (error) {
      console.error('Error finding user by email:', error);
      throw error;
    }
  }

  // Create a new user
  static async createUser(userData: Omit<User, 'id'>): Promise<User> {
    try {
      const usersRef = collection(db, USERS_COLLECTION);
      const docRef = await addDoc(usersRef, {
        ...userData,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      
      return {
        id: docRef.id,
        ...userData
      };
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  // Update user
  static async updateUser(userId: string, updateData: Partial<User>): Promise<void> {
    try {
      const userRef = doc(db, USERS_COLLECTION, userId);
      await updateDoc(userRef, {
        ...updateData,
        updatedAt: new Date()
      });
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }

  // Get user by ID
  static async getUserById(userId: string): Promise<User | null> {
    try {
      const userRef = doc(db, USERS_COLLECTION, userId);
      const userSnap = await getDoc(userRef);
      
      if (!userSnap.exists()) {
        return null;
      }
      
      return {
        id: userSnap.id,
        ...userSnap.data()
      } as User;
    } catch (error) {
      console.error('Error getting user by ID:', error);
      throw error;
    }
  }

  // Create or update user (upsert)
  static async upsertUser(userData: Omit<User, 'id'>): Promise<User> {
    try {
      const existingUser = await this.findUserByEmail(userData.email);
      
      if (existingUser) {
        return existingUser;
      }
      
      return await this.createUser(userData);
    } catch (error) {
      console.error('Error upserting user:', error);
      throw error;
    }
  }
}

