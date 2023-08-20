import React from 'react';
import { View,  Text } from 'react-native';


const Syllabus = ({ navigation }) => {
   
    return (
        <View className="flex-1 justify-center items-center">
            <Text className='text-sm  text-gray-600' >Sorry, No Syllabus  Found</Text>
            <Text className='text-3xl  mt-5 text-primary'  >Coming Soon</Text>
        </View>
    );
}


export default Syllabus;
