import { navigation, View, SafeAreaView, Image, Text, Keyboard, StyleSheet, Pressable, TextInput } from 'react-native';
import React, { useState , useEffect } from 'react';
import { useFonts } from 'expo-font';
import { back } from 'react-native/Libraries/Animated/Easing';
import { render } from 'react-dom';
import SearchChairs from './SearchChairs';
import { withSafeAreaInsets } from 'react-native-safe-area-context';




export default function HomeSearchScreen({navigation}) {
    return (
        <View style = {styles.container}>
            <View style={styles.chatBottom}>
                        <Pressable style={styles.back} onPress={() => navigation.goBack()}>
                            <Image style={styles.back} source={require('./assets/Icons/back-gray.png')}/>
                        </Pressable>
                        <View style={styles.textInputView}>
                            <TextInput
                                style={styles.textInput}
                                // FYI: There are hella spaces after "Search" to make the text hitbox larger 
                                placeholder='Search                                                                          '
                                onSubmitEditing={Keyboard.dismiss}
                                // onSubmitEditing={newText => setText(newText)}
                                // onChangeText={newText => setText(newText)}
                            />
                        </View>
                        <View style = {styles.SearchButton}>
                        <Pressable onPress={() => navigation.navigate('SearchChairs')}>
                        <Image 
                            style={styles.search} source={require('./assets/Icons/send-gray.png')} 
                        />
                        </Pressable>
                        </View>
            </View>
            <View style = {styles.searchDesignView}>
                <Image style = {styles.searchgraphic}
                source = {require('./FigmaIcons/Searching3.png')}>
                    

                </Image>
                <View style = {styles.searchText}>
                    <Text styles={styles.text}>
                    </Text>
                <Text>
                </Text>
                </View>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex:1,

    },
    text: {
        color: 'gray',
        fontSize: 30,

    },
    searchgraphic: {
        width:'100%',
        height: 300,
        resizeMode: 'contain',

    },
    searchDesignView: {
        //backgroundColor: 'blue',
        marginTop: 80,
        alignItems: 'center',
        //paddingLeft: 300,
        width: '100%',
        height: "60%",
        //backgroundColor: 'red',
    },
    searchText: {
        //backgroundColor: 'blue',
        marginTop: 25,
        fontSize:22,
    },
    chatHeader: {
        height: '5%',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white',
    },
    headerText: {
        // fontSize: 40,
        // fontFamily: 'InterBold',
        alignSelf: 'center',
        marginTop: 120,
        backgroundColor: '#f9c2ff',
        height: 100,
        width: 250,
    },
    communityTitle: {
        //backgroundColor: 'blue',
        height: '5%',
        justifyContent: 'center',
        marginTop: 10,

    },
    communityTitleText: {
        fontFamily: 'InterBold',
        fontSize: 30,

    },
    input: {
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 4
    },
    status: {
        padding: 10,
        textAlign: "center"
    },
    backgroundImage: {
      width: '100%',
      height: '100%'
    },
    body: {
        backgroundColor: 'white',
        height: '100%',
        justifyContent: 'space-between',
    },
    chatSection: {
        height: '70%',
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    back: {
        width: 48,
        height: 48,
        marginLeft: 8,
    },
    messageHeader: {
        width: '80%',
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
        margin: 8,
        fontFamily: 'InterRegular',
        //backgroundColor: 'white',
    },
    messageDescriptionView: {
        borderRadius: 8,
        borderWidth: 2,
        borderRadius: 16,
        margin: 8,
        paddingBottom: 10,
        width: '50%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    textInput: {
        fontSize: 14,
        marginTop: 16,
        marginHorizontal: 8,
        
    },
    textInputView: {
        alignSelf: 'flex-start',
        borderRadius: 16,
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'flex-start',
        margin: 16,
        paddingBottom: 10,
        width: '65%',
        //backgroundColor:'red',
    },
    // inputMessage: {
    //     fontSize: 14,
    //     marginTop: 16,
    // },
    inputMessageView: {
        backgroundColor: 'lightgray',
        borderWidth: 2,
        borderRadius: 16,
        alignSelf: 'flex-end',
        borderRadius: 8,
        alignItems: 'center',
        margin: 8,
        paddingBottom: 10,
        width: '50%',
        //backgroundColor:'red',
    },
    wholeScreen: {
        backgroundColor: 'white',
    },
    chatBottom: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginTop:50,
        //backgroundColor:'blue',
    },
    send: {
        width: 40,
        height: 40,

    },
    SearchButton: {
        //backgroundColor:'blue',
        width:40,
        height:40

    },
    search: {
        width:'100%',
        height:"100%",
    },
});