import React, { useContext, useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, TextInput, Alert } from 'react-native';
import { UserAuth } from '../UserAuthContext';


const Login = ({ navigation }) => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState("")
    const { Signin } = useContext(UserAuth);

    const signin = () => {
        Signin(Email, Password)
            .then(() => {
                Alert.alert('User Logged in');
            })
            .catch(error => {
                Alert.alert(error.message.slice(0, 22));
            });
    }
return (
        <SafeAreaView>
            <View className='h-screen mx-8 flex-col justify-around '>
                <View>
                    <Text className="text-center  text-3xl  font-bold">Hello Again!</Text>
                    <Text className="text-center mt-2 text-xl ">Welcome Back you've been Missed!</Text>
                </View>
                <View className='my-8'>
                    <TextInput
                        className="border-primary border my-2 py-3 px-4 rounded-md"
                        onChangeText={setEmail}
                        value={Email}
                        placeholder="Enter Your Email"
                    />

                    <TextInput
                        secureTextEntry={true}
                        className="border-primary border my-2 py-3 px-4 rounded-md"
                        onChangeText={setPassword}
                        value={Password}
                        placeholder="Enter Your Password"
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Forgot')}
                    >
                        <Text className='text-right my-2'>Forgot Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className='py-4 px-2 bg-primary rounded-md mt-3'
                        onPress={signin}
                    >
                        <Text className="text-center text-white font font-medium " >Login </Text>
                    </TouchableOpacity>
                    <View className="mt-10">
                        <Text className='text-center '>Don't Have an Account ?</Text>
                        <TouchableOpacity
                            className='py-4 px-2 bg-primary rounded-md mt-5'
                            onPress={() => navigation.navigate('Register')}
                        >
                            <Text className="text-center text-white font font-medium " >Create New Account </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Login;
