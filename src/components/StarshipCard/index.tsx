import {Text, View} from "react-native";
import {FontAwesome} from '@expo/vector-icons';

import {StarshipDTO} from "../../dtos/StarshipDTO";

import {styles} from "./styles";

type Props = {
    data: StarshipDTO
}

export function StarshipCard({data}: Props) {
    return (
        <View style={styles.container}>
            <FontAwesome name="space-shuttle" size={24} color="#1B1D1E"/>
            <View style={styles.textContainer}>
                <Text style={styles.infoText}>
                    {data.name}
                </Text>

                <Text style={styles.infoText}>
                    {data.model}
                </Text>
            </View>

            <FontAwesome name="money" size={24} color="#1B1D1E"/>
            <Text style={styles.infoCost}>
                {data.cost_in_credits}
            </Text>
        </View>
    )
}