import { useEffect, useState } from 'react';
import initializeFirebase from '../Pages/Login/Firebase/firebase.init';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

// initialize app
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  const [isAdmin, setIsAdmin] = useState(false);

  // get auth
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // sign in using google
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        // save user to database
        saveUser(user.email, user.displayName, 'PUT');
        const destination = location?.state?.from || '/';
        history.push(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  // create a new user with email and password
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setAuthError('');
        // set current user
        const userInfo = { email, displayName: name };
        setUser(userInfo);

        // save user to database
        saveUser(email, name, 'POST');

        // update profile send name to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        history.push('/');
      })
      .catch((error) => setAuthError(error.message))
      .finally(() => setIsLoading(false));
  };

  // login existing user
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('');
      })
      .catch((error) => setAuthError(error.message))
      .finally(() => setIsLoading(false));
  };

  // Log out user
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        console.log('signOut');
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://stark-reef-55996.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  // test admin
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setIsAdmin(data.admin));
  }, [user.email]);

  // observer user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  return {
    user,
    isLoading,
    isAdmin,
    signInWithGoogle,
    registerUser,
    loginUser,
    logOut,
    authError,
  };
};

export default useFirebase;
