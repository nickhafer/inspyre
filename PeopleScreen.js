import { Image, Text, View, StyleSheet, SafeAreaView, FlatList, StatusBar, TouchableHighlight, Pressable, Button, navigation } from 'react-native';

import DMScreen from './DMScreen';



export default function PeopleScreen ({ navigation }) {

    const DATA = [
        {
            message: 'Hey, how is it going?',
            name: 'Lucas',
            time: '5m ago',
            imageUrl: 'https://us.123rf.com/450wm/kateen2528/kateen25282003/kateen2528200300007/141661994-realistic-fresh-blueberry-with-leaves.jpg?ver=6',
            id: '1',
            read: 'false'
        },
        {
            message: 'How are you doing?',
            name: 'Nichole',
            time: '47m ago',
            imageUrl: 'https://www.nicepng.com/png/detail/70-701585_cucumber-clipart-cucumber-clip-art-free.png',
            id: '2',
            read: 'true'
        },
        {
            message: 'Yes!',
            name: 'Tia',
            time: '2h ago',
            imageUrl: 'https://us.123rf.com/450wm/kateen2528/kateen25282003/kateen2528200300007/141661994-realistic-fresh-blueberry-with-leaves.jpg?ver=6',
            id: '3',
            read: 'true'

        },
        {
            message: 'Wonderful, that works for me.',
            time: '8h ago',
            name: 'Lola',
            imageUrl: 'https://us.123rf.com/450wm/kateen2528/kateen25282003/kateen2528200300007/141661994-realistic-fresh-blueberry-with-leaves.jpg?ver=6',
            id: '4',
            read: 'true'
        },
        {
            message: 'Very nice!!!',
            name: 'Terrance',
            time: '9h ago',
            imageUrl: 'https://us.123rf.com/450wm/kateen2528/kateen25282003/kateen2528200300007/141661994-realistic-fresh-blueberry-with-leaves.jpg?ver=6',
            id: '5',
            read: 'true'
        },
        {
            message: 'Wow',
            name: 'Julia',
            time: '2d ago',
            imageUrl: 'https://us.123rf.com/450wm/kateen2528/kateen25282003/kateen2528200300007/141661994-realistic-fresh-blueberry-with-leaves.jpg?ver=6',
            id: '6',
            read: 'true'
        },
    ]

    // working code:

    const renderDM = ({ item }) => (
        
                <Pressable onPress={() => navigation.navigate('DMScreen', { message: item })}>
                    <View style={styles(item).messageContainer}>
                    <View style={styles(item).picHalf}>
                        <Image 
                            style={styles(item).profilePic} 
                            source={require('./assets/Images/luc-profile-pic.jpeg')}
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
        <SafeAreaView style={styles.container}>
            <View styles = {styles.chatHeader}>
                <Text styles={styles.headerText}>
                    ANDREW PLZ PUT THE HEADER IN
                </Text>

            </View>
            
            <View style={styles.listContainer}>
                <FlatList
                    data={DATA}
                    renderItem={renderDM}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = (item) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    messageTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    messageDescription: {
        color: 'gray',
    },
    chatHeader: {
        backgroundColor: 'blue',
    },
    headerText: {
        fontSize: 42,
    },
    exploreText: {
        fontSize: 14,
        textTransform: 'uppercase',
        letterSpacing: 0.2,
        fontWeight: 'bold',
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