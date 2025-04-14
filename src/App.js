import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import CadastroEvento from "./screens/CadastroEvento";
import CadastroOrganizador from "./screens/CadastroOrganizador";
import CadastroIngresso from "./screens/CadastroIngresso";
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import Layout from "./components/Layout";
import TaskList from "./screens/TaskList";
import TaskDetail from "./screens/TaskDetail";
import EventosScreen from "./screens/EventosScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {/* <Stack.Screen 
        name="TaskList" 
        component={TaskList}
        />

        <Stack.Screen 
        name="TaskDetail" 
        component={TaskDetail}
        /> */}


        <Stack.Screen
          name="Login"
          component={() => (
            <Layout>
              <Login />
            </Layout>
          )}
        />
        <Stack.Screen
          name="Cadastro"
          component={() => (
            <Layout>
              <Cadastro />
            </Layout>
          )}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CadastroEvento" component={CadastroEvento} />
        <Stack.Screen name="CadastroOrganizador"component={CadastroOrganizador}/>
        <Stack.Screen name="CadastroIngresso" component={CadastroIngresso} />
        <Stack.Screen name="EventosScreen">{()=>(
          <Layout>
            <EventosScreen/>
          </Layout>
        )}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
