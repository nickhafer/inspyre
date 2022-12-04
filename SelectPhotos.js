import { Image, Text, View, StyleSheet, SafeAreaView, FlatList, Pressable } from 'react-native';

export default function SelectPhotos ({ navigation }) {

    return (
        <SafeAreaView style={styles.screenContainer}>
            <Pressable onPress={() => navigation.navigate('PostDetails')}>
                <Text style={styles.screenText}>Pick a Photo</Text>
                <Text style={styles.screenText}> Continue -&gt; </Text>
            </Pressable>
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
});