import {Alert, FlatList, Text, View} from "react-native";
import {useEffect, useState} from "react";
import axios from "axios";

import {Header} from "../../components/Header";
import {Title} from "../../components/Title";
import {PlanetCard} from "../../components/PlanetCard";

import {PlanetDTO} from "../../dtos/PlanetDTO";

import {styles} from "./styles";


export function Planets() {
    const [planets, setPlanets] = useState<PlanetDTO[]>([]);

    async function fetchPlanets() {
        try {
            const {data} = await axios.get('https://swapi.dev/api/planets');

            setPlanets(data.results);
        } catch (error) {
            console.log(error);
            Alert.alert('Planetas', 'Não foi possível carregar os planetas');
        }
    }

    useEffect(() => {
        fetchPlanets();
    }, [])


    return (
        <View style={styles.container}>
            <Header/>
            <Title title="Planetas" subtitle="De todos os filmes do Star Wars"/>

            <View style={styles.listContent}>
                <FlatList
                    data={planets}
                    keyExtractor={item => item.name}
                    renderItem={({item}) => (
                        <PlanetCard data={item}/>
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <Text style={styles.listEmptyText}>
                            Nenhum planeta encontrado
                        </Text>
                    )}
                />
            </View>
        </View>
    )
}