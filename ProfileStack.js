import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from './ProfileScreen';
import IndividualItem from './IndividualItem';
import HomeProfileScreen from './HomeProfileScreen';
import HomeDMScreen from './HomeDMScreen';


export default function HomeStack ({}) {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="IndividualItem" component={IndividualItem} />
            <Stack.Screen name="HomeProfileScreen" component={HomeProfileScreen} />
            <Stack.Screen name="HomeDMScreen" component={HomeDMScreen} />
        </Stack.Navigator>
    );
};