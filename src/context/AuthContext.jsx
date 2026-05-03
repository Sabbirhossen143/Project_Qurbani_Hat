import { createContext, useContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config"; 


import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth(app);
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const provider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // register
  const registerUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // login
  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // google login
  const googleLogin = () => signInWithPopup(auth, provider);

  // logout
  const logout = () => signOut(auth);

  // update profile
  const updateUser = async (name, photo) => {
  await updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photo,
  });

  // 🔥 instantly update UI
  setUser({ ...auth.currentUser });
};

    

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const value = {
    user,
    registerUser,
    loginUser,
    googleLogin,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};