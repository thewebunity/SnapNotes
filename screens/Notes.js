import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotesHome from './Notes/NotesHome';
import Semester from './Notes/Semester';
import PDFview from './Notes/PDFview';
import Subject from './Notes/Subject';
import Unit from './Notes/Unit';


const Notes = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='NotesHome' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='NotesHome' component={NotesHome} />
            <Stack.Screen name='Semester' component={Semester} />
            <Stack.Screen name='Subject' component={Subject} />
            <Stack.Screen name='Unit' component={Unit} />
            <Stack.Screen name='PDFview' component={PDFview} />
        </Stack.Navigator>
    );
}



export default Notes;

