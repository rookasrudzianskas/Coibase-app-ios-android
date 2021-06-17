import React from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import style from "./style";

export default function Button(props) {

    const {text, icon, disabled, btnStyle, onPress, btnTextStyle } = props;
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress} disabled={disabled} style={[style.btnContainer, btnStyle]}>
            {text && (
                <Text
                    style={[style.btnText, btnTextStyle,
                        {marginRight: icon ? 10 : 0 },
                    ]}
                >
                    {text}
                </Text>
            )}
            {/* we form the button like this, because if we use defaults, we will not have control*/}
            {icon && <Image source={icon} resizeMode="contain" style={style.iconStyle} />}
        </TouchableOpacity>
    );
}