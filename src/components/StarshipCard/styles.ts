import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fde047',
        padding: 8,
        width: 350,
        borderRadius: 10,
        marginBottom: 5,
        alignItems: "center"
    },
    textContainer: {
        flex: 1
    },
    infoText: {
        color: '#1B1D1E',
        fontSize: 16,
        fontWeight: '400',
        marginLeft: 8
    },
    infoCost: {
        color: '#1B1D1E',
        fontSize: 16,
        fontWeight: '400',
        marginLeft: 8,
        marginRight: 10
    }
});