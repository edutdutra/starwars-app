import {Alert, FlatList, Text, View} from "react-native";
import {useEffect, useState} from "react";
import {useRoute} from "@react-navigation/native";
import axios from "axios";

import {Title} from "../../components/Title";
import {Header} from "../../components/Header";
import {StarshipCard} from "../../components/StarshipCard";

import {StarshipDTO} from "../../dtos/StarshipDTO";

import {styles} from "./styles";


type RouteParamsProps = {
    urls: string[];
    peopleName: string;
}

export function Starships() {
    const [starships, setStarships] = useState<StarshipDTO[]>([]);

    const route = useRoute();

    const {urls, peopleName} = route.params as RouteParamsProps;


    async function fetchStarships() {
        try {
            const results = [];

            for (let url of urls) {
                const {data} = await axios.get(url);
                results.push(data);
            }

            setStarships(results)
        } catch (error) {
            console.log(error);
            Alert.alert('Veículos', 'Não foi possível carregar os veículos');
        }
    }

    useEffect(() => {
        fetchStarships()
    }, [])

    return (
        <View style={styles.container}>
            <Header/>
            <Title title="Veículos" subtitle={`Utilizados(as) pelo(a) ${peopleName}`}/>

            <View style={styles.listContent}>
                <FlatList
                    data={starships}
                    keyExtractor={item => item.model}
                    renderItem={({item}) => (
                        <StarshipCard data={item}/>
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <Text style={styles.listEmptyText}>
                            Nenhum veículo encontrado
                        </Text>
                    )}
                />
            </View>
        </View>
    )
}