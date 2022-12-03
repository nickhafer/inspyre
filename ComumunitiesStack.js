import { createStackNavigator } from '@react-navigation/stack';

import PeopleScreen from './PeopleScreen';
import DMScreen from './DMScreen';
import CommunitiesScreen from './CommunitiesScreen';
import IndividualCommunityScreen from './IndividualCommunityScreen'


export default function MessageStack ({}) {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="CommunitiesScreen" component={CommunitiesScreen} />
            <Stack.Screen name="IndividualCommunityScreen" component={IndividualCommunityScreen} />
        </Stack.Navigator>
    );
};