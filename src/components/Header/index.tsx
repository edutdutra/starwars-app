import {Image, TouchableOpacity, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";

import logoPng from "../../assets/logo.png"

import {styles} from "./styles";

export function Header() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton}>
                <AntDesign name="leftcircleo" size={24} color="black"/>
            </TouchableOpacity>

            <Image style={styles.logo} source={logoPng}/>
        </View>
    )
}