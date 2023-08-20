import React, { useState, useContext } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Image, Alert } from 'react-native';
import { UserAuth } from '../UserAuthContext';
import firestore from '@react-native-firebase/firestore';

const Contact = () => {
    const { User } = useContext(UserAuth);
    const [Name, setName] = useState(User.displayName)
    const [Email, setEmail] = useState(User.email)
    const [Subject, setSubject] = useState('')
    const [Message, setMessage] = useState('')
    const ContactHandle = () => {
        setName(User.displayName);
        setEmail(User.email);
        firestore()
            .collection('contact')
            .add({
                name:   Name,
                email: Email,
                message: Message,
                subject: Subject
            })
            .then(() => {
                Alert.alert('Thank you for Message.')
            });
    }
    return (
        <View className='h-screen mx-8 flex mt-5'>
            <Image
                className='w-80 h-36 mt-5'
                resizeMode='contain'
                source={require('../../assets/images/contact.png')}
            />
            <TextInput
                placeholder='Enter Your Name'
                value={Name}
                onChangeText={setName}
                className='border-primary border my-3 px-3 py-2 rounded-md'
            />
            <TextInput
                placeholder='Email id'
                value={Email}
                onChangeText={setEmail}
                className='border-primary border my-3 px-3 py-2 rounded-md disabled'
            />
            <TextInput
                placeholder='Subject'
                value={Subject}
                onChangeText={setSubject}
                className='border-primary border my-3 px-3 py-2 rounded-md disabled'
            />
            <TextInput
                placeholder='Write your Message'
                value={Message}
                onChangeText={setMessage}
                className='border-primary border my-3 px-3 py-2 rounded-md'
            />
            <TouchableOpacity
                className='py-3 px-2 bg-primary rounded-md mt-5'
                onPress={ContactHandle}
            >
                <Text className="text-center text-white font font-medium " >Send Message</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Contact;
