import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const NotesHome = ({navigation}) => {
    const [Data, setData] = useState([])
    const [Loaded, setLoaded] = useState(true)
    useEffect(() => {
        const getdata =  () => {
            firestore()
                .collection('Notes/0856eJEfkPAyuhYE6yR3/Branches')
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
    
    const courseCard = ({ item }) => {
        return (
            <View className=' my-5 rounded'>
                <Image
                    className='w-[100%] h-48 rounded-xl'
                    source={{ uri: `${item.Branches_logo}` }}
                />
                <View className='py-5 px-5'>
                    <Text className='text-lg text-center ' style={{fontFamily:'Poppins-Light'}} >{item.Branches_name}</Text>
                    <TouchableOpacity className='bg-primary p-2 rounded-3xl mt-3' onPress={() => navigation.navigate('Semester', `${item.id}`)}>
                        <Text className='text-center text-white text-sm' style={{fontFamily:'Poppins-Light'}}  >
                            View
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    return (
        <View className="flex-1 " showsVerticalScrollIndicator={false}>
            {Loaded ?
                <View>
                    <ActivityIndicator color={"#7540EE"} size={36} />
                </View> : <View className="px-5">
                    <FlatList data={Data} keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false} renderItem={courseCard}></FlatList>
                </View>
            }

        </View>
    );
}


export default NotesHome;
