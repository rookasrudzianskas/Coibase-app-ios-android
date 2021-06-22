import React, {useState} from "react";
import {View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity} from "react-native";
import {Button} from "../../../../components";
import style from "../style";

export default function Login(props) {

    const {navigation} = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={style.container}>
            <ScrollView contentContainerStyle={style.mainView}>
                <View>
                    <Text style={style.textStyle}>
                        Sign in to Coinbase
                    </Text>
                    <View style={style.setMargin}>
                        <Text style={style.textStyle1}>Email</Text>
                        <TextInput style={style.textInputStyle} value={email} placeholder="Enter the email ✉️" onChangeText={(text) => setEmail(text)} />
                    </View>

                    <View style={style.setMargin}>
                        <Text style={style.textStyle1}>Password</Text>
                        <TextInput style={style.textInputStyle} type={password} value={password} placeholder="Enter the password 🙈️" onChangeText={(text) => setPassword(text)} />
                    </View>

                    <View style={style.flexRowView}>
                        <TouchableOpacity style={style.linkStyle}>
                            <Text>Forgot password</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.linkStyle}>
                            <Text>Privacy policy</Text>
                        </TouchableOpacity>

                    </View>

                </View>

                <View style={style.btnView}>
                    {/* this is working on*/}
                    <Button text="Sign in 🚀" disabled={false} onPress={() => navigation.navigate("Home")} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}