import { View, SafeAreaView, Image, Text, Keyboard, StyleSheet, Pressable, TextInput, FlatList } from 'react-native';
import React, { useState , useEffect } from 'react';
import { useFonts } from 'expo-font';


export default function HomeProfileScreen ({ navigation, route}) {
    const { user } = route.params;
    const [tab, setTab] = useState('givingAway')

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
        <View style={styles.item}>
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
            </View>
        </View>
    );

    return (
        <View>
            <Pressable style={styles.back} onPress={() => navigation.goBack()}>
                {/* move this down so it's pressable */}
                <Image style={styles.back} source={require('./assets/Icons/back-gray.png')} />
            </Pressable>
            <Image style={styles.profilePic} 
                source={{
                    uri: user.profilePic,
                }} />
            <Text>{user.username}</Text>
            <Text>{user.location}</Text>
            <Text>{user.donated} items donated</Text>
            <Text>{user.listings} listings</Text>
            <Image 
                style={styles.rating}
                source={require('./assets/Images/rating-green.png')} 
            />
            <Text>{user.bio}</Text>
            <View>
                <Pressable
                    onPress={()=>setTab("givingAway")}
                >
                    <Text>Giving Away</Text>
                    <Image 
                        // Giving Away Pic
                        style={styles.givingAway}
                        // source={require()}
                    />
                </Pressable>
                <Pressable
                    onPress={()=>setTab("yourArt")}
                >
                    <Text>{user.username}'s Art</Text>
                    <Image 
                        // Your Art Pic
                        style={styles.yourArt}
                        // source={require()}
                    />
                </Pressable>
            </View>
            <View>
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