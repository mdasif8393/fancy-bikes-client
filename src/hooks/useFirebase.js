import { useEffect, useState } from "react";
import initializeFirebase from '../pages/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile} from "firebase/auth";
import axios from "axios";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
      setIsLoading(true);
        //register user
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError('');
          const newUser = {email, displayName: name};
          setUser(newUser);

          const databaseUser ={email, displayName: name};

          axios.post('http://localhost:5000/users', databaseUser)
          .then((result) => {
            
          })

          updateProfile(auth.currentUser, {
            displayName:name
          }).then(() => {

          }).catch((error) => {

          });
          

          history.replace('/');
            // ...
          })
          .catch((error) => {
            setAuthError(error.message);
            // ..
          }) 
          .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        const destination = location?.state?.from || '/';
        history.replace(destination);
        
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;

        const destination = location?.state?.from || '/';
        history.replace(destination);

        setAuthError('');
      })
      .catch((error) => {
        
        setAuthError(error.message);
        
      })
      .finally(() => setIsLoading(false));
    }

    //observe user state
    useEffect(()=> {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          
        } 
        else {
          setUser({})
        }
        setIsLoading(false);
      });
      return () => unsubscribe;
    },[])


    const logout = () => {
      setIsLoading(true);
      signOut(auth)
      .then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        })
        .finally(() => setIsLoading(false));
    }

    useEffect(() => {
      axios.get(`http://localhost:5000/users/${user.email}`)
      .then(result => {
        if (result.data === 1){
          setIsAdmin(true)
        }
        else{
          setIsAdmin(false)
        }
      })
    },[user.email])




    return{
        user,
        isLoading,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
        authError,
        isAdmin,
        
    }
}

export default useFirebase;