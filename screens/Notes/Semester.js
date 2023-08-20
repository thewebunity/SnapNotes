import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';



const Semester = ({ route, navigation }) => {
    const id = route.params;
    const [Data, setData] = useState([]);
    const [Loaded, setLoaded] = useState(true)
    useEffect(() => {
        const getdata =  () => {
            firestore()
                .collection(`Notes/0856eJEfkPAyuhYE6yR3/Branches/${id}/Semester`)
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


  

    return (
        <ScrollView >
            <Text className='text-center text-gray-500 text-lg mt-5 font-semibold'  >
                Select Your Semester
            </Text>
            {Loaded ?
                <View className='flex-row justify-center items-center h-[70vh]'>
                    <ActivityIndicator color={"#7540EE"} size={36} />
                </View> : <View >
                    {Data[0] == null ? <View>
                        <Text className='text-center mt-[30vh]'  >Sorry, Notes Not Found</Text>
                        <Text className='text-center text-3xl text-primary mt-5' >Coming Soon</Text>
                    </View> :
                        <View className='mt-4 flex-row flex-wrap w-[95%] rounded-lg mx-auto ' >
                            {Data.map((value, index) => {
                                return (
                                    <View className='w-1/3 my-3 p-1' key={value.id}>
                                        <TouchableOpacity className='bg-primary  rounded-lg py-5  justify-center flex-col items-center'
                                            onPress={() => navigation.navigate('Subject', {
                                                id: id,
                                                id2: value.id
                                            })}>
                                            <Text className='text-bold text-sm px-6 py-4 rounded-full bg-white'  >{index + 1}</Text>
                                            <Text className='text-bold text-sm text-white mt-2'  >Semester</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}
                        </View>
                    }
                </View>
            }


        </ScrollView>
    );
}



export default Semester;
