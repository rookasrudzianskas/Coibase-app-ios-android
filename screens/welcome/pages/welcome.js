import React, {useState, useEffect} from "react";
import {View, Text, SafeAreaView} from 'react-native';
import style from "../style.js";

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

            </View>
        </SafeAreaView>
    );
}