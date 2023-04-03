import {FlatList, Text, View} from "react-native";

import {Header} from "../../components/Header";

import {styles} from "./styles";
import {Title} from "../../components/Title";
import {PeopleCard} from "../../components/PeopleCard";

export function People() {
    return (
        <View style={styles.container}>
            <Header />
            <Title title="Pessoas" subtitle="De todos os filmes do Star Wars" />

            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
        </View>
    )
}