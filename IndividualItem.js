import { View, SafeAreaView, Image, Text, Keyboard, StyleSheet, Pressable, TextInput, FlatList } from 'react-native';
import React, { useState , useEffect } from 'react';
import { useFonts } from 'expo-font';


export default function IndividualItem ({ navigation, route}) {
    const { item } = route.params;

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.topRow}>
                <Pressable style={styles.back} onPress={() => navigation.goBack()}>
                    <Image style={styles.back} source={require('./assets/Icons/back-gray.png')} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('HomeProfileScreen', { user: item })}>
                    <Image style={styles.profilePic} 
                        source={{
                            uri: item.profilePic,
                        }} 
                    />
                </Pressable>
                <Text style={styles.username}>{item.username}</Text>
                <Image 
                    style={styles.rating}
                    source={item.rating} 
                />
            </View>
            {/* Image */}
            <Pressable>
                <Image
                    source={{
                        uri: item.image,
                    }}
                    style={styles.objectImage}
                />
            </Pressable>
            <View style={styles.mainSection}>
                <View style={styles.mainText}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.location}>{item.location}</Text>
                </View>
                <View style={styles.iconsHalf}>
                {/* Like Action */}
                <Pressable 
                    //INSERT LIKE FUNCTIONALITY
                    >
                    <View style={styles.iconContainer}>
                        <Image
                            source={require('./assets/Icons/like-gray.png')}
                            style={styles.icons} 
                        />
                    </View>
                </Pressable>
                {/* DM Item Owner */}
                <Pressable 
                    onPress={() => navigation.navigate('HomeDMScreen', { item: item })}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'white'
                        },
                        styles.wrapperCustom
                    ]}>
                    <View style={styles.iconContainer}>
                        <Image
                            source={require('./assets/Icons/chat-gray.png')}
                            style={styles.icons} 
                        />
                    </View>
                </Pressable>
                
            </View>
            
        </View>
        <View style={styles.bodySection}> 
            <Text style={styles.preface}>Story: </Text>
            <Text style={styles.bodyText}>{item.story}</Text>
            <Text style={styles.preface}>Exchange Details: </Text>
            <Text style={styles.bodyText}>{item.exchangeDetails}</Text>
        </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: 'white',
    },  
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
    }, 
    objectImage: {
        width: 200,
        height: 200,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 8,
    },
    username: {
        fontSize: 24,
        margin: 8,
        marginRight: 32,
        fontFamily: 'InterBlack',
    },
    rating: {
        width: 150,
        resizeMode: 'contain',
        alignSelf: 'flex-end',
    },
    back: {
        width: 48,
        height: 48,
    },
    objectImage: {
        width: '100%',
        aspectRatio: 1,
        marginVertical: 8,
    },
    title: {
        fontFamily: 'InterBlack',
        fontSize: 32,
    },
    location: {
        fontFamily: 'InterBold',
        fontSize: 24,
    },
    bodyText: {
        fontFamily: 'InterRegular',
        fontSize: 16,
        marginBottom: 8,
        marginHorizontal: 8,
        alignSelf: 'flex-start',
    },
    icons: {
        height: 64,
        width: 64,
        marginHorizontal: 4,
    },
    mainSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin: 8,
    },
    iconsHalf: {
        flexDirection: 'row',
    },  
    bodySection: {
        flexDirection: 'column',
        marginVertical: 8,
        height: '25%',
    },  
    preface: {
        marginHorizontal: 8,
        fontSize: 20,
        fontFamily: 'InterSemiBold',

    },
    mainText: {
        width: '60%',
    },
});