import React, {useState, useEffect} from "react";
import {View, Text, SafeAreaView} from 'react-native';

export default function Welcome(props) {

    const {navigation} = props;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 2000);
    }, []);


    return (
        <SafeAreaView>
            <View>
                <Text>Coinbase</Text>

            </View>
        </SafeAreaView>
    );
}