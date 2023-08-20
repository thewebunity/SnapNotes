import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Share, Linking } from 'react-native';
import { StarIcon, ShareIcon, ChevronRightIcon, ChatBubbleLeftIcon, ArrowLeftOnRectangleIcon, ArrowTopRightOnSquareIcon, DocumentCheckIcon } from "react-native-heroicons/outline";
import { UserAuth } from '../UserAuthContext';

const ProfileHome = ({ navigation }) => {
    const { SignOutUser, User } = useContext(UserAuth);
    const [Url, setUrl] = useState(User.photoURL)
    const openUrl = () => {
        const supportedURL = 'https://play.google.com/store/apps/details?id=com.SnapNotes&hl=en_IN&gl=US';
        Linking.openURL(supportedURL)
    }

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'https://play.google.com/store/apps/details?id=com.SnapNotes&hl=en_IN&gl=US',
            });
        } catch (error) {
            Alert.alert(error.message);
        }
    };


    return (
        <ScrollView showsVerticalScrollIndicator={false} className='h-screen bg-white'>
            <View className='mx-4  flex-col  items-center my-3  justify-around'>
                <View className="shadow-md  w-full rounded-md py-2 flex-row justify-start  items-center space-x-8 ">
                    <Image
                        className='w-20 h-20 rounded'
                        resizeMode='contain'
                        source={{ uri: Url }}
                    />
                    <View className='flex-col py-5'>
                        <Text className='text-primary text-2xl  font-bold' >{User ? User.displayName : ""}</Text>
                        <Text className='text-black text-xs mb-3 font-semibold' >{User ? User.email : ""}</Text>
                    </View>
                </View>
                <TouchableOpacity className='mt-1 flex-row justify-center px-4 py-3 rounded-md items-center w-full bg-primary' onPress={() => navigation.navigate('EditProfile')}>
                    <Text className='text-sm font-bold text-center text-white'>Edit Profile</Text>
                </TouchableOpacity>


                <View className='flex-col w-full mt-3'>

                    <TouchableOpacity className=' my-1 flex-row justify-between space-x-6 px-4 py-4 rounded-md items-center w-full' onPress={onShare}  >
                        <View className='flex-row  justify-start space-x-6 '>
                            <ShareIcon color="#7540EE" size={22} />
                            <Text className='text-sm font-bold'>Share this app</Text>
                        </View>
                        <ChevronRightIcon color='#b1b1b1' size={20} />
                    </TouchableOpacity>


                    <TouchableOpacity className=' my-1 flex-row justify-between space-x-6 px-4 py-4 rounded-md items-center w-full' onPress={openUrl}  >
                        <View className='flex-row  justify-start space-x-6 '>
                            <StarIcon color="#7540EE" size={22} />
                            <Text className='text-sm font-bold'>Rate this app</Text>
                        </View>
                        <ChevronRightIcon color='#b1b1b1' size={20} />
                    </TouchableOpacity>

                    <TouchableOpacity className=' my-1 flex-row  justify-between space-x-6 px-4 py-4 rounded-md items-center w-full' onPress={() => navigation.navigate('Contact')}>
                        <View className='flex-row  justify-start space-x-6 '>
                            <ChatBubbleLeftIcon color="#7540EE" size={22} />
                            <Text className='text-sm font-bold'>Contact Us</Text>
                        </View>
                        <ChevronRightIcon color='#b1b1b1' size={20} />
                    </TouchableOpacity>


                    <TouchableOpacity className=' my-1 flex-row justify-between space-x-6 px-4 py-4 rounded-md items-center w-full' onPress={() => navigation.navigate('PageViewer', { link: 'https://www.termsandconditionsgenerator.com/live.php?token=IcTvKsKMgtqMTFOS5dyVpXirlFP6MFaz' })}>
                        <View className='flex-row  justify-start space-x-6 '>
                            <DocumentCheckIcon color="#7540EE" size={22} />
                            <Text className='text-sm font-bold'>Terms & Condition</Text>
                        </View>
                        <ChevronRightIcon color='#b1b1b1' size={20} />
                    </TouchableOpacity>


                    <TouchableOpacity className=' my-1 flex-row justify-between space-x-6 px-4 py-4 rounded-md items-center w-full' onPress={() => navigation.navigate('PageViewer', { link: 'https://www.privacypolicygenerator.info/live.php?token=5UmrfZw0yPUMlR4nW5bh3zkiUUjgg6LU' })}>
                        <View className='flex-row  justify-start space-x-6 '>
                            <ArrowTopRightOnSquareIcon color="#7540EE" size={22} />
                            <Text className='text-sm font-bold'>Privacy & Policy</Text>
                        </View>
                        <ChevronRightIcon color='#b1b1b1' size={20} />
                    </TouchableOpacity>
                </View>

                <View className='mt-8'>
                    <TouchableOpacity className=' my-1 flex-row justify-start bg-primary py-3 px-8 rounded-full  space-x-3' onPress={() => SignOutUser()}>
                        <ArrowLeftOnRectangleIcon color="#fff" size={22} />
                        <Text className='text-sm font-bold text-white'>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}


export default ProfileHome;
