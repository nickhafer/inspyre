import { createStackNavigator } from '@react-navigation/stack';

import HomeSearchScreen from './HomeSearchScreen';
import HomeScreen from './HomeScreen';
import HomeDMScreen from './HomeDMScreen';
import SearchChairs from './SearchChairs';


export default function HomeStack ({}) {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="HomeDMScreen" component={HomeDMScreen} />
            <Stack.Screen name="HomeSearchScreen" component={HomeSearchScreen}/>
            <Stack.Screen name="SearchChairs" component={SearchChairs}/>
        </Stack.Navigator>
    );
};