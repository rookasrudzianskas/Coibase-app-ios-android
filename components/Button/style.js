import {StyleSheet} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import colors from "../../resources/colors";


export default StyleSheet.create({
    btnContainer: {
        width: "100%",
        height: RFValue(50),
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: "#0052fe",
    },

    btnText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: RFValue(15),
    },
    iconStyle: {
        height: RFValue(20),
        width: RFValue(25),
        tintColor: "#FFFFFF",
    }
})