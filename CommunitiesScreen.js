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
            description: 'Welcome to the official City of Palo Alto inspyre community! If you live nearby please join our cause and help spread awareness about sustainability and art. Have a great day!',
            myCommunities: false,
            
        },
        {
            location: 'Stanford, CA',
            name: 'West Flo',
            imageUrl: 'https://resed.stanford.edu/sites/g/files/sbiybj18956/files/styles/breakpoint_2xl_2x/public/media/image/flomo-alt_0.webp?itok=lKwTT0Yo',
            id: '1',
            read: 'true',
            number: '28',
            description: 'Hey fellow Stanford students. This community is only for the coolest students living in West Flo right now. Bet you wish you could be a part of this community!',
            myCommunities: false,

        },
        {
            location: 'Stanford, CA',
            name: 'Stanford Club Sports',
            imageUrl: 'https://dbukjj6eu5tsf.cloudfront.net/sidearm.sites/stanfordrec.sidearmsports.com/images/2021/9/19/Club_Sports_graphics_slider_tablet.jpg',
            id: '2',
            read: 'true',
            number: '97',
            description: 'Welcome non-varsity Stanford athletes! Here you\'ll find all the recycled athletic gear you need. From frisbees to footballs, track spikes to soccer balls, we\'ve got you covered!',
            myCommunities: false,

        },
        {
            location: 'Stanford, CA',
            name: 'Bay Beach Wildlife Preserve',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Resch_Falls.jpg',
            id: '7',
            read: 'true',
            number: '18',
            description: 'Welcome to the Bay Beach Wildlife Sanctuary! Most of our items are discarded trash we find in the santuary!',
            myCommunities: false,

        },
        {
            location: 'Stanford, CA',
            name: 'Stanford Farm',
            imageUrl: 'https://cawarchitects.com/wp-content/uploads/2021/08/Stanford-Educational-Farm-Overlooking-Crops-to-Buildings-CAW-Architects-slideshow.jpg',
            id: '6',
            read: 'true',
            number: '24',
            description: 'Items from the farm that our farmers are no longer using, feel free to check it out to see if there is anything of interest. We upload new items every Monday!',
            myCommunities: false,

        },
        {
            location: 'Stanford, CA',
            name: 'Stanford Art Studio',
            imageUrl: 'https://art.stanford.edu/sites/art/files/styles/hs_slideshow_large_2000x1500/public/media/image/facilities-painting.jpg?h=6eb229a4&itok=x0hv3ipO',
            id: '5',
            read: 'true',
            number: '12',
            description: 'Stanford Art Studio majors looking to get their hands on old art supplies or to share some of their own. Check us out! :)',
            myCommunities: false,

        },
        {
            location: 'Palo Alto, CA',
            name: 'Palo Alto Gardeners',
            imageUrl: 'https://cdn.britannica.com/42/91642-050-332E5C66/Keukenhof-Gardens-Lisse-Netherlands.jpg',
            id: '9',
            read: 'true',
            number: '97',
            description: 'Want any gardening supplies that we are no longer using? Join our group and we can get to it to you ASAP! Open to all in the area!',
            myCommunities: false,

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
            description: 'Official inspyre home of the Palo Vikes! We host afternoon thrifting events once per week. Help us spread the word to get people upcycling. Sko\' Vikes!!',
            myCommunities: true,
        },
        {
            location: 'Redwood City, CA',
            name: '5th Ave Family Thrift',
            imageUrl: 'https://cdn.businessyab.com/assets/uploads2/14a39eee5f778b8a16384bd5924b2155_-united-states-california-san-mateo-county-redwood-city-south-fair-oaks-fifth-avenue-110-5th-avenue-family-thrift-mart-650-361-9400.jpg',
            id: '1',
            read: 'true',
            number: '256',
            description: 'Family-owned thrift store trying to give you the best deals on the best clothes! Come on down and say hey!',
            myCommunities: true,
        },
        {
            location: 'San Francisco, CA',
            name: 'Golden Gate Audubon Society',
            imageUrl: 'https://goldengateaudubon.org/wp-content/uploads/2020/09/GGAS-logo-bw-trans.png',
            id: '2',
            read: 'true',
            number: '17',
            description: 'We try to share our bird watching gear with those who can\'t afford it. Feel free to come to one of our meet ups on Saturdays and Sundays.',
            myCommunities: true,
        },

        {
            location: 'Half Moon Beach, CA',
            name: 'Half Moon Beach',
            imageUrl: 'https://www.planetware.com/photos-large/USCA/half-moon-bay-state-beaches.jpg',
            id: '3',
            read: 'true',
            number: '49',
            description: 'Join us in you are in the Half Moon area! Mostly beach trash, but who knows what you might find!',
            myCommunities: true,

        },
        {
            location: 'San Jose, CA',
            name: 'San Jose Painters',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Downtown_San_Jose_%2830001966530%29.jpg',
            id: '9',
            read: 'true',
            number: '32',
            description: 'Looking for some new sculputre materials in the SJ area? You have come to the right place! Feel free to join!',
            myCommunities: true,

        },
        {
            location: 'Palo Alto, CA',
            name: 'Palo Alto Knitting',
            imageUrl: 'https://nimble-needles.com/wp-content/uploads/2021/12/the-difference-between-crochet-and-knitting-1024x684.jpg',
            id: '10',
            read: 'true',
            number: '7',
            description: 'Help us recycle our knitting supplies! Welcome to those looking to get used knitting materials or hoping to provide some of their own!',
            myCommunities: true,

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