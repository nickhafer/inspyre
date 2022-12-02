import { Image, Text, View, StyleSheet, SafeAreaView, FlatList, Pressable } from 'react-native';
import { useFonts } from 'expo-font';


export default function PeopleScreen ({ navigation }) {

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
            message: 'Are you still able to meet today at 5?',
            name: 'Lucas',
            time: '5m ago',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8DUUfF_LxZQBVCj_aKb53zZD9czoEsy8A3g&usqp=CAU',
            id: '1',
            read: 'true'
        },
        {
            message: 'I can meet at Coupa if that works for you',
            name: 'Nichole',
            time: '47m ago',
            imageUrl: 'https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg',
            id: '2',
            read: 'true'
        },
        {
            message: 'Yes!',
            name: 'Tia',
            time: '2h ago',
            imageUrl: 'data:image/jpeg;base64,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',
            id: '3',
            read: 'true'

        },
        {
            message: 'Sick see you then',
            time: '8h ago',
            name: 'Teddy',
            imageUrl: 'data:image/jpeg;base64,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',
            id: '4',
            read: 'true'
        },
        {
            message: 'Thanks again for the toys',
            name: 'Terrance',
            time: '9h ago',
            imageUrl: 'data:image/jpeg;base64,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',
            id: '5',
            read: 'true'
        },
        {
            message: 'Sorry I don\'t think I can make it',
            name: 'Julia',
            time: '2d ago',
            imageUrl: 'data:image/jpeg;base64,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',
            id: '6',
            read: 'true'
        },
    ]

    const renderDM = ({ item }) => (
        
        <Pressable onPress={() => navigation.navigate('DMScreen', { message: item })}>
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
                    </View>
                </View>
            </View>
        </Pressable>
    );

    return (
        <View style={styles.wholeScreen}>
            <SafeAreaView style={styles.container}>
                <View style={styles.chatHeader}>
                    <Text style={header_styles.headerText}>
                        messages
                    </Text>
                </View>
                
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
        backgroundColor: '#f9c2ff',
    },
    headerText: {
        fontSize: 40,
        fontFamily: 'InterBold',
        alignSelf: 'center',
        backgroundColor: '#f9c2ff',
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
    },
    messageContainer: {
        width: '100%',
        height: 100,
        flex: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: item.read == 'true' ? 'grey' : 'blue',
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