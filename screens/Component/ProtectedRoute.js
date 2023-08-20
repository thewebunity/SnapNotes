import React, { useContext } from 'react';
import { UserAuth } from '../UserAuthContext';

const ProtectedRoute = ({ navigation, children }) => {
    const { User } = useContext(UserAuth)
    if (!User) {
        return navigation.navigate('Onboarding')
    } else (
        navigation.navigate('Bottom')
    )

    return (
        <>
        </>
    )
}

export default ProtectedRoute;
