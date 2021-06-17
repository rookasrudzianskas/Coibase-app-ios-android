import React from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";

export default function Button(props) {

    const {text, icon, disable} = props;
    return (
        <TouchableOpacity activeOpacity={0.5}>
            {text && <Text>{text}</Text>}
            {/* we form the button like this, because if we use defaults, we will not have control*/}
            {icon && <Image source={icon} resizeMode="contain" />}
        </TouchableOpacity>
    )
}