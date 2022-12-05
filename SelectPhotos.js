import { Image, Text, View, StyleSheet, SafeAreaView, FlatList, Pressable } from 'react-native';

export default function SelectPhotos ({ navigation }) {

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.header}>
                <Text style={styles.screenText}>Select a Photo!</Text>
            </View>
            <View style={styles.imageContainer}>
                <Pressable onPress={() => navigation.navigate('PostDetails', 
                    {image: require('./assets/Images/luc-profile-pic.jpeg')})}>
                    <Image 
                        source={require('./assets/Images/luc-profile-pic.jpeg')}
                        style={styles.objectImage}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PostDetails')}>
                    <Image 
                        source={require('./assets/Images/luc-profile-pic.jpeg')}
                        style={styles.objectImage}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PostDetails')}>
                    <Image 
                        source={require('./assets/Images/luc-profile-pic.jpeg')}
                        style={styles.objectImage}
                    />
                </Pressable>
            </View>
            <View style={styles.imageContainer}>
                <Pressable onPress={() => navigation.navigate('PostDetails')}>
                    <Image 
                        source={require('./assets/Images/luc-profile-pic.jpeg')}
                        style={styles.objectImage}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PostDetails')}>
                    <Image 
                        source={require('./assets/Images/luc-profile-pic.jpeg')}
                        style={styles.objectImage}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PostDetails')}>
                    <Image 
                        source={require('./assets/Images/luc-profile-pic.jpeg')}
                        style={styles.objectImage}
                    />
                </Pressable>
            </View>
            <View style={styles.imageContainer}>
                <Pressable onPress={() => navigation.navigate('PostDetails')}>
                    <Image 
                        source={require('./assets/Images/luc-profile-pic.jpeg')}
                        style={styles.objectImage}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PostDetails')}>
                    <Image 
                        source={require('./assets/Images/luc-profile-pic.jpeg')}
                        style={styles.objectImage}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PostDetails')}>
                    <Image 
                        source={require('./assets/Images/luc-profile-pic.jpeg')}
                        style={styles.objectImage}
                    />
                </Pressable>
            </View>
            <View style={styles.imageContainer}>
                <Pressable onPress={() => navigation.navigate('PostDetails')}>
                    <Image 
                        source={require('./assets/Images/luc-profile-pic.jpeg')}
                        style={styles.objectImage}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PostDetails')}>
                    <Image 
                        source={require('./assets/Images/luc-profile-pic.jpeg')}
                        style={styles.objectImage}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PostDetails')}>
                    <Image 
                        source={require('./assets/Images/luc-profile-pic.jpeg')}
                        style={styles.objectImage}
                    />
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screenText: {
        fontSize: 32,
    },
    objectImage: {
        width: 143,
        height: 143,
    },
    imageContainer: {
        flexDirection: 'row',
    },
    header: {
        backgroundColor: 'red',
        margin: 10,
        padding: 10,
    }
});