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
            locked_status: 'https://cdn-icons-png.flaticon.com/512/102/102288.png',
            imageUrl: "https://www.highline.edu/wp-content/uploads/2014/11/tha-dah-hser-highline-college.jpg",
            id: '17',
            read: 'true',
            number: '155',
            description: 'this is a placeholder for the description.'
        },
        {
            location: 'Stanford, CA',
            name: 'West FloMo',
            locked_status: 'https://cdn-icons-png.flaticon.com/512/61/61457.png',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8DUUfF_LxZQBVCj_aKb53zZD9czoEsy8A3g&usqp=CAU',
            id: '1',
            read: 'true',
            number: '28',
            description: 'this is a placeholder for the description.'
        },
        {
            location: 'Stanford, CA',
            name: 'Stanford Club Sports',
            locked_status: 'https://cdn-icons-png.flaticon.com/512/61/61457.png',
            imageUrl: 'https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg',
            id: '2',
            read: 'true',
            number: '97',
            description: 'this is a placeholder for the description.'
        },
    ]
    const MY_COMMUNITIES = [
        {
            location: 'Palo Alto, CA',
            name: 'Palo Alto High School',
            imageUrl: "https://www.highline.edu/wp-content/uploads/2014/11/tha-dah-hser-highline-college.jpg",
            id: '17',
            read: 'true',
            number: '44',
            description: 'this is a placeholder for the description.'
        },
        {
            location: 'Menlo Park, CA',
            name: 'Menlo Thrifters',
            locked_status: 'https://cdn-icons-png.flaticon.com/512/61/61457.png',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8DUUfF_LxZQBVCj_aKb53zZD9czoEsy8A3g&usqp=CAU',
            id: '1',
            read: 'true',
            number: '256',
            description: 'this is a placeholder for the description.'
        },
        {
            location: 'Palo Alto, CA',
            name: 'Bay Bird Watchers',
            imageUrl: 'https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg',
            locked_status: 'https://cdn-icons-png.flaticon.com/512/61/61457.png',
            id: '2',
            read: 'true',
            number: '17',
            description: 'this is a placeholder for the description.'
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