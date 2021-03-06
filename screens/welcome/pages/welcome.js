import React, {useState, useEffect} from "react";
import {View, Text, SafeAreaView} from 'react-native';
import style from "../style.js";
import {Button} from "../../../components";

export default function Welcome(props) {

    const {navigation} = props;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 2000);
    }, []);


    return (
        <SafeAreaView style={style.container}>
            <View style={style.mainView}>
                <Text style={style.textStyle}>Coinbase</Text>
                <Text style={style.textStyle}>App</Text>
                {
                    visible &&
                    <View style={style.bottomView}>
                        <Button text="Get Started" disabled={false} onPress={() => navigation.navigate("CreateAccount")} btnStyle={style.btnStyle} btnTextStyle={style.btnTextStyle} />
                        <Button text="Sign In" disabled={false} onPress={() => navigation.navigate("Login")} btnTextStyle={style.btnStyle2} />
                    </View>
                }

            </View>
        </SafeAreaView>
    );
}