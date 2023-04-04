import {Text, View} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {styles} from "./styles";

type Props = {}

export function PlanetCard({}: Props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="earth" size={24} color="#1B1D1E"/>
            <Text style={styles.info}>
                Terra
            </Text>

            <MaterialCommunityIcons name="terrain" size={24} color="#1B1D1E"/>
            <Text style={styles.info}>
                Deserto
            </Text>
        </View>
    )
}