import {StyleSheet, StatusBar, Platform} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {colors} from "../../resources/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0,
    },

    mainView: {
        flexGrow: 1,
        paddingTop: RFValue(60),
        paddingHorizontal: 20,
        justifyContent: "space-between",
    },

    textStyle: {
        fontSize: RFValue(20),
        fontWeight: "bold",
    },

    textStyle1: {
        fontSize: RFValue(14),
        fontWeight: "bold",
    },

    flexRowView: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }
});