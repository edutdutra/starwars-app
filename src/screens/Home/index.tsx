import {Image, View} from "react-native";

import {Button} from "../../components/Button";

import logoPng from "../../assets/logo.png"
import {styles} from "./styles";

export function Home() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logoPng}/>

            <View style={styles.menu}>
                <Button title="Planetas" />
                <Button title="Pessoas" />
            </View>
        </View>
    )
}