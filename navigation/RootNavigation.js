import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Welcome} from "../screens/welcome";
import {Login, CreateAccount} from "../screens/auth";
// import {Dashboard} from "../screens/home";

export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>
                {/*     these are screens, we are going to be accessing*/}
                <Stack.Screen name="Splash" component={Welcome} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="CreateAccount" component={CreateAccount} />
                {/*<Stack.Screen name="Dashboard" component={Dashboard} />*/}
                {/*<Stack.Screen name="Dashboard" component={Dashboard} />*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
}