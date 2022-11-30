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
        marginTop: 64,
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    messageTitle: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    messageDescription: {
        fontSize: 14,
        marginTop: 16,
    }
  });