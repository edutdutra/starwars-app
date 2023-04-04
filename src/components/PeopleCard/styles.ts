import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fde047',
        padding: 8,
        width: 350,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 5,
        paddingHorizontal: 12
    },
    content: {
        flex: 1,
        flexDirection: 'row'
    },
    infoText: {
        color: '#1B1D1E',
        fontSize: 18,
        fontWeight: '400',
        marginLeft: 8
    },
    dateContent: {
        flexDirection: 'row',
        marginLeft: 10
    }
});