import {Image, TouchableOpacity, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";

import {useNavigation} from "@react-navigation/native";
import {AppNavigatorRoutesProps} from "../../routes/app.routes";

import logoPng from "../../assets/logo.png"
import {styles} from "./styles";

export function Header() {
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
                <AntDesign name="leftcircleo" size={24} color="black"/>
            </TouchableOpacity>

            <Image style={styles.logo} source={logoPng}/>
        </View>
    )
}