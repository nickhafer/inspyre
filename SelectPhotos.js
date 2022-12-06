import { Image, Text, View, StyleSheet, SafeAreaView, FlatList, Pressable } from 'react-native';

export default function SelectPhotos ({ navigation }) {

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.header}>
                <Text style={styles.cameraRoll}>Your Camera Roll</Text>
            </View>
            <View style={styles.imageContainer}>
                <Pressable onPress={() => navigation.navigate('PostDetails', 
                    {image: 'https://images.unsplash.com/photo-1616119547809-588a65fdc7e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'})}>
                    <Image 
                        source={{ uri: 'https://images.unsplash.com/photo-1616119547809-588a65fdc7e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'}}
                        style={styles.objectImage}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PostDetails', 
                    {image: 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80'})}>
                    <Image 
                        source={{ uri: 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80'}}
                        style={styles.objectImage}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PostDetails', 
                    {image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg'})}>
                    <Image 
                        source={{ uri: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg'}}
                        style={styles.objectImage}
                    />
                </Pressable>
            </View>
            <View style={styles.imageContainer}>
                <Pressable onPress={() => navigation.navigate('PostDetails', 
                    {image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg'})}>
                    <Image 
                        source={{ uri: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg'}}
                        style={styles.objectImage}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PostDetails', 
                    {image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg'})}>
                    <Image 
                        source={{ uri: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg'}}
                        style={styles.objectImage}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PostDetails', 
                    {image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg'})}>
                    <Image 
                        source={{ uri: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg'}}
                        style={styles.objectImage}
                    />
                </Pressable>
            </View>
            <View style={styles.imageContainer}>
                <Pressable onPress={() => navigation.navigate('PostDetails', 
                    {image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg'})}>
                    <Image 
                        source={{ uri: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg'}}
                        style={styles.objectImage}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PostDetails', 
                    {image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg'})}>
                    <Image 
                        source={{ uri: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg'}}
                        style={styles.objectImage}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PostDetails', 
                    {image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg'})}>
                    <Image 
                        source={{ uri: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg'}}
                        style={styles.objectImage}
                    />
                </Pressable>
            </View>
            <View style={styles.imageContainer}>
                <Pressable onPress={() => navigation.navigate('PostDetails', 
                    {image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg'})}>
                    <Image 
                        source={{ uri: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg'}}
                        style={styles.objectImage}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PostDetails', 
                    {image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg'})}>
                    <Image 
                        source={{ uri: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg'}}
                        style={styles.objectImage}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PostDetails', 
                    {image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg'})}>
                    <Image 
                        source={{ uri: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg'}}
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
        backgroundColor: 'white',
    },
    cameraRoll: {
        fontSize: 32,
        fontFamily: 'InterBlack',
    },
    objectImage: {
        width: 143,
        height: 143,
    },
    imageContainer: {
        flexDirection: 'row',
    },
    header: {
        padding: 10,
    }
});