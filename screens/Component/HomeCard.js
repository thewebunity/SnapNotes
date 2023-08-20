import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { DocumentIcon, NewspaperIcon, FolderIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';


const HomeCard = () => {
    const navigation = useNavigation();
    return (
        <View className='flex-row flex-wrap  justify-between mx-auto w-[95%]'>
            <TouchableOpacity className='flex-col justify-center items-center my-2  bg-primary py-5 w-[47%] rounded-xl' onPress={() => navigation.navigate('Notes')}>
                <View className='bg-white p-5 rounded-full'>
                    <DocumentIcon color='#7540EE' size={44} />
                </View>
                <Text className='text-white mt-5'  >Notes</Text>
            </TouchableOpacity>
            <TouchableOpacity className='flex-col justify-center items-center my-2  bg-primary py-5 w-[47%] rounded-xl' onPress={() => navigation.navigate('PYQ')} >
                <View className='bg-white p-5 rounded-full' >
                    <NewspaperIcon color='#7540EE' size={44} />
                </View>
                <Text className='text-white mt-5'  >PYQ</Text>
            </TouchableOpacity>
            <TouchableOpacity className='flex-col justify-center items-center my-2  bg-primary py-5 w-[47%] rounded-xl' onPress={() => navigation.navigate('Syllabus')}>
                <View className='bg-white p-5 rounded-full'>
                    <FolderIcon color='#7540EE' size={44} />
                </View>
                <Text className='text-white mt-5'  >Syllabus</Text>
            </TouchableOpacity>
        </View>
    );
}


export default HomeCard;
