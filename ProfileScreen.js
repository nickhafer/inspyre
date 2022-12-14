import { Text, View, StyleSheet, SafeAreaView, FlatList, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import PROFILEPICTURE from './assets/Images/luc-profile-pic.jpeg';


export default function ProfileScreen() {
    const profilePicture = PROFILEPICTURE;
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
            title: 'Old Nikes',
            image: 'https://images.unsplash.com/photo-1616119547809-588a65fdc7e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
            location: 'Palo Alto, CA',
            distance: '0 miles',
        },
        {
            id: '2',
            title: 'White Towels',
            image: 'https://images.unsplash.com/photo-1643240911047-64ddd7ebd51a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG93ZWx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
            location: 'Palo Alto, CA',
            distance: '0 miles',
        },
        {
            id: '3',
            title: 'Body spray',
            image: 'https://images.unsplash.com/photo-1621265010303-a793d1017307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
            location: 'Palo Alto, CA',
            distance: '0 miles',
        },
    ]

    const YOUR_ART_DATA = [
        {
            id: '2',
            title: 'Fist With Nails',
            story: 'i donated the nails to make this art!!!',
            exchangeDetails: 'not for sale',
            image: 'https://images.unsplash.com/photo-1615650949849-37db4f2c67db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
            location: 'Palo Alto, CA',
            distance: '0 miles',
            role: require('./assets/Icons/donor-pink.png'),
        },
        {
            id: '1',
            title: 'Simple Flowers',
            story: 'a cool piece of art i made with some flowers i found in the rain',
            exchangeDetails: 'not for sale',
            image: 'https://images.unsplash.com/photo-1570361269465-290e1149df5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1801&q=80',
            location: 'Palo Alto, CA',
            distance: '0 miles',
            role: require('./assets/Icons/artist-purple.png'),
        },
        {
            id: '3',
            title: 'Some Ceramics',
            story: 'i donated some leftover clay we had from my art class',
            exchangeDetails: 'not for sale',
            image: 'https://images.unsplash.com/photo-1603697486934-686e0b3c9f06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2719&q=80',
            location: 'Palo Alto, CA',
            distance: '0 miles',
            role: require('./assets/Icons/donor-pink.png'),
        },
    ]

    const LIKED_ITEMS_DATA = [
        {
            id: '3',
            story: 'Some great converse that have certainly lasted me a while',
            exchangeDetails: 'Anyime around 6-8pm works for me!',
            title: 'Old Converse',
            image: 'https://images.unsplash.com/photo-1597405490028-282bac40f64c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1646&q=80',
            location: 'Palo Alto, CA',
            distance: '1.2 miles',
            username: 'Max',
            profilePic: 'https://static.wixstatic.com/media/557bf52ab26368a60e43a3f1bc2a05f1.jpg/v1/fill/w_640,h_558,fp_0.56_0.15,q_80,usm_0.66_1.00_0.01,enc_auto/557bf52ab26368a60e43a3f1bc2a05f1.jpg',
            rating: require('./assets/Icons/bigstars-yellow-50.png'),
            givingAway: [
                {
                    id: '1',
                    title: 'Broken Chair',
                    image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    
                },
                {
                    id: '2',
                    title: 'Used Towel',
                    image: 'https://www.myfrugalhome.com/wp-content/uploads/2015/07/redyedtowels590.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                },
                {
                    id: '3',
                    title: 'Water bottle',
                    image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                },
            ],
            art: [
                {
                    id: '2',
                    title: 'Upcycled Dog',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ9wbz8m7gcp5917VaLJ5XKn5eJTA2LHcy9Q&usqp=CAU',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Max',
                    story: 'Inspired by my own dog, found all the materials on this app over the past two years.',
                    exchangeDetails: 'Not for sale',
                    profilePic: 'https://static.wixstatic.com/media/557bf52ab26368a60e43a3f1bc2a05f1.jpg/v1/fill/w_640,h_558,fp_0.56_0.15,q_80,usm_0.66_1.00_0.01,enc_auto/557bf52ab26368a60e43a3f1bc2a05f1.jpg',
                },
                {
                    id: '1',
                    title: 'Tile Globe',
                    image: 'https://artincontext.org/wp-content/uploads/2022/02/Recycled-Art.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Max',
                    story: 'Found all of these tiles over the past two years, but them together last month!',
                    exchangeDetails: 'Not for sale',
                    profilePic: 'https://static.wixstatic.com/media/557bf52ab26368a60e43a3f1bc2a05f1.jpg/v1/fill/w_640,h_558,fp_0.56_0.15,q_80,usm_0.66_1.00_0.01,enc_auto/557bf52ab26368a60e43a3f1bc2a05f1.jpg',
                },
                {
                    id: '3',
                    title: 'Dog from Buttons',
                    image: 'https://i.pinimg.com/originals/da/04/bc/da04bc50265538803e0157cf3f8173d8.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Max',
                    story: 'I had been casually collecting buttons! Decided to make something inspired by my dog',
                    exchangeDetails: 'Not for sale',
                    profilePic: 'https://static.wixstatic.com/media/557bf52ab26368a60e43a3f1bc2a05f1.jpg/v1/fill/w_640,h_558,fp_0.56_0.15,q_80,usm_0.66_1.00_0.01,enc_auto/557bf52ab26368a60e43a3f1bc2a05f1.jpg',
                },
            ],

        },
        {
            id: '2',
            title: 'Converse High Top',
            image: 'https://everydayrecycler.com/wp-content/uploads/2020/09/Old-Shoes.jpg',
            location: 'Stanford, CA',
            distance: '0.3 miles',
            username: 'Caroline',
            bio: 'Life is what you make of it <3',
            profilePic: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
            rating: require('./assets/Icons/bigstars-yellow-40.png'),
            story: 'I wore these to class every day through my sophomore year of college',
            exchangeDetails: 'anytime before my 10am class works :)',
            donated: '11',
            listings: '3',
            givingAway: [
                {
                    id: '1',
                    title: 'Wooden Cutting Board',
                    image: 'https://images.unsplash.com/photo-1587411768913-623b76d243c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGJyb2tlbiUyMGl0ZW1zfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=900&q=60',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Caroline',
                    rating: require('./assets/Icons/bigstars-yellow-40.png'),
                    story: 'a cool cutting board i found behind a dumpster',
                    exchangeDetails: 'anytime before my 10am class works :)',
                    profilePic: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',

                },
                {
                    id: '2',
                    title: 'Old Coffee Cup',
                    image: 'https://images.unsplash.com/photo-1587411768065-fd9b9dd13359?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJyb2tlbiUyMGl0ZW1zfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=900&q=60',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Caroline',
                    rating: require('./assets/Icons/bigstars-yellow-40.png'),
                    story: 'old coffee cup from a few years back',
                    exchangeDetails: 'anytime before my 10am class works :)',
                    profilePic: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
                },
                {
                    id: '3',
                    title: 'Water bottle',
                    image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Caroline',
                    rating: require('./assets/Icons/bigstars-yellow-40.png'),
                    story: 'a cool cutting board i found behind a dumpster',
                    exchangeDetails: 'anytime before my 10am class works :)',
                    profilePic: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
                },
            ],
            art: [
                {
                    id: '2',
                    title: 'Trees of Glass',
                    image: 'https://insteading.com/assets/images/Art/Glass/alison%20apple%20tree.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    story: 'Just installed this in my own home!',
                    exchangeDetails: 'Not for sale',
                },
                {
                    id: '1',
                    title: 'Upcycled Glass Art',
                    image: 'https://insteading.com/assets/images/Art/Glass/alison%20fox.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    story: 'This was my first time experimenting with upcycled glass! AHH!!!!',
                    exchangeDetails: 'Not for sale',
                },
                {
                    id: '3',
                    title: 'Monster Mash',
                    image: 'https://i.pinimg.com/474x/54/34/a9/5434a96900dc0c053e0877b98e3919a7--recycled-glass-bottles-wine-bottles.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    story: 'Monster Mash of colorful greens. I was inspired by spring!',
                    exchangeDetails: 'Not for sale',
                },
            ],
        },
        {
            id: '1',
            title: 'Old Vans',
            story: 'my very first pair of skate shoes!',
            exchangeDetails: 'sometime in the afternoon this weekend',
            image: 'https://i.pinimg.com/originals/56/98/44/569844f4fdb836afd1d96bd7aa586dd5.jpg',
            location: 'Redwood City, CA',
            distance: '3.1 miles',
            username: 'Leio',
            bio: 'big into skating and surfing',
            donated: '4',
            listings: '3',
            profilePic: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
            rating: require('./assets/Icons/bigstars-yellow-50.png'),
            givingAway: [
                {
                    id: '2',
                    title: 'Old Vans',
                    image: 'https://i.pinimg.com/originals/56/98/44/569844f4fdb836afd1d96bd7aa586dd5.jpg',
                    location: 'Redwood City, CA',
                    distance: '3.1 miles',
                    username: 'Leio',
                    
                    story: 'my very first pair of skate shoes!',
                    exchangeDetails: 'sometime in the afternoon this weekend',
                    profilePic: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
                    rating: require('./assets/Icons/bigstars-yellow-50.png'),
                },
                {
                    id: '1',
                    title: 'Old Work Boots',
                    image: 'https://images.unsplash.com/photo-1550998358-08b4f83dc345?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGNsb3RoaW5nfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=900&q=60',
                    location: 'Redwood City, CA',
                    distance: '3.1 miles',
                    username: 'Leio',

                    story: 'some work boots my dad used to use',
                    exchangeDetails: 'sometime in the afternoon this weekend',
                    profilePic: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
                    rating: require('./assets/Icons/bigstars-yellow-50.png'),
                },
                
                {
                    id: '3',
                    title: 'Sweater',
                    image: 'https://images.unsplash.com/photo-1648249743738-6db53456818a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
                    location: 'Redwood City, CA',
                    distance: '3.1 miles',
                    username: 'Leio',

                    story: 'an old swearer of mine!',
                    exchangeDetails: 'sometime in the afternoon this weekend',
                    profilePic: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
                    rating: require('./assets/Icons/bigstars-yellow-50.png'),
                },
            ],
            art: [
                {
                    id: '1',
                    title: 'Nemo',
                    image: 'https://media.istockphoto.com/id/1227594010/photo/fish-made-from-corks-from-plastic-bottles.jpg?s=612x612&w=0&k=20&c=XVizKwHlPKzvOasfmrSMubbp0kjA7ZpA-qxoX7ulnmg=',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    story: 'You can find this in downtown Palo Alto, check it out!',
                    exchangeDetails: 'Not for sale',

                },
                {
                    id: '2',
                    title: 'Two Birds',
                    image: 'https://artsphere.org/wp-content/uploads/2020/06/recycled-fishies-768x644.jpeg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    story:'My first work of art!',
                    exchangeDetails: 'Not for sale',
                },
                {
                    id: '3',
                    title: 'BlueFish',
                    image: 'https://www.happyfamilyart.com/wp-content/uploads/2021/06/2DSculpture-15.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    story: 'blue fish swimming, my most recent work',
                    exchangeDetails: 'Not for sale',
                },
            ],

        },
    ]

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image
                source={{ uri: item.image }}
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
                    <Text style={styles.location}> {item.location}</Text>  
                    </View>
                    <Text style={styles.distance}>{"\t"}{item.distance}</Text>
                </View>
                <View style={styles.iconsHalf}>
                    {/* Like Functionality */}
                        <View style={styles.iconContainer}>
                                        <Image
                                            source={require('./assets/Icons/edit-gray.png')}
                                            style={styles.edit} 
                                        />

                        </View>
                        <View style={styles.iconContainer}>
                            <Image
                                source={require('./assets/Icons/delete-gray.png')}
                                style={styles.delete} 
                            />
                        </View>
                </View>
            </View>
        </View>
    );

    const renderArt = ({ item }) => (
        <View style={styles.item}>
            <Pressable onPress={() => navigation.navigate('IndividualItem', { item: item })}>
                <Image
                    source={{ uri: item.image, }}
                    style={styles.objectImage}
                />
            </Pressable>
            <View style={styles.bottomContainer}>
                <View style={styles.textHalf}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.locationLine}>
                    <Image
                        style={styles.pin}
                        source={require('./assets/Icons/pin.png')}
                    />
                    <Text style={styles.location}> {item.location}</Text>  
                    </View>
                    <Text style={styles.distance}>{"\t"}{item.distance}</Text>
                </View>
                <View style={styles.roleContainer}> 
                        <Image style={styles.role} source={item.role} />
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
                        <Text style={styles.miniUsername}>{item.username}</Text>
                        <Image 
                            source={item.rating}
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
                            <Text style={styles.location}> {item.location}</Text>  
                        </View>
                        <Text style={styles.distance}>{"\t"}{item.distance}</Text>
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
                renderItem={renderArt}
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
                        source={require('./assets/Icons/bigstars-yellow-50.png')} 
                    />
                </View>
            </View>

            {/* Bio */}
            <View style={styles.bioSection}> 
                <Text style={styles.bio}>Stanford undergrad clearing out my dorm room hoping to help out some artists</Text>
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
            <View style={styles.flatlistContainer}>
                {flatlist}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'flex-start',
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
        borderBottomWidth: 1,
    },
    flatlistContainer: {
        width: '100%',
        flex: 1,
    },
    screenText: {
        fontSize: 32,
    },
    profilePic: {
        height: '100%',
        aspectRatio: 1,
        borderRadius: 100,
    }, 
    profileHeader: {
        flexDirection: 'row', 
        justifyContent: 'space-between',   
        alignItems: 'center',
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
        width: '40%',
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
        marginBottom: 2,
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
        width: '50%',
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
        width: '50%',
    },
    miniRating: {
        width: '50%',
        resizeMode: 'contain',
    },
    nameRating: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
    },
    topBar: {
        flexDirection: 'row',
        margin: 8,
    },
    locationLine: {
        flexDirection: 'row',
    },
    iconsHalf: {
        margin: '4%',
        width: '32%',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    iconContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    like: {
        width: 64,
        height: 64,
    },
    role: {
        height: 60,
        width: 120,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    roleContainer:  {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '30%',
        marginRight: 8,
    },
    edit: {
        width: 56,
        height: 56,
    },
    delete: {
        width: 56,
        height: 56,
    },
});