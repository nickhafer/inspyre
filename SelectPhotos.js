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
                    {image: 'https://images.unsplash.com/photo-1509205477838-a534e43a849f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1756&q=80'})}>
                    <Image 
                        source={{ uri: 'https://images.unsplash.com/photo-1509205477838-a534e43a849f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1756&q=80'}}
                        style={styles.objectImage}
                    />
                </Pressable>
            </View>
            <View style={styles.imageContainer}>
                <Pressable onPress={() => navigation.navigate('PostDetails', 
                    {image: 'https://images.unsplash.com/photo-1619021169968-5d2143e9287b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80'})}>
                    <Image 
                        source={{ uri: 'https://images.unsplash.com/photo-1619021169968-5d2143e9287b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80'}}
                        style={styles.objectImage}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PostDetails', 
                    {image: 'https://images.unsplash.com/photo-1626202375382-cfefecd3a3d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80'})}>
                    <Image 
                        source={{ uri: 'https://images.unsplash.com/photo-1626202375382-cfefecd3a3d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80'}}
                        style={styles.objectImage}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PostDetails', 
                    {image: 'https://images.unsplash.com/photo-1551571303-d608e971994b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80'})}>
                    <Image 
                        source={{ uri: 'https://images.unsplash.com/photo-1551571303-d608e971994b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80'}}
                        style={styles.objectImage}
                    />
                </Pressable>
            </View>
            <View style={styles.imageContainer}>
                <Pressable onPress={() => navigation.navigate('PostDetails', 
                    {image: 'https://images.unsplash.com/photo-1489672155498-1331365e0dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1730&q=80'})}>
                    <Image 
                        source={{ uri: 'https://images.unsplash.com/photo-1489672155498-1331365e0dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1730&q=80'}}
                        style={styles.objectImage}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PostDetails', 
                    {image: 'https://images.unsplash.com/photo-1579043370067-2059ce580b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1819&q=80'})}>
                    <Image 
                        source={{ uri: 'https://images.unsplash.com/photo-1579043370067-2059ce580b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1819&q=80'}}
                        style={styles.objectImage}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PostDetails', 
                    {image: 'https://images.unsplash.com/photo-1509395662321-d57cb413ff20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80'})}>
                    <Image 
                        source={{ uri: 'https://images.unsplash.com/photo-1509395662321-d57cb413ff20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80'}}
                        style={styles.objectImage}
                    />
                </Pressable>
            </View>
            <View style={styles.imageContainer}>
                <Pressable onPress={() => navigation.navigate('PostDetails', 
                    {image: 'https://images.unsplash.com/photo-1553558888-6440b4097908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80'})}>
                    <Image 
                        source={{ uri: 'https://images.unsplash.com/photo-1553558888-6440b4097908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80'}}
                        style={styles.objectImage}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PostDetails', 
                    {image: 'https://images.unsplash.com/photo-1503301360699-4f60cf292ec8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80'})}>
                    <Image 
                        source={{ uri: 'https://images.unsplash.com/photo-1503301360699-4f60cf292ec8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80'}}
                        style={styles.objectImage}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PostDetails', 
                    {image: 'https://images.unsplash.com/photo-1598463166228-c0f90d180918?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80'})}>
                    <Image 
                        source={{ uri: 'https://images.unsplash.com/photo-1598463166228-c0f90d180918?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80'}}
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