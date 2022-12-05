import { View, SafeAreaView, Image, ImageBackground, Text, Keyboard, StyleSheet, Pressable, TextInput } from 'react-native';
import React, { useState , useEffect } from 'react';
import { useFonts } from 'expo-font';
import { back } from 'react-native/Libraries/Animated/Easing';


export default function IndividualCommunityScreen ({ navigation, route}) {
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

    const [keyboardStatus, setKeyboardStatus] = useState(undefined);

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus("Keyboard Shown");
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus("Keyboard Hidden");
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.wholeScreen}>
            <SafeAreaView style={styles.body}>
                <View style={styles.topBar}>
                    
                    <View>
                    <ImageBackground style={styles.backgroundImage} 
                        source={{
                            uri: message.imageUrl,
                        }}>
                             <Pressable style={styles.back} onPress={() => navigation.goBack()}>
                                <Image style={styles.back} source={require('./assets/Icons/back-gray.png')} />
                             </Pressable>
                    </ImageBackground>
                    </View>
                </View>
                <View style={styles.textSection}>
                    <View style={styles.mainInfo}>
                        <View style={styles.leftText}>
                            <Text style={styles.name}>{message.name}</Text>
                            <Text style={styles.location}>{message.location}</Text>
                         </View>
                         <View style={styles.rightText}>
                            <Text style={styles.number}>{message.number}</Text>
                            <Text style={styles.members}>Members</Text>
                         </View>
                    </View>
                    <View style={styles.bottomSection}>
                        <Text style={styles.description}> {message.description} </Text>
                        <Image 
                            source={require('./assets/Icons/request-to-join.png')}
                            style={styles.join} 
                        />
                        {/* INSERT FUNCTIONALITY TO MAKE PRESSABLE AND JOIN COMMUNITY */}
                    </View>
                </View>
                
            </SafeAreaView>
        </View>
    );
}


const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   display: 'flex',
    // },
    container: {
        flex: 1,
        padding: 36
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
      aspectRatio: 1,
    },
    body: {
        backgroundColor: 'white',
        height: '100%',
        justifyContent: 'space-between',
    },
    textSection: {
        height: '70%',
        justifyContent: 'flex-start',
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    back: {
        width: 48,
        height: 48,
        margin: 8,
    },
    mainInfo: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    profilePic: {
        height: 300,
        width: 300,
        borderRadius: 32,
    },
    conversationWith: {
        fontFamily: 'InterRegular',
        fontSize: 16,
        margin: 8,
    },
    name: {
        fontFamily: 'InterBlack',
        fontSize: 28,
    },
    location: {
        fontFamily: 'InterMedium',
        fontSize: 20,
    },
    number: {
        fontFamily: 'InterBlack',
        fontSize: 28,
    },
    members: {
        fontFamily: 'InterMedium',
        fontSize: 20,
    },
    leftText: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '64%',
        marginLeft: '4%',
    },
    rightText: {
        width: '28%',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginRight: '4%',
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
        width: '75%',
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
    },
    wholeScreen: {
        backgroundColor: 'white',
    },
    chatBottom: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
    },
    send: {
        width: 48,
        height: 48,

    },
    bottomSection: {
        height: '40%',
        width: '100%',
        justifyContent: 'space-evenly',
    },
    description: {
        fontFamily: 'InterRegular',
        fontSize: 16,
        margin: '4%',
    },
    join: {
        alignSelf: 'center',
        width: 600,
        height: 60,
        resizeMode: 'contain',
    },
  });