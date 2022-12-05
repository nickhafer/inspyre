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

    const MY_COMMUNITIES = [
        {
            location: 'Palo Alto, CA',
            name: 'City of Palo Alto',
            imageUrl: "https://www.highline.edu/wp-content/uploads/2014/11/tha-dah-hser-highline-college.jpg",
            id: '17',
            read: 'true',
            number: '155',
        },
        {
            location: 'Stanford, CA',
            name: 'West FloMo',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8DUUfF_LxZQBVCj_aKb53zZD9czoEsy8A3g&usqp=CAU',
            id: '1',
            read: 'true',
            number: '28',
        },
        {
            location: 'Stanford, CA',
            name: 'Stanford Club Sports',
            imageUrl: 'https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg',
            id: '2',
            read: 'true',
            number: '97',
        },
    ]
    const EXPLORE_COMMUNITIES = [
        {
            location: 'Palo Alto, CA',
            name: 'Palo Alto High School',
            imageUrl: "https://www.highline.edu/wp-content/uploads/2014/11/tha-dah-hser-highline-college.jpg",
            id: '17',
            read: 'true'
        },
        {
            location: 'Menlo Park, CA',
            name: 'Menlo Thrifters',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8DUUfF_LxZQBVCj_aKb53zZD9czoEsy8A3g&usqp=CAU',
            id: '1',
            read: 'true'
        },
        {
            location: 'Palo Alto, CA',
            name: 'Bay Bird Watchers',
            imageUrl: 'https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg',
            id: '2',
            read: 'true'
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
                    <View style={styles(item).top}>
                        <Text style={styles(item).messageTitle}>{item.name}</Text>
                        <Text style={styles(item).exploreText}>{item.time}</Text>
                    </View>
                    <View style={styles(item).bottom}>
                        <Text style={styles(item).messageDescription}>{item.location}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );

    return (
        <View style={styles.wholeScreen}>
            <SafeAreaView style={styles.container}>
                <View style={header_styles.chatHeader}>
                    <Image style={header_styles.headerText}
                    source={require("./FigmaIcons/messages.png")} />
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
        height: '10%',
        justifyContent: 'center',
        alignContent: 'center',
        // backgroundColor: '#f9c2ff',
    },
    headerText: {
        // fontSize: 40,
        // fontFamily: 'InterBold',
        alignSelf: 'flex-start',
        marginBottom: 7,
        // backgroundColor: '#f9c2ff',
        height: "100%",
        width: 250,
    },
    communityTitle: {
        //backgroundColor: 'blue',
        height: '5%',
        justifyContent: 'center',
        marginTop: 10,

    },
    communityTitleText: {
        fontFamily: 'InterBold',
        fontSize: 30,

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
        justifyContent: 'space-between',
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
        borderRadius: 32,
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
        width: 40,
        height: 40,

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
        //width: '30%',
        marginTop:5,
        height: '30%',
        //flex: 5,
        //borderTopWidth: 1,
        //borderBottomWidth: 1,
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        //borderColor: item.read == 'true' ? 'grey' : 'blue',
        backgroundColor: 'blue',
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
        backgroundColor: 'red',
    },
    headerText: {
        fontSize: 42,
        fontFamily: 'InterBold',
        alignSelf: 'center',
        backgroundColor: 'red',
        //marginTop: 10,
    },
    exploreText: {
        fontSize: 16,
        // textTransform: 'uppercase',
        letterSpacing: 0.2,
        fontFamily: 'InterRegular',
    },
    picHalf: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePic: {
        borderRadius: 32,
        width: 64,
        height: 64,
    },
    textHalf: {
        paddingRight: '4%',
        width: '80%',
        height: 64,
        justifyContent: 'space-between',
        alignSelf: 'center',
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottom: {
        
    },
});