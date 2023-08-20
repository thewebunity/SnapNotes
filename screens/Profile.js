import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileHome from './Profile/ProfileHome';
import EditProfile from './Profile/EditProfile';
import PageViewer from './Profile/PageViewer';
import Contact from './Profile/Contact';
const Profile = () => {
    const Stack = createNativeStackNavigator();
    return (
        <>
        <Stack.Navigator initialRouteName='ProfileHome' screenOptions={{headerShown:false}}>
            <Stack.Screen name='ProfileHome' component={ProfileHome} />
            <Stack.Screen name='EditProfile' component={EditProfile} />
            <Stack.Screen name='PageViewer' component={PageViewer} />
            <Stack.Screen name='Contact' component={Contact} />
        </Stack.Navigator>
        </>
    );
}



export default Profile;
