import { createStackNavigator } from '@react-navigation/stack';

import PeopleScreen from './PeopleScreen';
import DMScreen from './DMScreen';


export default function MessageStack ({}) {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="PeopleScreen" component={PeopleScreen} />
            <Stack.Screen name="DMScreen" component={DMScreen} />
        </Stack.Navigator>
    );
};