import { createStackNavigator } from '@react-navigation/stack';

import HomeSearchScreen from './HomeSearchScreen';
import HomeScreen from './HomeScreen';
import HomeDMScreen from './HomeDMScreen';
import SearchChairs from './SearchChairs';
import HomeProfileScreen from './HomeProfileScreen';
import IndividualItem from './IndividualItem';


export default function ProfileStack ({}) {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="IndividualItem" component={IndividualItem} />
            <Stack.Screen name="HomeDMScreen" component={HomeDMScreen} />
            <Stack.Screen name="HomeSearchScreen" component={HomeSearchScreen}/>
            <Stack.Screen name="SearchChairs" component={SearchChairs}/>
            <Stack.Screen name="HomeProfileScreen" component={HomeProfileScreen}/>
        </Stack.Navigator>
    );
};