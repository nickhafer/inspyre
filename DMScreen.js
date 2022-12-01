import { View, SafeAreaView, Text, ImageBackground, StyleSheet, Pressable, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';


export default function DMScreen ({ navigation, route}) {
    const { message } = route.params;
    const [text, setText] = useState('');

    return (
        <SafeAreaView style={styles.body}>
            <Pressable onPress={() => navigation.goBack()}>
                <AntDesign name="left" size={24} color="black">Messages</AntDesign>
            </Pressable>
            <View style={styles.messageText}>
                <Text style={styles.messageTitle}>{message.name}</Text>
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
                    placeholder="Type here to translate!"
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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
    backgroundImage: {
      width: '100%',
      height: '100%'
    },
    body: {
        margin: 16,
    },
    messageText: {
        marginTop: 10,
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        alignItems: 'center',
    },
    messageTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        //justifyContent: 'center',
    },
    messageDescription: {
        fontSize: 14,
        marginTop: 16,
        //backgroundColor: 'white',
    },
    messageDescriptionView: {
        backgroundColor: 'lightgreen',
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
        paddingBottom: 10,
        width: '50%',
    },
    textInput: {
        fontSize: 14,
        marginTop: 16,
    },
    textInputView: {
        backgroundColor: 'lightgrey',
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        marginTop: 20,
        paddingBottom: 10,
        width: '80%',
    },
    // inputMessage: {
    //     fontSize: 14,
    //     marginTop: 16,
    // },
    inputMessageView: {
        backgroundColor: 'lightblue',
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
        paddingBottom: 10,
        width: '50%',
    },

  });