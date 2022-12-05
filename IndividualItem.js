import { View, SafeAreaView, Image, Text, Keyboard, StyleSheet, Pressable, TextInput, FlatList } from 'react-native';
import React, { useState , useEffect } from 'react';
import { useFonts } from 'expo-font';


export default function IndividualItem ({ navigation, route}) {
    const { item } = route.params;

    return (
        <View>
            <Pressable style={styles.back} onPress={() => navigation.goBack()}>
                {/* move this down so it's pressable */}
                <Image style={styles.back} source={require('./assets/Icons/back-gray.png')} />
            </Pressable>
            <Image style={styles.profilePic} 
                source={{
                    uri: item.profilePic,
                }} />
            <Text>{item.username}</Text>
            <Image 
                style={styles.rating}
                source={require('./assets/Images/rating-green.png')} 
            />
            {/* Image */}
            <Pressable>
                <Image
                    source={{
                        uri: item.image,
                    }}
                    style={styles.objectImage}
                />
            </Pressable>
            <Text>{item.location}</Text>
            <Text>{item.story}</Text>
            <Text>{item.exchangeDetails}</Text>
            <View style={styles.iconsHalf}>
                {/* Like Action */}
                <Pressable 
                    //INSERT LIKE FUNCTIONALITY
                    >
                    <View style={styles.iconContainer}>
                        <Image
                            source={require('./assets/Icons/like-gray.png')}
                            style={styles.like} 
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
                            style={styles.chat} 
                        />
                    </View>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profilePic: {
        width: 150,
        height: 150,
        borderRadius: 75,
    }, 
    objectImage: {
        width: 200,
        height: 200,
    },
});