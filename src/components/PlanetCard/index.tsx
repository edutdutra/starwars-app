import {Text, View} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {PlanetDTO} from "../../dtos/PlanetDTO";

import {styles} from "./styles";

type Props = {
    data: PlanetDTO
}

export function PlanetCard({data}: Props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="earth" size={24} color="#1B1D1E"/>
            <Text style={styles.infoText}>
                {data.name}
            </Text>

            <MaterialCommunityIcons name="terrain" size={24} color="#1B1D1E"/>
            <Text style={styles.infoText}>
                {data.terrain}
            </Text>
        </View>
    )
}