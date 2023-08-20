import React from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';


const Subject = ({ route, navigation }) => {
    const [Data, setData] = useState([]);
    const [Loaded, setLoaded] = useState(true)
    const { id, id2 } = route.params;
    useEffect(() => {
        const getdata = () => {
            firestore()
                .collection(`Notes/0856eJEfkPAyuhYE6yR3/Branches/${id}/Semester/${id2}/Subjects`)
                .get()
                .then(querySnapshot => {
                    const data = [];
                    querySnapshot.forEach(documentSnapshot => {
                        data.push({
                            ...documentSnapshot.data(),
                            id: documentSnapshot.id,
                        });
                    });
                    setData(data);
                });
            setLoaded(false)
        }
        getdata();
    }, [])

    const courseCard = ({ item, index }) => {
        return (
            <TouchableOpacity className='py-3 my-2 bg-primary rounded' onPress={() => navigation.navigate('Unit', {
                id: id,
                id2: id2,
                id3: item.id
            })}>
                <View className='flex-row justify-center items-center px-4'>
                    <Text className=' font-medium text-sm text-white'  >{item.Subject_name}</Text>
                </View>
            </TouchableOpacity>
        );
    };



    return (
        <View >
            <Text className='text-center text-lg mt-5 text-gray-500 font-semibold'  >
                Select Your Subject
            </Text>
            {Loaded ?
                <View className='flex-row justify-center items-center h-[70vh]'>
                    <ActivityIndicator color={"#7540EE"} size={36} />
                </View> :
                <View className='mt-4 px-4'>
                    {Data[0] == null ? <View>
                        <Text className='text-center mt-[30vh]'  >Sorry, Notes Not Found</Text>
                        <Text className='text-center text-3xl text-primary mt-5' >Coming Soon</Text>
                    </View> :
                        <FlatList data={Data} keyExtractor={(item, index) => item.id} showsVerticalScrollIndicator={false} renderItem={courseCard}></FlatList>
                    }
                </View>
            }
        </View>
    );
}


export default Subject;
