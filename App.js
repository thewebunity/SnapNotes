import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bottom from './screens/Bottom';
import Login from './screens/StartingScreen/Login';
import Register from './screens/StartingScreen/Register';
import Forgot from './screens/StartingScreen/Forgot';
import Onboarding from './screens/StartingScreen/Onboarding';
import {UserAuthContextProvider} from './screens/UserAuthContext'
import ProtectedRoute from './screens/Component/ProtectedRoute';



const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <UserAuthContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='ProtectedRoute' screenOptions={{
          headerStyle: {
            backgroundColor: '#3b82f6',
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 16,
          },
          headerTitleAlign: "center",
          headerTintColor: '#fff',
        }} >
          <Stack.Screen name="Bottom" component={Bottom} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="Forgot" component={Forgot} options={{ headerShown: false }} />
          <Stack.Screen name='Onboarding' component={Onboarding} options={{ headerShown: false }} />
          <Stack.Screen name='ProtectedRoute' component={ProtectedRoute} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserAuthContextProvider>
  );
}


export default App;
