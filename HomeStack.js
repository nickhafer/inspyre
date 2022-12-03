import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import HomeDMScreen from './HomeDMScreen';


export default function HomeStack ({}) {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="HomeDMScreen" component={HomeDMScreen} />
        </Stack.Navigator>
    );
};