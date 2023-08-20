import React, { useState, useContext } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, TextInput, Alert, Image } from 'react-native';
import { UserAuth } from '../UserAuthContext';


const Forgot = ({ navigation }) => {
    const [Email, setEmail] = useState('')
    const { Forgot } = useContext(UserAuth);

    const forgotHandler = () => {
        Forgot(Email)
            .then(() => {
                Alert.alert('Reset Link has been sent');
            })
            .catch(error => {
                Alert.alert(error.message.slice(0, 22));
            });
    }

    return (
        <SafeAreaView>
            <View className='bg-white'>
                <View className='h-screen mx-8 flex-col justify-evenly'>
                    <View>
                        <Text className="text-center  text-3xl  font-bold ">Don't Worry !</Text>
                        <Text className="text-center mt-2 text-lg ">Forgot Your Password Easily</Text>
                    </View>
                    <View>
                        <Image
                            className="w-80 h-80 "
                            source={require('../../assets/images/read.jpg')}
                        />
                    </View>
                    <View className=''>
                        <TextInput
                            className="border-primary border my-2 py-3 px-4 rounded-md"
                            onChangeText={setEmail}
                            value={Email}
                            placeholder="Enter Your Email"
                        />
                        <TouchableOpacity
                            className='py-4 px-2 bg-primary rounded-md mt-3'
                            onPress={forgotHandler}
                        >
                            <Text className="text-center text-white font font-medium " >Send Reset Link </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Forgot;
