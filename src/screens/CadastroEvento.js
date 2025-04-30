import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button,
} from "react-native";
import api from "../axios/axios";

export default function CadastroEvento({ navigation }) {
  const [evento, setUser] = useState({
    nome: "",
    descricao: "",
    data_hora: "",
    local: "",
    fk_id_organizador: "",
  });

  async function handleCadastroEvento() {
    await api.postEvento(evento).then(
      (response) => {
        Alert.alert("OK", response.data.message);
      },
      (error) => {
        Alert.alert("Erro", error.response.data.error);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Cadastre seu evento</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={evento.nome}
        onChangeText={(value) => {
          setUser({ ...evento, nome: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={evento.descricao}
        onChangeText={(value) => {
          setUser({ ...evento, descricao: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Data e hora"
        value={evento.data_hora}
        onChangeText={(value) => {
          setUser({ ...evento, data_hora: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Local"
        value={evento.local}
        onChangeText={(value) => {
          setUser({ ...evento, local: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Id_organizador"
        value={evento.fk_id_organizador}
        onChangeText={(value) => {
          setUser({ ...evento, fk_id_organizador: value });
        }}
      />
      <TouchableOpacity
        onPress={handleCadastroEvento}
        style={styles.button}
      >
        <Text>Cadastrar</Text>
      </TouchableOpacity>
      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "pink",
    padding: 10,
    borderRadius: 5,
  },
});