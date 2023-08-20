import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import { UserAuth } from '../UserAuthContext';
import auth from '@react-native-firebase/auth';

const EditProfile = () => {
    const { User } = useContext(UserAuth);
    if (!User.photoURL === null) {
        setUrl('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jXkHPNXoQzRZDrMK4ts8Oxi7MfSHS7DgQw&usqp=CAU')
    }
    if (!User.displayName === null) {
        setName('')
    }
    const [Url, setUrl] = useState(User.photoURL)
    const [Name, setName] = useState(User.displayName)
    const [Email, setEmail] = useState(User.email)

    const handlePicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setUrl(image.path)
        });
    }



    const updateProfile = async () => {
        const filename = new Date().getTime();
        const reference = storage().ref(`${filename}`);
        await reference.putFile(Url);
        const update = {
            displayName: Name,
            photoURL: Url,
        };
        auth().currentUser.updateProfile(update).then(() => {
            Alert.alert("Profile Updated Successfully")
        }).catch((error) => {
            Alert.alert(error)
        })
    }
    return (
        <View className="h-screen mx-8 ">
            <View className='mt-10 flex justify-start items-center'>
                <Image
                    className='h-24 w-24 rounded-full'
                    resizeMode='contain'
                    source={{ uri: Url }}
                />
                <TouchableOpacity onPress={handlePicker} className='flex-row  '>
                    <Text className='text-center mt-5'>Select Image</Text>
                </TouchableOpacity>

            </View>
            <View className='mt-8'>
                <TextInput
                    placeholder='Enter Your Name'
                    value={Name}
                    onChangeText={setName}
                    className='border-primary border my-3 px-3 py-2 rounded-md'
                />
                <TextInput
                    placeholder='Email id'
                    value={Email}
                    onChange={setEmail}
                    className='border-primary border my-3 px-3 py-2 rounded-md disabled'
                />

            </View>
            <TouchableOpacity
                className='py-3 px-2 bg-primary rounded-md mt-5'
                onPress={updateProfile}
            >
                <Text className="text-center text-white font font-medium " >Update Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({})

export default EditProfile;
