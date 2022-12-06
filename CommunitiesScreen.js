import { TextInput, Keyboard, Image, Text, View, StyleSheet, SafeAreaView, FlatList, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import CommunityScreen from './IndividualCommunityScreen';
import StanfordSearch from './StanfordSearch';
//import PeopleScreen from './PeopleScreen';

export default function CommunitiesScreen ({ navigation }) {

    const [loaded] = useFonts({
        InterBlack: require('./assets/Fonts/Inter-Black.ttf'),
        InterBold: require('./assets/Fonts/Inter-Bold.ttf'),
        InterMedium: require('./assets/Fonts/Inter-Medium.ttf'),
        InterSemiBold: require('./assets/Fonts/Inter-SemiBold.ttf'),
        InterRegular: require('./assets/Fonts/Inter-Regular.ttf'),
        InterLight: require('./assets/Fonts/Inter-Light.ttf'),
      });    

    const EXPLORE_COMMUNITIES = [
        {
            location: 'Palo Alto, CA',
            name: 'City of Palo Alto',
            imageUrl: "https://www.ca-ilg.org/sites/main/files/imagecache/lightbox/main-images/photos__City_Seal_jpg.jpg",
            id: '17',
            read: 'true',
            number: '209',
            description: 'Welcome to the official City of Palo Alto inspyre community! If you live nearby please join our cause and help spread awareness about sustainability and art. Have a great day!'
        },
        {
            location: 'Stanford, CA',
            name: 'West FloMo',
            imageUrl: 'https://resed.stanford.edu/sites/g/files/sbiybj18956/files/styles/breakpoint_2xl_2x/public/media/image/flomo-alt_0.webp?itok=lKwTT0Yo',
            id: '1',
            read: 'true',
            number: '28',
            description: 'Hey fellow Stanford students. This community is only for the coolest students living in West Flo right now. Bet you wish you could be a part of this community!'
        },
        {
            location: 'Stanford, CA',
            name: 'Stanford Clubs',
            imageUrl: 'https://dbukjj6eu5tsf.cloudfront.net/sidearm.sites/stanfordrec.sidearmsports.com/images/2021/9/19/Club_Sports_graphics_slider_tablet.jpg',
            id: '2',
            read: 'true',
            number: '97',
            description: 'Welcome non-varsity Stanford athletes! Here you\'ll find all the recycled athletic gear you need. From frisbees to footballs, track spikes to soccer balls, we\'ve got you covered!'
        },
    ]
    const MY_COMMUNITIES = [
        {
            location: 'Palo Alto, CA',
            name: 'Palo Alto High School',
            imageUrl: "https://s3-us-west-2.amazonaws.com/sportshub2-uploads-prod/files/sites/782/2021/05/19191830/A8ECC043-9B24-4AFB-9646-C678C1A05D36.jpg",
            id: '17',
            read: 'true',
            number: '44',
            description: 'Official inspyre home of the Palo Vikes! We host afternoon thrifting events once per week. Help us spread the word to get people upcycling. Sko\' Vikes!!'
        },
        {
            location: 'Redwood City, CA',
            name: '5th Ave Family Thrift',
            imageUrl: 'https://cdn.businessyab.com/assets/uploads2/14a39eee5f778b8a16384bd5924b2155_-united-states-california-san-mateo-county-redwood-city-south-fair-oaks-fifth-avenue-110-5th-avenue-family-thrift-mart-650-361-9400.jpg',
            id: '1',
            read: 'true',
            number: '256',
            description: 'Family-owned thrift store trying to give you the best deals on the best clothes! Come on down and say hey!'
        },
        {
            location: 'San Francisco, CA',
            name: 'Golden Gate Audubon Society',
            imageUrl: 'https://goldengateaudubon.org/wp-content/uploads/2020/09/GGAS-logo-bw-trans.png',
            id: '2',
            read: 'true',
            number: '17',
            description: 'We try to share our bird watching gear with those who can\'t afford it. Feel free to come to one of our meet ups on Saturdays and Sundays.'
        },
    ]

    const renderDM = ({ item }) => (
        
        <Pressable onPress={() => navigation.navigate('IndividualCommunityScreen', { message: item })}>
            <View style={styles(item).communityContainer}>
                <View style={styles(item).picHalf}>
                    <Image 
                        style={styles(item).profilePic} 
                        source={{
                            uri: item.imageUrl,
                        }}
                    />    
                </View>
                <View style={styles(item).textHalf}>
                        <Text style={styles(item).messageTitle}>{item.name}</Text>
                        <Text style={styles(item).messageDescription}>{item.location}</Text>
                </View>
                <Image source={require("./FigmaIcons/join.png")}/>
            </View>
        </Pressable>
    );

    return (
        <View style={styles.wholeScreen}>
            <SafeAreaView style={styles.container}>
                <View style={header_styles.chatHeader}>
                    <Image style={header_styles.headerText}
                    source={require("./FigmaIcons/community.png")} />
                </View>
                <View style={header_styles.chatBottom}>
                    <View style={header_styles.textInputView}>
                        <TextInput
                            style={header_styles.textInput}
                            // FYI: There are hella spaces after "Search" to make the text hitbox larger 
                            placeholder='Search                                                                          '
                            onSubmitEditing={Keyboard.dismiss}
                            // onSubmitEditing={newText => setText(newText)}
                            // onChangeText={newText => setText(newText)}
                        />
                    </View>
                    <Pressable onPress={() => navigation.navigate('StanfordSearch')}>
                    <Image 
                        style={header_styles.search} source={require('./assets/Icons/send-gray.png')} 
                    />
                    </Pressable>
                </View>
                <View style = {header_styles.communityTitle}>
                    <Text style = {header_styles.communityTitleText}>
                        Explore Communities
                    </Text>
                </View>
                
                <View style={styles.communityContainer}>
                    <FlatList 
                        horizontal
                        data={MY_COMMUNITIES}
                        renderItem={renderDM}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <View style = {header_styles.communityTitle}>
                    <Text style = {header_styles.communityTitleText}>
                        My Communities
                    </Text>
                </View>
                <View style = {styles.communityContainer}>
                    <FlatList
                        horizontal
                        data = {EXPLORE_COMMUNITIES}
                        renderItem={renderDM}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </SafeAreaView>
        </View>
    );
}

const header_styles = StyleSheet.create({
    chatHeader: {
        height: '8%',
        justifyContent: 'center',
        //backgroundColor: 'blue',
        alignContent: 'center',
        // backgroundColor: '#f9c2ff',
    },
    headerText: {
        // fontSize: 40,
        // fontFamily: 'InterBold',
        alignSelf: 'center',
        //backgroundColor: '#f9c2ff',
        height: "100%",
        width: 300,
    },
    communityTitle: {
        //backgroundColor: 'blue',
        height: '5%',
        justifyContent: 'center',
        marginTop: 10,

    },
    communityTitleText: {
        fontFamily: 'InterBlack',
        fontSize: 30,
        marginLeft: '2%',
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
        justifyContent: 'space-around',
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
        resizeMode: 'cover',
        position: 'absolute',
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
        marginTop: 8,
        marginHorizontal: 8,
    },
    textInputView: {
        alignSelf: 'flex-start',
        borderRadius: 16,
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'flex-start',
        margin: 8,
        paddingBottom: 10,
        width: '80%',
    },
    wholeScreen: {
        backgroundColor: 'white',
    },
    chatBottom: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
    search: {
        width: 50,
        height: 50,

    },
});

const styles = (item) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    wholeScreen: {
        backgroundColor: 'white',
    },
    communityContainer: {
        marginHorizontal: 5,
        height: 250,
        width: 150,
    },
    listContainer: {
        width: 360,
        height: '80%',
    },
    messageTitle: {
        fontSize: 15,
        fontFamily: 'InterBold',
        marginBottom: 4,
    },
    messageDescription: {
        color: 'gray',
        fontSize: 14,
        fontFamily: 'InterRegular',
    },
    chatHeader: {
        height: '10%',
        justifyContent: 'center',
        alignContent: 'center',
    },
    headerText: {
        fontSize: 42,
        fontFamily: 'InterBold',
        alignSelf: 'center',
        //marginTop: 10,
    },
    exploreText: {
        fontSize: 16,
        // textTransform: 'uppercase',
        letterSpacing: 0.2,
        fontFamily: 'InterRegular',
    },
    picHalf: {
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePic: {
        height: 150,
        width: 150,
        borderRadius:20,
    },
    textHalf: {
        height: 100,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    messageTitle: {
        fontSize: 20,
        fontFamily: 'InterBold',
    },
    messageDescription: {
        fontSize: 16,
        fontFamily: 'InterRegular',
    },
    lockedStatus: {
        height: '50%',
        width: '50%',
        borderRadius:20,
        position:'absolute',
        //paddingBottom:10,
        marginTop: 100,
    },
    LockedView: {
        width: '50%',
        height: '50%',
        marginLeft: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'blue',
    },
});