import { getAuth,GoogleAuthProvider,updateProfile,getIdToken, createUserWithEmailAndPassword,signInWithPopup,onAuthStateChanged ,signOut,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Login/firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
    const [error,setError]=useState('');
    const [user,setUser]=useState({ });
    const [token,setToken]=useState('')
    const [isLoading,setIsLoading]=useState(true);
    const [admin ,setAdmin]=useState(false)
    const auth = getAuth();
    const googleProvider=new GoogleAuthProvider();
    const registerUser=(email, password,name,navigate )=>{
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setError( '');
            saver(email,name,'POST')
            const newUser= { email:email, displayName: name };
            updateProfile(auth.currentUser, {
                displayName:name,
              }).then(() => {
              }).catch((error) => {
                setError( error.message);
              })
            setUser(newUser);
            navigate('/')
          })
          .catch((error) => {
            setError( error.message);
         
          })
          .finally(()=>{
            setIsLoading(false)
          }
        )
    }
    const loginUser=(email, password,navigate,location)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination=location?.state?.from || '/'
            navigate.replace(destination);
            setError( '');
          })
          .catch((error) => {
            setError( error.message);
          })
          .finally(()=>{
            setIsLoading(false)
          }
            
          )
    }
   
    const logoutUser=()=>{
      setIsLoading(true)
        signOut(auth).then(() => {
            
          }).catch((error) => {
            
          })
          .finally(()=>{
            setIsLoading(false)
          })

    }
    const  signInWithGoogle=(navigate,location)=>{
        signInWithPopup(auth,googleProvider)
        .then((result)=>{
          const user=result.user;
          saver(user.email,user.displayName,'PUT')
            const destination = location?.state?.from || '/';
            navigate(destination);
        })
        .catch((error) => {
            setError(error.message);
        }).finally(() => setIsLoading(false));

    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
              getIdToken(user)
              .then(idToken=>{
                setToken(idToken);
              })


            } else {
                setUser({})
            }
            setIsLoading(false);

        });
        return () => unsubscribed;
    }, [auth])
    useEffect(()=>{
      fetch(`https://aqueous-scrubland-99452.herokuapp.com/users/${user?.email}`)
      .then(res=>res.json())
      .then(data=>setAdmin(data.admin))
    },[user.email])
    const saver=(email,displayName,method)=>{
      const user={email,displayName}
      fetch(`https://aqueous-scrubland-99452.herokuapp.com/users`,{
        method:method,
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)

      })
     
      .then()
    }


    return {
        loginUser,
        registerUser,
        error,
        logoutUser,
        user,
        admin,
        token,
        isLoading,
        signInWithGoogle

    }
};

export default useFirebase;