import React, {useState} from "react";
import {View, Text, SafeAreaView, ScrollView, TouchableWithoutFeedback, TouchableHighlight, TextInput} from "react-native";
import {Button} from "../../../../components";
import style from "../style";

export default function CreateAccount(props) {

    const {navigation} = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={style.container}>
            <ScrollView contentContainerStyle={style.mainView}>
                <View>
                    <Text style={style.textStyle}>
                        Create your account
                    </Text>

                    <View style={style.setMargin}>
                        <Text>First name</Text>
                        <TextInput value={firstName} placeholder={"Rokas"} style={style.textInputStyle} onChangeText={(text) => setFirstName(text)} />
                    </View>

                    <View style={style.setMargin}>
                        <Text>Last name</Text>
                        <TextInput value={lastName} placeholder={"Rudzianskas"} style={style.textInputStyle} onChangeText={(text) => setLastName(text)} />
                    </View>

                    <View style={style.setMargin}>
                        <Text>Email</Text>
                        <TextInput value={email} placeholder={"hello@connexios.com"} style={style.textInputStyle} onChangeText={(text) => setEmail(text)} />
                    </View>

                    <View style={style.setMargin}>
                        <Text>Password</Text>
                        <TextInput value={password} placeholder={"***********"} style={style.textInputStyle} onChangeText={(text) => setPassword(text)} />
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

