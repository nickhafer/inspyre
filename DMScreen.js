import { View, SafeAreaView, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function DMScreen ({ navigation, route}) {
    const { message } = route.params;

    return (
    <ImageBackground source={message.image} style={styles.backgroundImage}>
        <SafeAreaView style={styles.body}>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="black">Messages</AntDesign>
          </Pressable>
          <View style={styles.messageText}>
            <Text style={styles.messageTitle}>{message.name}</Text>
            </View>
            <View style = {styles.messageDescriptionView}>
            <Text style={styles.messageDescription}>{message.message}</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
    backgroundImage: {
      width: '100%',
      height: '100%'
    },
    body: {
        margin: 16,
    },
    messageText: {
        marginTop: 10,
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        alignItems: 'center',
    },
    messageTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        //justifyContent: 'center',
    },
    messageDescription: {
        fontSize: 14,
        marginTop: 16,
        //backgroundColor: 'white',
    },
    messageDescriptionView: {
        backgroundColor: 'lightblue',
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
        paddingBottom: 10,
        width: '50%',
    },
  });