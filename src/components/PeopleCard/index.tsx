import {Text, TouchableOpacity, View} from "react-native";
import {FontAwesome5} from '@expo/vector-icons';

import {styles} from "./styles";

type Props = {}

export function PeopleCard({}: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>

                <FontAwesome5 name="user-astronaut" size={22} color="black"/>
                <Text style={styles.infoText}>
                    Eduardo
                </Text>

                <View style={styles.dateContent}>
                    <FontAwesome5 name="birthday-cake" size={22} color="#1B1D1E"/>
                    <Text style={styles.infoText}>
                        15/08/1999
                    </Text>
                </View>

            </View>

            <TouchableOpacity>
                <FontAwesome5 name="space-shuttle" size={24} color="#1B1D1E"/>
            </TouchableOpacity>
        </View>
    )
}