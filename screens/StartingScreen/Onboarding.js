import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/solid';

const Onboarding = ({navigation}) => {
    return (
        <View className="h-screen w-screen flex-col justify-around items-center bg-white ">
            <Text className='text-3xl font-bold'>Welcome to Snapnotes</Text>
            <Image
                className="w-80 h-80 "
                source={require('../../assets/images/reading.png')}
            />
            <TouchableOpacity
                className='py-4 px-2 bg-primary rounded-md mt-3 w-[80%] flex-row justify-center space-x-2 items-center'
                onPress={()=>navigation.navigate('Login')}
                >
                <Text className="text-center text-white font font-medium " >Get Started</Text>
                <ArrowRightIcon color={"#fff"} size={18} />
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({})

export default Onboarding;
