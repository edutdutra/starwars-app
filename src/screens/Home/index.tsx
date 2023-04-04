import {Image, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {AppNavigatorRoutesProps} from "../../routes/app.routes";

import {Button} from "../../components/Button";

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import logoPng from "../../assets/logo.png"
import {styles} from "./styles";

export function Home() {
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleOpenPlanets() {
        navigation.navigate('planets')
    }

    function handleOpenPeople() {
        navigation.navigate('people')
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logoPng}/>

            <View style={styles.menu}>
                <Button title="Planetas" onPress={handleOpenPlanets}>
                    <Ionicons name="planet" size={26} color="#333638" />
                </Button>

                <Button title="Pessoas" onPress={handleOpenPeople}>
                    <FontAwesome5 name="users" size={24} color="#333638" />
                </Button>
            </View>
        </View>
    )
}