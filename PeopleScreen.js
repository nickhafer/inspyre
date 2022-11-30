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

    const renderDestination = ({ item }) => (
        <View style={styles(item).destinationContainer}>
            <View style={styles(item).destinationText}>
                <Pressable onPress={() => navigation.navigate('DMScreen', { destination: item })}>
                    <View style={styles(item).destinationTitle}>
                        <Text style={styles(item).destinationTitle}>{item.name}</Text>
                        <Text style={styles(item).destinationDescription}>{item.message}</Text>
                        <Text style={styles(item).exploreText}>{item.time}</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList
                    data={DATA}
                    renderItem={renderDestination}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );

    // code to make work:

    const Item = ({ name, message, imageUrl, time }) => (
      <View style={styles.item}>
        <View style={styles.itemTop}>
        <Image source = {{uri: imageUrl}} style={styles.image}></Image>
        <Text style={styles.name}>{name}</Text>
          <View style = {styles.timeView}>
            <Text style = {styles.time}>{time}</Text>
          </View>
          <Button title="Go to details" onPress={() => navigation.navigate('DMScreen')}></Button>
        </View>
        <Text style={styles.message}>{message}</Text>
      </View>
    );
    
    const renderItem = ({ item }) => (
      <Item 
      name={item.name} 
      message={item.message}
      imageUrl={item.imageUrl}
      time = {item.time}
      />
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <View style = {styles.header}>
        <Text style = {styles.headerText}>Inspyre Header</Text>
      </View>
        <View style={styles.titleRow}>
         <Text style={styles.titleText}>Conversations</Text>
        </View>
        <FlatList 
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
          <Stack.Navigator>
            <Stack.Screen name = 'PeopleScreen' component = {PeopleScreen} />
            <Stack.Screen name = 'DMScreen' component = {DMScreen}/>
          </Stack.Navigator>
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
    destinationContainer: {
        width: 320,
        flex: 1,
        margin: 20,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: item.read == 'true' ? 'grey' : 'blue',
        backgroundColor: 'white',
        shadowColor: 'darkgray',
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowRadius: 5,
    },
    destinationImage: {
        width: 320,
        height: 320,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    destinationText: {
        flex: 1,
        justifyContent: 'space-around',
        marginHorizontal: 16,
    },
    destinationTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    destinationDescription: {
        color: 'gray',
    },
    exploreText: {
        fontSize: 14,
        textTransform: 'uppercase',
        letterSpacing: 0.2,
        fontWeight: 'bold',
    }
});