import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ArrowRightIcon } from "react-native-heroicons/outline";
import HomeCard from './Component/HomeCard';



const Home = ({ navigation }) => {
   

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            
            <View className='flex-row bg-primary rounded mt-5 mx-4 p-5' >
                <View className='flex-1'>
                    <Text className="text-lg text-white ">
                        Hey, Welcome to
                        SnapNotes
                    </Text>
                    <Text className='text-sm  text-white' >
                        A Snap to your learning and developed for student
                    </Text>
                    <TouchableOpacity className=' flex-row items-center space-x-1 bg-white py-2 px-2 rounded mt-2 w-24 ' onPress={() => navigation.navigate('Notes')}>
                        <Text className='text-xs font-semibold' >
                            Get Started
                        </Text>
                        <ArrowRightIcon color="#000" size={12} />
                    </TouchableOpacity>
                </View>
                <View className>
                    <Image
                        source={require('../assets/images/home1.png')}
                        className='w-32 h-32 object-contain'
                    />
                </View>
            </View>
            <ScrollView className="px-2 mt-4" >
                <HomeCard />
            </ScrollView>
        </ScrollView>
    );
}



export default Home;
