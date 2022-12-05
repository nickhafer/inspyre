import { createStackNavigator } from '@react-navigation/stack';

import PeopleScreen from './PeopleScreen';
import DMScreen from './DMScreen';
import HomeProfileScreen from './HomeProfileScreen';


export default function MessageStack ({}) {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="PeopleScreen" component={PeopleScreen} />
            <Stack.Screen name="DMScreen" component={DMScreen} />
            <Stack.Screen name="HomeProfileScreen" component={HomeProfileScreen}/>
        </Stack.Navigator>
    );
};