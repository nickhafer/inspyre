import { View, SafeAreaView, Image, Text, ImageBackground, StyleSheet, Pressable, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';


export default function DMScreen ({ navigation, route}) {
    const { message } = route.params;
    const [text, setText] = useState('');

    const [loaded] = useFonts({
        InterBlack: require('./assets/Fonts/Inter-Black.ttf'),
        InterBold: require('./assets/Fonts/Inter-Bold.ttf'),
        InterMedium: require('./assets/Fonts/Inter-Medium.ttf'),
        InterSemiBold: require('./assets/Fonts/Inter-SemiBold.ttf'),
        InterRegular: require('./assets/Fonts/Inter-Regular.ttf'),
        InterLight: require('./assets/Fonts/Inter-Light.ttf'),
      });
    
      if (!loaded) {
        return null;
      }

    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.messageHeader}>
            <Pressable onPress={() => navigation.goBack()}>
                <AntDesign name="left" size={32} color="black"></AntDesign>
            </Pressable>
            
                <Text style={styles.conversationWith}> Chat with </Text>
                <Image style={styles.profilePic} 
                            source={{
                                uri: message.imageUrl,
                            }} />
                <Text style={styles.name}>{message.name}</Text>
            </View>
            <View style={styles.messageDescriptionView}>
                <Text style={styles.messageDescription}>{message.message}</Text>
            </View>
            <View style={styles.inputMessageView}>
                <Text style={styles.messageDescription}>
                    {text.split('').map((word) => word).join('')}
                </Text>
            </View>
            <View style={styles.textInputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="iMessage"
                    onChangeText={newText => setText(newText)}
                    defaultValue={text}
                />
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
    backgroundImage: {
      width: '100%',
      height: '100%'
    },
    body: {

    },
    messageHeader: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePic: {
        height: 64,
        width: 64,
        borderRadius: 32,
    },
    conversationWith: {
        fontFamily: 'InterRegular',
        fontSize: 16,
        margin: 8,
    },
    name: {
        fontFamily: 'InterBlack',
        fontSize: 20,
        margin: 8
    },
    messageTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        //justifyContent: 'center',
    },
    messageDescription: {
        fontSize: 14,
        marginTop: 16,
        marginHorizontal: 4,
        //backgroundColor: 'white',
    },
    messageDescriptionView: {
        backgroundColor: 'lightgreen',
        borderRadius: 8,
        alignItems: 'center',
        margin: 16,
        paddingBottom: 10,
        width: '50%',
    },
    textInput: {
        fontSize: 14,
        marginTop: 16,
    },
    textInputView: {
        backgroundColor: 'lightgrey',
        alignSelf: 'flex-end',
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        margin: 16,
        paddingBottom: 10,
        width: '80%',
    },
    // inputMessage: {
    //     fontSize: 14,
    //     marginTop: 16,
    // },
    inputMessageView: {
        backgroundColor: 'lightblue',
        alignSelf: 'flex-end',
        borderRadius: 8,
        alignItems: 'center',
        margin: 16,
        paddingBottom: 10,
        width: '50%',
    },

  });