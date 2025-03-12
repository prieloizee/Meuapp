import React from 'react';
import { View, Button } from 'react-native';

function Home({ navigation }) {
  return (
    <View>
      <Button title="Ir para evento" onPress={() => navigation.navigate('CadastroEvento')} />
      <Button title="Ir para organizadores" onPress={() => navigation.navigate('CadastroOrganizador')} />
      <Button title="Ir para ingresso" onPress={() => navigation.navigate('CadastroIngresso')} />
    </View>
  );
}

export default Home;
