import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';


const PDFview = ({ route }) => {
    const { link } = route.params;

    if (!link) {
        return (
            <View className='flex-col justify-center items-center'>
                <Text className="font-bold  text-lg mt-[50%]"  >Sorry ! No PDF Found</Text>
                <Text className="  text-primary text-lg "  >Coming Soon</Text>
            </View>
        )
    }

  
    return (
        <View className='bg-white flex-1 '>
        </View>
    );
}


export default PDFview;
