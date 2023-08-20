import React from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';


const Unit = ({ route, navigation }) => {
  const [Data, setData] = useState([]);
  const [Loaded, setLoaded] = useState(false)
  const { id, id2, id3 } = route.params;
  useEffect(() => {
    const getdata = () => {
      firestore()
          .collection(`Notes/0856eJEfkPAyuhYE6yR3/Branches/${id}/Semester/${id2}/Subjects/${id3}/Units`)
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
      <TouchableOpacity className='py-3 my-2 bg-primary rounded'
        onPress={() => navigation.navigate('PDFview', {
          link: item.Notes_link
        })}
      >
        <View className='flex-row items-center px-2 justify-center'>
          <View className=' px-4 flex-col items-center'>
            <Text className='text-bold text-sm bg-white py-2 px-4 rounded-full'>{index + 1}</Text>
            <Text className='text-bold text-sm text-white ' >Unit</Text>
          </View>
          <View className=' flex-1'>
            <Text className='font-semibold text-sm text-white' >{item.Notes_name}</Text>
          </View>
        </View>
      </TouchableOpacity>

    );
  };
  return (
    <ScrollView >
      <Text className='text-center text-lg text-gray-500 mt-5 font-semibold' >
        Select Your Unit
      </Text>
      {Loaded ?
        <View className='flex-row justify-center items-center w-[70vh]'>
          <ActivityIndicator color={"#7540EE"} size={36} />
        </View> : <View className='mt-4 px-4'>
          {Data[0] == null ? <View>
            <Text className='text-center mt-[30vh]'  >Sorry, Notes Not Found</Text>
            <Text className='text-center text-3xl text-primary mt-5' >Coming Soon</Text>
          </View> :
            <FlatList data={Data} keyExtractor={(item, index) => item.id} showsVerticalScrollIndicator={false} renderItem={courseCard}></FlatList>
          }
        </View>
      }
    </ScrollView>
  );
}



export default Unit;
