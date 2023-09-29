import { StyleSheet, View } from "react-native";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import api from "../api";
import { Button, Card, Text, TextInput } from "react-native-paper";
import { Cards } from "../components/Cards";
import { FlatList } from "react-native-web";

export function Home() {
  const [sugestoes, setSugestoes] = useState([]);
  const [pesquisar, setPesquisar] = useState("");

  const getIniciativas = async () => {
    try {
      const res = await api.get("/sugestoes");
      setSugestoes(res.data);
    } catch (error) {
      console.log("erro ao carregar iniciativas", error);
    }
  };

  useEffect(() => {
    getIniciativas();
  }, []);

  // Função para filtrar as estações com base no nome
  function filtrarSugestoes() {
    if (pesquisar === "") {
      // Se o campo de pesquisa estiver vazio, retorna todas as estações
      return sugestoes;
    } else {
      // Filtra as estações com base no nome
      return sugestoes.filter((estacao) =>
        estacao.tipo_sugestao.toLowerCase().includes(pesquisar.toLowerCase())
      );
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#E0F6FC" }}>
      <Header />
      <View
        style={{
          paddingHorizontal: 70,
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <View style={{ gap: 20 }}>
          <Text style={{ fontWeight: "bold", color: "#03ABF8", fontSize: 16 }}>
            {filtrarSugestoes().length} Iniciativas
          </Text>

          <FlatList
            data={filtrarSugestoes()}
            keyExtractor={(item) => item.id.toString()}
            numColumns={4} 
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Cards data={item} />
              </View>
            )}
          />
        </View>
        <View>
          <TextInput
            placeholder="Pesquisar"
            value={pesquisar}
            onChangeText={(text) => setPesquisar(text)}
            style={{
              backgroundColor: "#FFF",
              borderRadius: 10,
              height: 40,
              borderWidth: "none",
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    padding: 20,
  },
  text: {
    color: "#333333",
  },
  itemEmpty: {
    backgroundColor: "transparent",
  },
});
