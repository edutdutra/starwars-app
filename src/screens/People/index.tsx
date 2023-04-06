import {Alert, FlatList, Text, View} from "react-native";
import {useEffect, useState} from "react";
import axios from "axios";

import {Header} from "../../components/Header";
import {Title} from "../../components/Title";
import {PeopleCard} from "../../components/PeopleCard";

import {PeopleDTO} from "../../dtos/PeopleDTO";

import {styles} from "./styles";


export function People() {
    const [people, setPeople] = useState<PeopleDTO[]>([]);


    async function fetchPeople() {
        try {
            const {data} = await axios.get('https://swapi.dev/api/people');

            setPeople(data.results);
        } catch (error) {
            console.log(error);
            Alert.alert('Pessoas', 'Não foi possível carregar as pessoas');
        }
    }

    useEffect(() => {
        fetchPeople();
    }, [])

    return (
        <View style={styles.container}>
            <Header/>
            <Title title="Pessoas" subtitle="De todos os filmes do Star Wars"/>

            <View style={styles.listContent}>
                <FlatList
                    data={people}
                    keyExtractor={item => item.name}
                    renderItem={({item}) => (
                        <PeopleCard data={item}/>
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <Text style={styles.listEmptyText}>
                            Nenhum pessoa encontrada
                        </Text>
                    )}
                />
            </View>
        </View>
    )
}