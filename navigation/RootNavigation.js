import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Welcome} from "../screens/welcome";

export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/*     these are screens, we are going to be accessing*/}
                <Stack.Screen name="Splash" component={Welcome} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}