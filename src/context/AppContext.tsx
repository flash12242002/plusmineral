import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  auth, 
  db, 
  onAuthStateChanged, 
  signInAnonymously, 
  signOut, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  User
} from '../lib/firebase';

interface AppContextType {
  user: User | null;
  loading: boolean;
  favorites: string[];
  favoritesLoading: boolean;
  toggleFavorite: (crystalId: string) => Promise<boolean>;
  isFavorite: (crystalId: string) => boolean;
  logout: () => Promise<void>;
  loginAnonymously: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [favoritesLoading, setFavoritesLoading] = useState(false);

  // Listen for Auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      
      if (!currentUser) {
        setFavorites([]);
      }
    });

    return () => unsubscribe();
  }, []);

  // Listen for user favorites in real-time
  useEffect(() => {
    if (!user) {
      setFavorites([]);
      setFavoritesLoading(false);
      return;
    }

    setFavoritesLoading(true);
    
    // Path: /favorites/ (document ID: userId_crystalId)
    // Querying all docs where userId == user.uid
    const favoritesCollection = collection(db, 'favorites');
    
    // We can filter using client-side or onSnapshot
    // To make sure firestore security rules are clean and simple, we can do query or dynamic sub-collection
    // Let's use a dynamic snapshot of favorites matching the user's ID
    // Note: since it's client-side, we can query where('userId', '==', user.uid)
    // Or we can store favorites in a flat list or inside a user's private doc: /users/{userId}/favorites/{crystalId}
    // Let's do /users/{userId}/favorites/{crystalId} as it's cleaner, more private, and does not require complex index setup!
    const userFavoritesCollection = collection(db, 'users', user.uid, 'favorites');
    
    const unsubscribe = onSnapshot(userFavoritesCollection, (snapshot) => {
      const favIds = snapshot.docs.map(doc => doc.id);
      setFavorites(favIds);
      setFavoritesLoading(false);
    }, (error) => {
      console.error('Error fetching favorites:', error);
      setFavoritesLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  // Toggle favorite status
  const toggleFavorite = async (crystalId: string): Promise<boolean> => {
    if (!user) {
      throw new Error('User not logged in');
    }

    try {
      const isFav = favorites.includes(crystalId);
      const favDocRef = doc(db, 'users', user.uid, 'favorites', crystalId);

      if (isFav) {
        await deleteDoc(favDocRef);
        return false; // Removed
      } else {
        await setDoc(favDocRef, {
          crystalId,
          createdAt: new Date().toISOString()
        });
        return true; // Added
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
      throw error;
    }
  };

  const isFavorite = (crystalId: string): boolean => {
    return favorites.includes(crystalId);
  };

  const logout = async () => {
    await signOut(auth);
  };

  const loginAnonymously = async () => {
    await signInAnonymously(auth);
  };

  return (
    <AppContext.Provider value={{
      user,
      loading,
      favorites,
      favoritesLoading,
      toggleFavorite,
      isFavorite,
      logout,
      loginAnonymously
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
