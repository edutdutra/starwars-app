import {FlatList, Text, View} from "react-native";

import {Header} from "../../components/Header";
import {Title} from "../../components/Title";
import {PeopleCard} from "../../components/PeopleCard";

import {styles} from "./styles";

export function People() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

    return (
        <View style={styles.container}>
            <Header/>
            <Title title="Pessoas" subtitle="De todos os filmes do Star Wars"/>

            <View style={styles.listContent}>
                {/*ajustar quando puxar os dados*/}
                <FlatList
                    data={data}
                    renderItem={({item}) => (
                        <PeopleCard/>
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