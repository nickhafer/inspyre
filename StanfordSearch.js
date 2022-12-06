import { Image, Text, View, StyleSheet, SafeAreaView, FlatList, Pressable } from 'react-native';
import { useFonts } from 'expo-font';


export default function StanfordSearch ({ navigation }) {

    const [loaded] = useFonts({
        InterBlack: require('./assets/Fonts/Inter-Black.ttf'),
        InterBold: require('./assets/Fonts/Inter-Bold.ttf'),
        InterMedium: require('./assets/Fonts/Inter-Medium.ttf'),
        InterSemiBold: require('./assets/Fonts/Inter-SemiBold.ttf'),
        InterRegular: require('./assets/Fonts/Inter-Regular.ttf'),
        InterLight: require('./assets/Fonts/Inter-Light.ttf'),
      });    

    const PEOPLE_SCREEN_DATA = [
        {
            message: 'Members: 50',
            number: '50',
            location: "Stanford, CA",
            name: 'Stanford Frosh',
            imageUrl: "https://advising.stanford.edu/sites/g/files/sbiybj20621/files/styles/card_1900x950/public/media/image/convocation_2012_0.jpg?h=2d2fbf65&itok=sGCgU476",
            id: '17',
            description: 'Welcome to the Stanford Frosh group. If you are a current freshman at Stanford, we would love to have you join the group!',
        },
        {
            message: 'Members: 100',
            number: '100',
            location: "Stanford, CA",
            name: 'Stanford Rowing',
            imageUrl: 'https://i0.wp.com/www.rowingnews.com/wp-content/uploads/2020/07/2019-IR001-623-1-scaled.jpg?fit=2560%2C1707&ssl=1',
            id: '1',
            description: 'Stanford rowing supplies primarily: old ores, run-down boats, you name it.'
        },
        {
            message: 'Members: 44',
            number: '44',
            location: "Stanford, CA",
            name: 'Stanford Club Sports',
            imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/221102021511-01-stanford-university-reviews-dorm-safety-procedures.jpg?c=original',
            id: '2',
            description: "The official group for Stanford Club sports. We primarily have old uniforms and sports equipment, but open to whatever else people would like to share! Please feel free to join us and start upcycling!"
        },
        {
            message: 'Members: 42',
            number: '42',
            name: 'Stanford GSB',
            location: "Stanford, CA",
            imageUrl:'https://poetsandquants.com/wp-content/uploads/sites/5/2018/01/stanford_day2-033-660x325.jpg',
            id: '3',
            description: "Stanford GSB students only. You will be required to request to join. Primarily clothing for upcycling."

        },
        {
            message: 'Members: 12',
            number: '13',
            name: 'Stanford Law School',
            location: "Stanford, CA",
            imageUrl: 'https://stanforddaily.com/wp-content/uploads/2021/11/1-scaled.jpg',
            id: '4',
            description: 'The official group for the law school. Please join us whether or not you are apart of the Stanford Law School!'
        },
        {
            message: 'Members: 98',
            number: '98',
            name: 'Stanford Sustainability',
            location: "Stanford, CA",
            imageUrl: 'https://content.fortune.com/wp-content/uploads/2022/06/20210910_Stanford_Educational_Farm_N6A0359.jpg',
            id: '5',
            description: 'Open to all! Join us in helping reduce waste by upcycling your items. We are mostly a community of people on campus, but are open to all!'
        },
        {
            message: 'Members: 80',
            number: '80',
            name: 'Stanford Artists',
            location: "Stanford, CA",
            imageUrl: 'https://d2u3kfwd92fzu7.cloudfront.net/asset/cms/pARIS_PLUS_ART_BASEl_2023-2.jpg',
            id: '6',
            description: 'For all Stanford artists looking for materials to upcycle for art, whether old brushes, tubes of paint, or materials for upcycled art!'
        },
    ]

    const renderDM = ({ item }) => (
        
        <Pressable onPress={() => navigation.navigate('IndividualCommunityScreen', { message: item })}>
            <View style={styles(item).messageContainer}>
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
                        <Text style={styles(item).messageDescription}>{item.message}</Text>
                        <Text style = {styles(item).messageDescription}>{item.location}</Text>
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
                    source={require("./FigmaIcons/community.png")} />
                </View>
                <Pressable style={styles.back} onPress={() => navigation.goBack()}>
                        <Image style={styles.back} source={require('./assets/Icons/back-gray.png')} />
                    </Pressable>
                
                <View style={styles.listContainer}>
                    <FlatList
                        data={PEOPLE_SCREEN_DATA}
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
        alignSelf: 'center',
        marginBottom: 7,
        // backgroundColor: '#f9c2ff',
        height: "100%",
        width: 400,
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
    listContainer: {
        width: 360,
        height: '80%',
        flex: 1
    },
    messageContainer: {
        width: '100%',
        height: 100,
        flex: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: item.read == 'true' ? 'grey' : 'grey',
        backgroundColor: 'white',
    },
    messageTitle: {
        fontSize: 25,
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