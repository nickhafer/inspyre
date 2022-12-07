import { View, SafeAreaView, Image, Text, Keyboard, StyleSheet, Pressable, TextInput, FlatList } from 'react-native';
import React, { useState , useEffect } from 'react';
import { useFonts } from 'expo-font';


export default function HomeProfileScreen ({ navigation, route}) {
    const { user } = route.params;
    const [tab, setTab] = useState('givingAway')
    const [tabLike, setTabLike] = useState('notLiked')

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

    const renderItem = ({ item }) => (
        <SafeAreaView style={styles.item}>
            {/* <Pressable onPress={() => navigation.navigate('IndividualItem', { item: item })}> */}
            <Image
                source={{ uri: item.image, }}
                style={styles.objectImage}
            />
            {/* </Pressable> */}
            <View style={styles.bottomContainer}>
                <View style={styles.textHalf}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.locationLine}>
                        <Image
                            style={styles.pin}
                            source={require('./assets/Icons/pin.png')}
                        />
                        <Text style={styles.location}>{item.location}  </Text>  
                    </View>
                    <Text style={styles.distance}>{item.distance}</Text>
                </View>
                <View style={styles.iconsHalf}>
                    {/* Like Action */}
                    <View style={styles.iconContainer}>
                        {/* setTab("liked") */}
                        <Pressable onPress={()=>{tabLike === "liked" ? setTabLike("notLiked") : setTabLike("liked")}}>
                            {
                                tabLike === "liked" ?
                                    <Image
                                        source={require('./assets/Icons/like-red.png')}
                                        style={styles.like} 
                                    />
                                :
                                    <Image
                                        source={require('./assets/Icons/like-gray.png')}
                                        style={styles.like} 
                                    />
                            }
                        </Pressable>
                    </View>
                    {/* DM Item Owner */}
                    <Pressable 
                        onPress={() => navigation.navigate('HomeDMScreen', { item: item })}>
                        <View style={styles.iconContainer}>
                            <Image
                                source={require('./assets/Icons/chat-gray.png')}
                                style={styles.chat} 
                            />
                        </View>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );

    return (
        <SafeAreaView>
            <Pressable style={styles.back} onPress={() => navigation.goBack()}>
                <Image style={styles.back} source={require('./assets/Icons/back-gray.png')} />
            </Pressable>
            <View style={styles.profileHeader}>
                <Image style={styles.profilePic} 
                    source={{
                        uri: user.profilePic,
                    }} />
                <View style={styles.profileInfo}>
                    <Text style={styles.username}>{user.username}</Text>
                    <Text style={styles.location}>{user.location}</Text>
                    <View style={styles.exchangeInfo}> 
                        <Text style={styles.number}>{user.donated} </Text>
                        <Text style={styles.word}>Donated   </Text>
                        <Text style={styles.number}>{user.listings} </Text>
                        <Text style={styles.word}>Listings</Text>
                    </View>
                    <Image 
                        style={styles.rating}
                        source={user.rating} 
                    />
                </View>
                </View>
                <View style={styles.bioSection}>
                    <Text style={styles.bio}>{user.bio}</Text>
                </View>
            <View style={styles.tabs}>
            <Pressable
                    onPress={()=>setTab("givingAway")}
                >
                    {tab === "givingAway" ?
                        <Image 
                            style={styles.givingAway}
                            source={require('./assets/Icons/giving-away-green.png')}
                        />
                    :
                        <Image 
                            style={styles.givingAway}
                            source={require('./assets/Icons/giving-away-gray.png')}
                        />
                    }
                </Pressable>
                <Pressable
                    onPress={()=>setTab("theirArt")}
                >
                    {tab === "theirArt" ?
                        <Image 
                            style={styles.theirArt}
                            source={require('./assets/Icons/their-art-green.png')}
                        />
                    :
                        <Image 
                            style={styles.theirArt}
                            source={require('./assets/Icons/their-art-gray.png')}
                        />
                    }
                </Pressable>
            </View>
            <View >
                {tab === "givingAway" ?
                    <FlatList 
                        data={user.givingAway}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                :
                    <FlatList 
                        data={user.art}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                }
            </View>
        </SafeAreaView>
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
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    editProfile: {
        width: 150,
        resizeMode: 'contain',
    },
    tabs: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    item: {
        width: '100%',
        height: '35%',
        // flex: 1,
    },
    bottomContainer: {
        width: '100%',
        height: '60%',
        flex: 1
    },
    screenText: {
        fontSize: 32,
    },
    profilePic: {
        width: 150,
        height: 150,
        borderRadius: 75,
    }, 
    profileHeader: {
        flexDirection: 'row', 
        justifyContent: 'space-between',   
        marginHorizontal: 8,
    },
    profileInfo: {
        width: '50%',
        height: 150,
        marginRight: 16,
        justifyContent: 'space-between',
    },
    rating: {
        width: 200,
        resizeMode: 'contain',
    },
    username: {
        fontFamily: 'InterBlack',
        fontSize: 36,
    },
    userLocation: { 
        fontFamily: 'InterSemiBold',
        fontSize: 18,
    },
    exchangeInfo: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
    },
    number: {
        fontFamily: 'InterSemiBold',
        fontSize: 24,
    },
    word: {
        fontFamily: 'InterLight',
        fontSize: 16,
    },
    bioSection: {
        width: '90%',
        margin: 8,
    },
    bio: {
        fontFamily: 'InterRegular',
        fontSize: 16,
    },
    editProfileBlock: {
        alignSelf: 'center',
        margin: 8,
    },
    givingAway: {
        width: 124,
        resizeMode: 'contain',
        marginHorizontal: 8,
    },
    theirArt: {
        width: 124,
        resizeMode: 'contain',
        marginHorizontal: 8,
    },
    objectImage: {
        width: '100%',
        aspectRatio: 1,
    },
    title: {
        fontSize: 25,
        fontFamily: 'InterBlack',
        textAlign: 'left',
    },
    location: {
        fontSize: 20,
        fontFamily: 'InterSemiBold',
    },
    distance: {
        fontFamily: 'InterRegular',
        fontSize: 16,
    },
    locationLine: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pin: {
        height: 20,
        width: 20,
        marginRight: 4,
    },
    textHalf: {
        margin: '4%',
    },
    back: {
        width: 48,
        height: 48,
        paddingHorizontal: 8,
    },
    listContainer: {
        flex: 1,
    },
    chat: {
        width: 64,
        height: 64,
    },
    like: {
        width: 64,
        height: 64,
    },
    iconsHalf: {
        margin: '2%',
        width: '32%',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    iconContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textHalf: {
        margin: '2%',
        width: '60%',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 8,
    },
});