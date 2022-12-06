import { Text, View, StyleSheet, SafeAreaView, FlatList, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useState } from 'react';


export default function ProfileScreen() {
    const navigation = useNavigation();
    const [tab, setTab] = useState('givingAway');
    const [tabLike, setTabLike] = useState('liked');

    const [loaded] = useFonts({
        InterBlack: require('./assets/Fonts/Inter-Black.ttf'),
        InterExtraBold: require('./assets/Fonts/Inter-ExtraBold.ttf'),
        InterBold: require('./assets/Fonts/Inter-Bold.ttf'),
        InterMedium: require('./assets/Fonts/Inter-Medium.ttf'),
        InterSemiBold: require('./assets/Fonts/Inter-SemiBold.ttf'),
        InterRegular: require('./assets/Fonts/Inter-Regular.ttf'),
        InterLight: require('./assets/Fonts/Inter-Light.ttf'),
      });    

    const GIVING_AWAY_DATA = [
        {
            id: '1',
            title: 'Broken Chair',
            image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
            location: 'Palo Alto, CA',
            distance: '0 miles',
        },
        {
            id: '2',
            title: 'Used Towel',
            image: 'https://www.myfrugalhome.com/wp-content/uploads/2015/07/redyedtowels590.jpg',
            location: 'Palo Alto, CA',
            distance: '0 miles',
        },
        {
            id: '3',
            title: 'Water bottle',
            image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
            location: 'Palo Alto, CA',
            distance: '0 miles',
        },
    ]

    const YOUR_ART_DATA = [
        {
            id: '2',
            title: 'Used Towel',
            image: 'https://www.myfrugalhome.com/wp-content/uploads/2015/07/redyedtowels590.jpg',
            location: 'Palo Alto, CA',
            distance: '0 miles',
        },
        {
            id: '1',
            title: 'Broken Chair',
            image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
            location: 'Palo Alto, CA',
            distance: '0 miles',
        },
        {
            id: '3',
            title: 'Water bottle',
            image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
            location: 'Palo Alto, CA',
            distance: '0 miles',
        },
    ]

    const LIKED_ITEMS_DATA = [
        {
            id: '3',
            title: 'Water bottle',
            image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
            location: 'Palo Alto, CA',
            distance: '1.2 miles',
            username: 'Max',
            profilePic: 'https://static.wixstatic.com/media/557bf52ab26368a60e43a3f1bc2a05f1.jpg/v1/fill/w_640,h_558,fp_0.56_0.15,q_80,usm_0.66_1.00_0.01,enc_auto/557bf52ab26368a60e43a3f1bc2a05f1.jpg',

        },
        {
            id: '2',
            title: 'Used Towel',
            image: 'https://www.myfrugalhome.com/wp-content/uploads/2015/07/redyedtowels590.jpg',
            location: 'Palo Alto, CA',
            distance: '1.2 miles',
            username: 'placeholder1',
            profilePic: 'https://static.wixstatic.com/media/557bf52ab26368a60e43a3f1bc2a05f1.jpg/v1/fill/w_640,h_558,fp_0.56_0.15,q_80,usm_0.66_1.00_0.01,enc_auto/557bf52ab26368a60e43a3f1bc2a05f1.jpg',

        },
        {
            id: '1',
            title: 'Broken Chair',
            image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
            location: 'Palo Alto, CA',
            distance: '1.2 miles',
            username: 'placeholder2',
            profilePic: 'https://static.wixstatic.com/media/557bf52ab26368a60e43a3f1bc2a05f1.jpg/v1/fill/w_640,h_558,fp_0.56_0.15,q_80,usm_0.66_1.00_0.01,enc_auto/557bf52ab26368a60e43a3f1bc2a05f1.jpg',

        },
    ]

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image
                source={{ uri: item.image, }}
                style={styles.objectImage}
            />
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

    const renderLiked = ({ item }) => (
        <View style={styles.item}>
            <View style={styles.topBar}>
                <Pressable onPress={() => navigation.navigate('HomeProfileScreen', { user: item })}>
                    {/* Profile Pic */}
                    <Image 
                        source={{
                            uri: item.profilePic,
                        }}
                        style={styles.miniProf}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('HomeProfileScreen', { user: item })}>
                    {/* Username & rating */}
                    <View style={styles.nameRating}>
                        <Text style={styles.miniUsername}> {item.username} </Text>
                        <Image 
                            source={require('./assets/Images/rating-green.png')}
                            style={styles.miniRating}
                        />
                    </View>
                </Pressable>
            </View>
            {/* Item Image */}
            <Pressable onPress={() => navigation.navigate('IndividualItem', { item: item })}>
                <Image
                    source={{ uri: item.image, }}
                    style={styles.objectImage}
                />
            </Pressable>
            
            <View style={styles.bottomContainer}>
                <View style={styles.textHalf}>
                    <Pressable onPress={() => navigation.navigate('IndividualItem', { item: item })}>
                        <Text style={styles.title}>{item.title}</Text>
                        <View style={styles.locationLine}>
                            <Image
                                style={styles.pin}
                                source={require('./assets/Icons/pin.png')}
                            />
                            <Text style={styles.location}>{item.location}  </Text>  
                        </View>
                        <Text style={styles.distance}>{item.distance}</Text>
                    </Pressable>
                    
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
        </View>
    );

    // Determine which flatlist to show:
    // givingAway, yourArt, likedItems
    let flatlist;
    if (tab === "givingAway") {
        flatlist = <FlatList 
                data={GIVING_AWAY_DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
    } else if (tab === "yourArt") {
        flatlist = <FlatList 
                data={YOUR_ART_DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
    } else {
        flatlist = <FlatList 
                data={LIKED_ITEMS_DATA}
                renderItem={renderLiked}
                keyExtractor={item => item.id}
                />
    }

    return (
        <SafeAreaView style={styles.screenContainer}>
            {/* Header */}
            <View style={styles.profileHeader}>
                <Image 
                    style={styles.profilePic}
                    source={require('./assets/Images/luc-profile-pic.jpeg')}
                />
                <View style={styles.profileInfo}> 
                    <Text style={styles.username}>Luc</Text>
                    <Text style={styles.userLocation}>Stanford, CA</Text>
                    <View style={styles.exchangeInfo}>
                        <Text style={styles.number}>22 </Text>
                        <Text style={styles.word}>Donated    </Text>
                        <Text style={styles.number}>4 </Text>
                        <Text style={styles.word}>Listings</Text>
                    </View>
                    <Image 
                        style={styles.rating}
                        source={require('./assets/Images/rating-green.png')} 
                    />
                </View>
            </View>

            {/* Bio */}
            <View style={styles.bioSection}> 
                <Text style={styles.bio}>Stanford undegrad clearing out my dorm room hoping to help out some artists</Text>
                <Pressable style={styles.editProfileBlock}>
                    <Image 
                        style={styles.editProfile}
                        source={require('./assets/Icons/edit-profile-gray.png')}
                    />
                </Pressable>
            </View>

            {/* Tabs */}
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
                    onPress={()=>setTab("likedItems")}
                >
                    {tab === "likedItems" ?
                        <Image 
                            style={styles.likedItems}
                            source={require('./assets/Icons/liked-items-green2.png')}
                        />
                    :
                        <Image 
                            style={styles.likedItems}
                            source={require('./assets/Icons/liked-items-gray2.png')}
                        />
                    }
                </Pressable>
                <Pressable
                    onPress={()=>setTab("yourArt")}
                >
                    {tab === "yourArt" ?
                        <Image 
                            style={styles.yourArt}
                            source={require('./assets/Icons/your-art-green.png')}
                        />
                    :
                        <Image 
                            style={styles.yourArt}
                            source={require('./assets/Icons/your-art-gray.png')}
                        />
                    }
                </Pressable>
            </View>

            {/* Conditional Flatlist */}
            <View style={styles.bottomContainer}>
                {flatlist}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
        marginTop: 16,
    },
    item: {
        width: '100%',
        height: '35%',
    },
    bottomContainer: {
        width: '100%',
        height: '60%',
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
        marginTop: 8,
    },
    profileInfo: {
        width: '50%',
        height: 150,
        marginHorizontal: '2%',
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
        height: '10%',
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
        width: 108,
        resizeMode: 'contain',
        marginHorizontal: 8,
    },
    yourArt: {
        width: 108,
        resizeMode: 'contain',
        marginHorizontal: 8,
    },
    likedItems: {
        width: 108,
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
    miniProf: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    miniUsername: {
        fontFamily: 'InterBlack',
        fontSize: 24,
        marginLeft: 8,
    },
    miniRating: {
        width: 150,
        resizeMode: 'contain',
    },
    nameRating: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
    },
    topBar: {
        flexDirection: 'row',
        margin: 8,
    },
    locationLine: {
        flexDirection: 'row',
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
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});