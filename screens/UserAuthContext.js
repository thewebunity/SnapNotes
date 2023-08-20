import React, { useEffect ,useState } from 'react'
import auth from '@react-native-firebase/auth';
const UserAuth = React.createContext();


const UserAuthContextProvider = ({ children }) => {
    const [User, setUser] = useState({})
    function Signin(Email, Password) {
        return auth().signInWithEmailAndPassword(Email, Password)
    }
    function Signup(Email, Password) {
        return auth().screateUserWithEmailAndPassword(Email, Password)
    }
    function Forgot(Email) {
        return auth().sendPasswordResetEmail(Email)
    }

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            setUser(user)
        });
    }, [])

    function SignOutUser (){
        return auth().signOut()
    }


    return (
        <UserAuth.Provider value={{ Signin, Signup, Forgot,User,SignOutUser }}>
            {children}
        </UserAuth.Provider>
    )
}

export { UserAuth, UserAuthContextProvider }