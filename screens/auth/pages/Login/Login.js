import React, {useState} from "react";
import {View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity} from "react-native";
import {Button} from "../../../../components";

export default function Login(props) {

    const {navigation} = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>
                        Sign in to Coinbase
                    </Text>
                    <View>
                        <Text>Email</Text>
                        <TextInput value={email} placeholder="Enter the email ✉️" onChangeText={(text) => setEmail(text)} />
                    </View>
                </View>

                <View>
                    <Button text="Sign in 🚀" disabled={false} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}