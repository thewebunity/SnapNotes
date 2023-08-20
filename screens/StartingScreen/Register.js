import React, { useState, useContext } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, TextInput, Alert } from 'react-native';
import { UserAuth } from '../UserAuthContext';


const Register = ({ navigation }) => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState("")
    const { Singup } = useContext(UserAuth)

    const Signin = () => {
        Singup(Email, Password)
            .then(() => {
                Alert.alert('User Created and Signed in');
            })
            .catch(error => {
                Alert.alert(error.message.slice(0, 22));
            });
    }
    return (
        <SafeAreaView>
            <View className='h-screen mx-8 flex-col justify-around '>
                <View>
                    <Text className="text-center  text-3xl  font-bold">Hello Buddy !</Text>
                    <Text className="text-center mt-2 text-xl ">Welcome you to SnapNotes</Text>
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
                        onPress={Signin}
                    >
                        <Text className="text-center text-white font font-medium " >Sign Up </Text>
                    </TouchableOpacity>
                    <View className="mt-10">
                        <Text className='text-center '>Already Have an Account ?</Text>
                        <TouchableOpacity
                            className='py-4 px-2 bg-primary rounded-md mt-5'
                            onPress={() => navigation.navigate('Login')}
                        >
                            <Text className="text-center text-white font font-medium " >Login into Your Account </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Register;
