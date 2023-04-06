import {Text, TouchableOpacity, View} from "react-native";
import {FontAwesome5} from '@expo/vector-icons';

import {useNavigation} from "@react-navigation/native";
import {AppNavigatorRoutesProps} from "../../routes/app.routes";

import {PeopleDTO} from "../../dtos/PeopleDTO";

import {styles} from "./styles";

type Props = {
    data: PeopleDTO;
}

export function PeopleCard({data}: Props) {
    const navigation = useNavigation<AppNavigatorRoutesProps>();


    function handleGoToStarships() {
        navigation.navigate('starships', {urls: data.starships, peopleName: data.name})
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>

                <FontAwesome5 name="user-astronaut" size={22} color="black"/>
                <Text style={styles.infoText}>
                    {data.name}
                </Text>

                <View style={styles.dateContent}>
                    <FontAwesome5 name="birthday-cake" size={22} color="#1B1D1E"/>
                    <Text style={styles.infoText}>
                        {data.birth_year}
                    </Text>
                </View>

            </View>

            <TouchableOpacity onPress={handleGoToStarships}>
                <FontAwesome5 name="space-shuttle" size={24} color="#1B1D1E"/>
            </TouchableOpacity>
        </View>
    )
}