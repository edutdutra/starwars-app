import {Text, TouchableOpacity, View} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

import {styles} from "./styles";

type Props = {}

export function PeopleCard({}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.info}>
                Eduardo - 15/08/1999
            </Text>
            <TouchableOpacity>
                <FontAwesome5 name="space-shuttle" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}