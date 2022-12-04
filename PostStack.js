import { createStackNavigator } from '@react-navigation/stack';

import SelectPhotos from './SelectPhotos';
import PostDetails from './PostDetails';


export default function PostStack ({}) {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="SelectPhotos" component={SelectPhotos} />
            <Stack.Screen name="PostDetails" component={PostDetails} />
        </Stack.Navigator>
    );
};