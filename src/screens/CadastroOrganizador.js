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

export default function CadastroOrganizador({ navigation }) {
  const [organizador, setUser] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
  });

  async function handleCadastroOrganizador() {
    await api.postOrganizador(organizador).then(
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
      <Text style={styles.title}> Faça Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={organizador.nome}
        onChangeText={(value) => {
          setUser({ ...organizador, nome: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={organizador.email}
        onChangeText={(value) => {
          setUser({ ...organizador, email: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={organizador.senha}
        onChangeText={(value) => {
          setUser({ ...organizador, senha: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={organizador.telefone}
        onChangeText={(value) => {
          setUser({ ...organizador, telefone: value });
        }}
      />
      <TouchableOpacity
        onPress={handleCadastroOrganizador}
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
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 5,
  },
});
