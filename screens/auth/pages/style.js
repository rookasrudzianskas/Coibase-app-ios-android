import {StyleSheet, StatusBar, Platform} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {colors} from "../../resources/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: Platoform.OS === "android" ? SatusBar.currentHeight: 0,
    },

    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    textStyle: {
        color: colors.white,
        fontSize: RFValue(45),
        fontWeight: "bold",
    },
    btnStyle: {
        backgroundColor: colors.white,
    },
    btnStyle2: {
        marginTop: 20,
    },
    btnTextStyle: {
        color: colors.primaryBlue
    },
    bottomView: {
        position: 'absolute',
        bottom: 30,
        left: 20,
        right: 20,
    }
})